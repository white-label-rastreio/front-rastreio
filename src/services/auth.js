export const usuarioAutenticado = () =>
    localStorage.getItem('userToken') !== null;
  
  // Define a constante parseJwt que retorna o payload do usuário convertido em JSON
  export const parseJwt = () => {
    // Define a variável base64 que recebe o payload do usuário logado codificado
    let base64 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsdnR0d2t1ZDAwMDB0N3FuaHFzdXg4dWQiLCJpYXQiOjE3MTQ5MzE0NTAsImV4cCI6MTcxNTAxNzg1MH0.8WrbvRAtJQQW7_Bkeg86RmN1CWztcc2oQ25VktMdSDA';
  
    // Decodifica a base64 para string, através do método a to b
    // e converte a string para JSON
    return JSON.parse(window.atob(base64));
  };