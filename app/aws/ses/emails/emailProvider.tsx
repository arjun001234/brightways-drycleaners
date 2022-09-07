
import {
    VerifyDomainDkimCommandInput,
    VerifyDomainIdentityCommand,
    SendTemplatedEmailCommand,
  }  from "@aws-sdk/client-ses";
import logger from "~/logging/logger";
import { BookingDto } from "~/models/booking.model";
import { sesClient } from "../ses";

class EmailProvider {
    private static instance: EmailProvider
    private params : VerifyDomainDkimCommandInput = {
       Domain: "brightwaysdrycleaners.com"
    }
    constructor() {
        this.run()
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
            logger.info("Connection successfully established with amazon SES",data)
            return data;
          } catch (err: any) {
            logger.error("Failed to established connection with amazon SES",err)
        }
    }
    public async sendBookingConfirmationEmailToCustomer(params: BookingDto){
        try {
            const data = await sesClient.send(new SendTemplatedEmailCommand({
                Destination: {
                    ToAddresses: [params.email]
                },
                Template: "booking_confirmation_for_client",
                TemplateData: JSON.stringify({
                    name: params.name,
                    pickUpDate: params.pickUpDate,
                    pickUpTime: params.timeSlot,
                    address: params.address
                }),
                Source: "info@brightwaysdrycleaners.com"
            }));
            logger.info("Email successfully sent to client",data)
            return data;
        } catch (err) {
            logger.error("Failed to send email to client",err);
        }
    }
    public async sendBookingConfirmationEmailToOwner(params: BookingDto){
        try {
            const data = await sesClient.send(new SendTemplatedEmailCommand({
                Destination: {
                    ToAddresses: ["karan@brightwaysdrycleaners.com"]
                },
                Template: "booking_confirmation_to_owner",
                TemplateData: JSON.stringify({
                    name: params.name,
                    pickUpDate: params.pickUpDate,
                    pickUpTime: params.timeSlot,
                    address: params.address,
                    email: params.email,
                    contactNumber: params.contactNumber
                }),
                Source: "arjun@brightwaysdrycleaners.com"
            }));
            logger.info("Email successfully sent to owner",data)
            return data;
        } catch (err) {
            logger.error("Failed to send email to owner",err)
        }
    }
}

export const provider = EmailProvider.getInstance();
