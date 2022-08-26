
import {
    SendEmailCommand,
    SendEmailCommandInput,
    VerifyDomainDkimCommandInput,
    VerifyDomainIdentityCommand,
  }  from "@aws-sdk/client-ses";
import { sesClient } from "../ses";

class EmailProvider {
    private static instance: EmailProvider
    private params : VerifyDomainDkimCommandInput = {
       Domain: "brightwaysdrycleaners.com"
    }
    constructor() {
        // this.run().then(res => console.log(res)).catch(err => console.log(err))
        // this.sendEmail("arjunkanojia001@gmail.com").then(res => console.log(res)).catch(err => console.log(err))
    }
    public static getInstance() : EmailProvider {
        if(this.instance){
            return this.instance
        }
        this.instance = new EmailProvider();
        return this.instance;
    }
    private async run() {
        try {
            const data = await sesClient.send(new VerifyDomainIdentityCommand(this.params));
            console.log("Success", data);
            return data; // For unit tests.
          } catch (err: any) {
            console.log("Error", err.stack);
        }
    }
    public async sendEmail(to: string){
         try {
            const data = await sesClient.send(new SendEmailCommand(this.generateParams(to)));
            console.log("Success", data);
            return data;
         } catch (err) {
            console.log("Error", err);
         }
    }
    private generateParams(to: string) : SendEmailCommandInput {
          return {
            Destination: {
                ToAddresses:[to]
            },
            Message: {
                Subject: {
                    Data: "Test Email by Brightways"
                },
                Body: {
                    Html: {
                        Charset: "UTF-8",  
                        Data: "HTML_FORMAT_BODY",
                      },
                      Text: {
                        Charset: "UTF-8",
                        Data: "TEXT_FORMAT_BODY",
                      }
                }
            },
            Source: "arjun@brightwaysdrycleaners.com",
            ReplyToAddresses: []
          }
    }
}

export const provider = EmailProvider.getInstance();
