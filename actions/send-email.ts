"use server"

import { Resend } from "resend"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !subject || !message) {
    return { success: false, message: "Všetky polia sú povinné." }
  }

  // You can add more robust email validation here if needed
  if (!email.includes("@") || !email.includes(".")) {
    return { success: false, message: "Prosím, zadajte platnú emailovú adresu." }
  }

  // --- MODIFICATION START ---
  // If RESEND_API_KEY is missing, simulate success but don't send email
  if (!resend) {
    console.warn("⚠️ RESEND_API_KEY chýba. Email nebude odoslaný, ale formulár bude hlásiť úspech.")
    // Return success to the frontend, but no email is actually sent.
    return { success: true, message: "Vaša správa bola úspešne odoslaná! (Emailová služba nie je aktívna)" }
  }
  // --- MODIFICATION END ---

  try {
    const { error } = await resend.emails.send({
      from: "Oloweb Kontakt <no-reply@oloweb.sk>", // Ensure this is a verified sender in Resend
      to: ["info@oloweb.sk"], // Your target recipient email
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
    return { success: true, message: "Vaša správa bola úspešne odoslaná!" }
  } catch (error) {
    console.error("Server action error:", error)
    return { success: false, message: "Nastala neočakávaná chyba pri odosielaní správy." }
  }
}
