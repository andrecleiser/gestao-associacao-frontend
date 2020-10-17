// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const API_BASE = 'http://localhost:8080';
const API_BASE_SEGURANCA = 'http://localhost:8081';

// const API_BASE = 'https://api-gestao-associados.herokuapp.com/';
// const API_BASE_SEGURANCA = 'https://app-seguranca-api.herokuapp.com';

export const environment = {
  production: false,

  endpoints: {
    associados: `${API_BASE}/associados`,
    autenticao: `${API_BASE_SEGURANCA}`,
  },

  aplicacao: {
    clienteId: '20c5f761-d17c-45e4-83f8-7176f7cb178e',
    clienteSecrect: '31de8f8d-1ad1-45be-941d-9737d47ff04e'
  }
};
