import { ContactEmail } from "~/types/ContactEmail";
import { Resend } from "resend";
import { H3Event } from "h3";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = (await readBody(event)) as ContactEmail;
    const { email, subject, message, phone, fullname } = body;
    return await resend.emails.send({
      from: "Your <contact@yoursite.com>",
      to: [""],
      subject: "New message from your site",
      html: `
      <p>A new message has been sent from your site.</p>
      <p>Here are the details:</p>
      <ul>
        <li>Name : ${fullname}</li>
        <li>Email : ${email}</li>
        <li>Phone : ${phone}</li>
        <li>Subject : ${subject}</li>
        <li>Message : ${message}</li>
      </ul>
      `,
    });
  } catch (error) {
    return { error };
  }
});
