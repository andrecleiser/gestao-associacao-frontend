const API_BASE = 'https://app-gestao-associado-frontend.herokuapp.com';
const API_BASE_SEGURANCA = 'https://app-seguranca-api.herokuapp.com';


export const environment = {
  production: true,
  endpoints: {
    associados: `${API_BASE}/associados`,
    autenticao: `${API_BASE_SEGURANCA}`,
  },

  aplicacao: {
    clienteId: '20c5f761-d17c-45e4-83f8-7176f7cb178e',
    clienteSecrect: '31de8f8d-1ad1-45be-941d-9737d47ff04e'
  }
};
