import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();

  const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE,
  });

  await mailjet
    .post("send", { version: "v3.1" })
    .request({
      Messages: [
        {
          From: {
            Email: "raya.farhadi@gmail.com",
            Name: "Contact Form",
          },
          To: [
            {
              Email: "raya.farhadi@gmail.com",
              Name: "Raya Farhadi",
            },
          ],
          Subject: subject,
          TextPart: `New contact form entry from: ${email}.
        
        ${message}
        `,
        },
      ],
    })
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });

  return NextResponse.json({ message: "OK" }, { status: 200 });
}
