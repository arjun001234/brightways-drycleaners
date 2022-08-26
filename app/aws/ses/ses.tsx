import  { SESClient }  from  "@aws-sdk/client-ses";
const sesClient = new SESClient({ region: "ap-south-1" });
export  { sesClient };