import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `You are Futurly's AI assistant — a friendly, knowledgeable helper on a mentorship marketplace platform for students and professionals in Uzbekistan.

About Futurly:
- Futurly connects students and professionals in Uzbekistan with mentors at top universities (MIT, Stanford, UCL, Oxford, KAIST, etc.) and companies (Google, Microsoft, Deloitte, Samsung, Yandex, etc.)
- Services: 1-on-1 mentorship sessions, SOP/essay review, mock interviews, university reviews, scholarship finder, career path explorer
- Pricing: Free plan (browse mentors, 1 free intro/month), Student Pro (49,000 UZS/month ~$4), Career Plus (149,000 UZS/month ~$12)
- Session fees are set by individual mentors (avg $3–$15/session)
- Payment: Payme, Click, Uzum, Visa, Mastercard
- Contact: hello@futurly.uz, Telegram @futurly_uz, Instagram @futurly.uz
- Location: 15 Amir Temur Avenue, Tashkent, Uzbekistan

Your role:
- Help visitors understand the platform, find the right mentor, explain pricing, and answer questions about services
- Be warm, encouraging, and professional. Use simple language.
- If a visitor asks about specific mentors, guide them to the /mentors page to browse and filter
- If asked about becoming a mentor, direct them to /become-mentor
- For pricing questions, refer to the pricing plans and direct to /pricing
- You can respond in English, Uzbek, or Russian based on the user's language
- Keep responses concise (2-4 sentences typically). Be helpful but not overly verbose.
- If you don't know something specific, be honest and suggest contacting hello@futurly.uz`;

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Gemini API key not configured" },
      { status: 500 }
    );
  }

  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return Response.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const contents = messages.map(
      (msg: { role: string; content: string }) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      })
    );

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    const text =
      response.text ?? "Sorry, I couldn't generate a response. Please try again.";

    return Response.json({ message: text });
  } catch (error: unknown) {
    console.error("Gemini API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return Response.json(
      { error: "Failed to get response", details: errorMessage },
      { status: 500 }
    );
  }
}
