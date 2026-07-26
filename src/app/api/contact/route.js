import nodemailer from "nodemailer";

// Adresse qui reçoit les messages envoyés depuis le formulaire de contact.
const RECIPIENT_EMAIL = "roylexstephane@gmail.com";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 }
    );
  }

  const name = (body?.name ?? "").toString().trim();
  const email = (body?.email ?? "").toString().trim();
  const subject = (body?.subject ?? "").toString().trim();
  const message = (body?.message ?? "").toString().trim();

  if (!name || !email || !subject || !message) {
    return Response.json(
      { ok: false, error: "Tous les champs sont obligatoires." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return Response.json(
      { ok: false, error: "Adresse email invalide." },
      { status: 400 }
    );
  }

  // Les identifiants SMTP sont fournis via des variables d'environnement
  // (voir .env.example à la racine du projet) et ne sont jamais exposés au
  // navigateur puisque ce code s'exécute uniquement côté serveur.
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error(
      "Contact form: missing SMTP_HOST / SMTP_USER / SMTP_PASS environment variables."
    );
    return Response.json(
      {
        ok: false,
        error:
          "L'envoi d'email n'est pas configuré sur le serveur (variables SMTP manquantes).",
      },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 465,
      secure: Number(SMTP_PORT) === 465 || !SMTP_PORT, // true pour le port 465, false pour les autres (ex: 587)
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio — ${name}" <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: `[Portfolio] ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; font-size: 14px; color: #1a1a2e;">
          <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
          <p><strong>Email :</strong> ${escapeHtml(email)}</p>
          <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return Response.json(
      { ok: false, error: "L'envoi du message a échoué. Réessayez plus tard." },
      { status: 500 }
    );
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
