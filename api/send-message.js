// api/send-message.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name = "Website Visitor", email = "no-reply@siteflickers.com", message = "" } = req.body;

  try {
    await resend.emails.send({
      from: "Support <onboarding@resend.dev>",
      to: "darcyroseds0099a@gmail.com", // ← your email
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ success: false, error: String(error) });
  }
}
