import axios from 'axios';

// Define a constate api para a chamada das requisições
export const api = axios.create({
  // Define a URL base para as requisições à API
  baseURL: 'https://apitest.thiagofinch.net.br',
});