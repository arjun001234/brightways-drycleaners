import { createClient, User } from '@supabase/supabase-js'
import { getSession } from './session';

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        SUPABASE_URL: string;
        SUPABASE_SERVICE_ROLE: string;
      }
    }
  }

if (!process.env.SUPABASE_URL) throw new Error('SUPABASE_URL is required');

if (!process.env.SUPABASE_SERVICE_ROLE) throw new Error('PUBLIC_SUPABASE_SERVICE_ROLE is required');

export const supabaseAdmin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE);

export const getToken = async (request: Request) => {
  const cookieHeader =
    request.headers.get("Cookie");
  return (await getSession(cookieHeader)).get("access_token");
};
export const getUserByToken = async (token: string) => {
  supabaseAdmin.auth.setAuth(token);
  const { user, error } =
    await supabaseAdmin.auth.api.getUser(token);
  return { user, error };
};
export const isAuthenticated = async (
  request: Request,
  validateAndReturnUser = false
) : Promise<User | null> => {
  const token = await getToken(request);
  if (!token && !validateAndReturnUser)
    return null;
  if (validateAndReturnUser) {
    const { user, error } = await getUserByToken(
      token
    );
    if (error) {
      console.log(error)
      return null;
    }
    return user;
  }
  return null;
};