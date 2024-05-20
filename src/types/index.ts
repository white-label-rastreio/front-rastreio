export interface DataPostagem {
  id: string;
  codigoRastreio: string;
  ultimaAtualizacao: string;
  store_id: string;
  createdAt: Date;
  updatedAt: Date;
  interacoesPedido: InteracoesPedido[];
  enderecoEntrega: EnderecoEntrega;
}

export interface EnderecoEntrega {
  id: string;
  postagem_id: string;
  nome: string;
  rua: string;
  bairro: string;
  cep: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InteracoesPedido {
  pais?: string;
  descricao: string;
  active: boolean;
  hora: string;
  data: string;
  cpais?: string;
}
