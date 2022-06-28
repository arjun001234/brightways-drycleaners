import { ApiError, createClient, User } from '@supabase/supabase-js'
import { getSession } from './session';

if (!process.env.SUPABASE_URL) throw new Error('SUPABASE_URL is required');

if (!process.env.SUPABASE_SERVICE_ROLE) throw new Error('PUBLIC_SUPABASE_SERVICE_ROLE is required');

if (!process.env.SERVER_URL) throw new Error('SERVICE_URL is required');

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
) : Promise<[User | null,ApiError | null]> => {
  const token = await getToken(request);
  if (!token && !validateAndReturnUser)
    return [null,{message: "not found",status: 404}];
  if (validateAndReturnUser) {
    const { user, error } = await getUserByToken(
      token
    );
    if (error) {
      
      return [null,error];
    }
    return [user,error];
  }
  return [null,null];
};