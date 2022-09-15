declare global {
    interface Window {
        env: {
            SUPABASE_URL: string;
            SUPABASE_ANON_KEY: string;
            SERVER_URL: string;
            RECAPTCHA_SITE_KEY: string;
            GOOGLE_MAP_API_KEY: string;
            GOOGLE_TRACKING_ID: string;
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
        RECAPTCHA_SITE_KEY: string;
        RECAPTCHA_SECRET_KEY: string;
        GOOGLE_MAP_API_KEY: string;
        AWS_USER_ACCESS_KEY_ID: string;
        AWS_USER_SECRET_ACCESS_KEY: string;
        AWS_EMAIL_SERVICE_REGION: string;
        GOOGLE_TRACKING_ID: string;
      }
    }
}

export {}