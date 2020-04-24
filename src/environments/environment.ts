// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const API_BASE = 'http://localhost:8080';

export const environment = {
  production: false,

  endpoints: {
    associados: `${API_BASE}/associados`
  }
};
