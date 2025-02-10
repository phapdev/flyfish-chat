/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_API_SERVER_URL: string;
  readonly VITE_ATOMA_BASE_URL: string;
  readonly VITE_ATOMA_API_KEY: string;
  readonly VITE_SUILEND_URL: string;
  readonly VITE_SUICETUS_URL: string;
  readonly VITE_SWAP_SERVER_URL: string;
  // more env variables...
}
