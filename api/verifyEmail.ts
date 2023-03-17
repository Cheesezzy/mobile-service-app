const SENDGRID_API_KEY =
  "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";

export const sendVerificationCode = async (email: string) => {
  const code = Math.floor(100000 + Math.random() * 900000).toString(); // generate a 6-digit verification code
  const data = {
    personalizations: [
      {
        to: [{ email }],
        dynamic_template_data: {
          code,
        },
      },
    ],
    from: {
      email: "noreply@rete.africa",
      name: "Rete",
    },
    //template_id: "your-sendgrid-template-id",
  };

  try {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to send verification code");
    }
    return code;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
