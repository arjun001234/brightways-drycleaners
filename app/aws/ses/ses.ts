import  { SESClient }  from  "@aws-sdk/client-ses";
const sesClient = new SESClient({ region: process.env.AWS_EMAIL_SERVICE_REGION,credentials: {accessKeyId: process.env.AWS_USER_ACCESS_KEY_ID,secretAccessKey: process.env.AWS_USER_SECRET_ACCESS_KEY} });
export  { sesClient };