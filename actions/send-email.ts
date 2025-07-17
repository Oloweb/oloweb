"use server"

import { Resend } from "resend"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // In production we require the API key.
  const runningInProd = process.env.NODE_ENV === "production"
  if (runningInProd && !RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY chýba. Pridajte ju do prostredia Vercel.")
    return { success: false, message: "Chýba konfigurácia emailovej služby." }
  }

  // Basic validation
  if (!name || !email || !subject || !message) {
    return { success: false, message: "Všetky polia sú povinné." }
  }

  // You can add more robust email validation here if needed
  if (!email.includes("@") || !email.includes(".")) {
    return { success: false, message: "Prosím, zadajte platnú emailovú adresu." }
  }

  try {
    // In a real application, you would send the email here.
    // For demonstration, we'll log it and simulate success.
    console.log("Attempting to send email:")
    console.log(`From: ${name} <${email}>`)
    console.log(`To: info@oloweb.sk`)
    console.log(`Subject: ${subject}`)
    console.log(`Message: ${message}`)

    // Example using Resend to send the email
    // Make sure to replace 'info@oloweb.sk' with your verified sender email in Resend
    // and ensure 'info@oloweb.sk' is also your target recipient.
    if (resend) {
      const { error } = await resend.emails.send({
        from: "Oloweb Kontakt <no-reply@oloweb.sk>",
        to: ["info@oloweb.sk"],
        subject: `Nová správa: ${subject}`,
        html: `
      <p><strong>Meno:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Predmet:</strong> ${subject}</p>
      <p><strong>Správa:</strong><br/>${message}</p>
    `,
      })
      if (error) {
        console.error("Resend error:", error)
        return { success: false, message: "Nepodarilo sa odoslať email." }
      }
    } else {
      // Preview / dev fallback
      console.log("📬  Fake-send (preview):\n", { name, email, subject, message })
    }
    return { success: true, message: "Vaša správa bola úspešne odoslaná!" }
  } catch (error) {
    console.error("Server action error:", error)
    return { success: false, message: "Nastala neočakávaná chyba pri odosielaní správy." }
  }
}
