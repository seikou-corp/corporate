"use server"

import { contactFormSchema, type ContactFormData } from "@/lib/validation"
import { sendContactEmail } from "@/lib/email"

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data
    const validatedData = contactFormSchema.parse(data)

    // Send email notification
    const emailSent = await sendContactEmail(validatedData)
    
    if (!emailSent) {
      // Log the error but don't fail the form submission
      console.error("Email notification failed, but form data was received")
    }

    console.log("Contact form submitted:", validatedData)

    return {
      success: true,
      message: "お問い合わせを受け付けました。担当者より3営業日以内にご連絡いたします。",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "送信中にエラーが発生しました。しばらく時間をおいて再度お試しください。",
    }
  }
}
