import React, {useState, useEffect} from 'react'
import { CardRastreio } from '../../Components/CardRastreio'
import { Header } from './../../Components/Header';
import { Footer } from './../../Components/Footer';

import './styles/style.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';

export default function Rastreio() {
  const navigate = useNavigate();
    const [dadosRastreamento, setDadosRastreiamento] = useState({});
    const [canLoad, setCanLoad] = useState(false);
    useEffect(() => {
    carregaTela();
  }, [])
  
  function carregaTela(){
    setDadosRastreiamento(JSON.parse(localStorage.getItem("dadosRastreamento")));
    console.log('Objeto foi pego dentro da outra pagina')
    setCanLoad(true);
  }


const { id:codigoRastreio } = useParams();

React.useEffect(() => {
  (async()=>{
    try {
      const { data, status } = await api.get("postagem/" + codigoRastreio);
      if (status === 200) {
        console.log("Status 200");
        const dados = {
          codigoRastreio: data.codigoRastreio,
          ultimaAtualizacao: data.ultimaAtualizacao,
    
          interacoesPedido: data.interacoesPedido.map((interacao) => ({
            data: interacao.data,
            hora: interacao.hora,
            descricao: interacao.descricao,
            pais: interacao.pais,
            active: interacao.active,
          })),
    
          enderecoEntrega: {
            nome: data.enderecoEntrega.nome,
            rua: data.enderecoEntrega.rua,
            bairro: data.enderecoEntrega.bairro,
            cep: data.enderecoEntrega.cep,
          },
        };
        console.log("objeto criado");
        setDadosRastreiamento(dados);
      } else {
        toast.warn("Entrega referente ao código de rastreio não encontrada.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("Houve um erro ao acessar o serviço de busca.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  })()
}, []);




  return (
    <div className='contentArea'>
        <Header/>
        <div className='rastreioContentArea !w-full'>
            { canLoad &&
                <CardRastreio
                    dados={dadosRastreamento}
                />
            }
        </div>
        <Footer/>
    </div>
  )
}
