class WhatsAppProvider {
  private static instance: WhatsAppProvider
  constructor() {}

  public static getInstance() : WhatsAppProvider {
    if(this.instance){
        return this.instance
    }
    this.instance = new WhatsAppProvider();
    return this.instance;
}

  public getUrl(): string {
    return `https://graph.facebook.com/v13.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;
  }

  public createRequest(to: string,templateName: string): RequestInit {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: to,
        type: templateName,
        template: {
          name: "hello_world",
          language: {
            code: "en_US",
          },
        },
      }),
    };
  }

  public sendTestMessage() {}

  public setHeaders() {}

  public async sendMessage(to: string,templateName: string) {
    try {
      await fetch(this.getUrl(), this.createRequest(to,templateName));
    } catch (error) {
      console.log(error);
    }
  }
}


export const provider = WhatsAppProvider.getInstance();
