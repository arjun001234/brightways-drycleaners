declare global {
    interface Window {
        env: {
            SUPABASE_URL: string;
            SUPABASE_ANON_KEY: string;
            SERVER_URL: string;
        }
    }
}

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        SUPABASE_URL: string;
        SUPABASE_SERVICE_ROLE: string;
        SERVER_URL: string;
        SANITY_PROJECT_ID: string;
        SANITY_DATASET: string;
      }
    }
}

export {}