"use server";

import { z } from "zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contact";

// Server action to handle contact form submission
export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data
    const validatedData = contactFormSchema.parse(data);

    // TODO: In a real application, you would:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the message in a database
    // 3. Send to a CRM or notification system

    // For now, we'll just log it and simulate success
    console.log("Contact form submission:", validatedData);

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

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

