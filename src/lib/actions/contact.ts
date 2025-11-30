"use server";

import { z } from "zod";
import { Resend } from "resend";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

// Server action to handle contact form submission
export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data
    const validatedData = contactFormSchema.parse(data);

    // Send email via Resend
    const emailResult = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "ttyleranderson@gmail.com", // Your email
      replyTo: validatedData.email, // User's email for easy reply
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <h3>Message:</h3>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      };
    }

    console.log("Email sent successfully:", emailResult.data);

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form inputs and try again.",
      };
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}

