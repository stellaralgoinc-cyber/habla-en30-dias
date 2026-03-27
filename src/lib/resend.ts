import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

// For testing: onboarding@resend.dev (Resend's shared sender)
// Before launch: set RESEND_FROM_EMAIL=hola@support.nova-library.com in Vercel once domain is verified
const FROM = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://habla-en30-dias.vercel.app";

export async function sendWelcomeEmail(to: string, fullName: string) {
  const firstName = fullName.split(" ")[0];

  const html = `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>Bienvenida a Habla en 30 Días</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    body { background-color: #F5EDE3; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 0; padding: 0; width: 100%; }
    .email-wrapper { background-color: #F5EDE3; padding: 48px 24px; }
    .email-container { max-width: 560px; margin: 0 auto; }
    .email-header { text-align: center; padding-bottom: 32px; }
    .logo-mark { display: inline-block; width: 52px; height: 52px; background: linear-gradient(135deg, #E07B39 0%, #B85E25 100%); border-radius: 16px; line-height: 52px; text-align: center; font-size: 24px; box-shadow: 0 4px 16px rgba(224, 123, 57, 0.35); margin-bottom: 16px; }
    .brand-name { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; font-size: 20px; font-weight: 600; color: #3D2314; letter-spacing: -0.02em; display: block; line-height: 1.2; }
    .brand-tagline { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500; color: #B09080; letter-spacing: 0.08em; text-transform: uppercase; display: block; margin-top: 4px; }
    .email-card { background-color: #FFFFFF; border-radius: 24px; overflow: hidden; box-shadow: 0 2px 24px rgba(61, 35, 20, 0.10), 0 1px 4px rgba(61, 35, 20, 0.06); border: 1px solid #EAD9CC; }
    .card-hero { background: linear-gradient(135deg, #FFF0E6 0%, #FDE8D4 50%, #FAD9BC 100%); padding: 40px 40px 36px; text-align: center; border-bottom: 1px solid #EAD9CC; }
    .hero-icon-wrap { display: inline-block; width: 72px; height: 72px; background: #FFFFFF; border-radius: 50%; text-align: center; line-height: 72px; font-size: 32px; box-shadow: 0 4px 20px rgba(224, 123, 57, 0.20); margin-bottom: 20px; border: 2px solid #EAD9CC; }
    .hero-title { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; font-size: 26px; font-weight: 600; color: #3D2314; line-height: 1.25; letter-spacing: -0.02em; margin-bottom: 8px; }
    .hero-subtitle { font-family: 'Inter', sans-serif; font-size: 15px; color: #7A5C4A; line-height: 1.6; }
    .card-body { padding: 36px 40px 40px; }
    .body-text { font-family: 'Inter', sans-serif; font-size: 15px; color: #7A5C4A; line-height: 1.7; margin-bottom: 28px; }
    .cta-wrap { text-align: center; margin: 32px 0; }
    .cta-button { display: inline-block; background: linear-gradient(135deg, #E07B39 0%, #C96B2A 100%); color: #FFFFFF !important; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600; text-decoration: none; letter-spacing: 0.01em; padding: 16px 40px; border-radius: 14px; box-shadow: 0 4px 20px rgba(224, 123, 57, 0.40), 0 1px 4px rgba(224, 123, 57, 0.25); }
    .quote-block { background: linear-gradient(135deg, #F3EFFC 0%, #EEF0FC 100%); border-left: 3px solid #9B8EC4; border-radius: 0 12px 12px 0; padding: 16px 20px; margin: 28px 0 0; }
    .quote-text { font-family: 'Playfair Display', Georgia, serif; font-size: 14px; font-style: italic; color: #3D2314; line-height: 1.6; }
    .quote-attr { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 500; color: #9B8EC4; margin-top: 8px; text-transform: uppercase; letter-spacing: 0.06em; display: block; }
    .email-footer { text-align: center; padding-top: 28px; padding-bottom: 8px; }
    .footer-text { font-family: 'Inter', sans-serif; font-size: 12px; color: #B09080; line-height: 1.6; }
    .footer-link { color: #B09080 !important; text-decoration: underline; }
    .footer-dots { color: #EAD9CC; margin: 0 6px; }
    @media only screen and (max-width: 600px) {
      .email-wrapper { padding: 28px 16px; }
      .card-hero { padding: 32px 24px 28px; }
      .card-body { padding: 28px 24px 32px; }
      .hero-title { font-size: 22px; }
      .cta-button { display: block; text-align: center; padding: 16px 24px; }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-container">
      <div class="email-header">
        <div class="logo-mark">🌻</div>
        <span class="brand-name">Habla en 30 Días</span>
        <span class="brand-tagline">Programa de Lenguaje Infantil</span>
      </div>
      <div class="email-card">
        <div class="card-hero">
          <div class="hero-icon-wrap">🌻</div>
          <h1 class="hero-title">¡Bienvenida, ${firstName}!</h1>
          <p class="hero-subtitle">Tu cuenta está activa y el programa te espera</p>
        </div>
        <div class="card-body">
          <p class="body-text">
            Gracias por unirte a <strong style="color: #3D2314; font-weight: 600;">Habla en 30 Días</strong>.
            Tu acceso está listo — inicia sesión para comenzar el programa con tu hijo.
          </p>
          <div class="cta-wrap">
            <a href="${SITE_URL}/login" class="cta-button" target="_blank">
              Ir al programa →
            </a>
          </div>
          <div class="quote-block">
            <p class="quote-text">"Tu hijo ya quiere hablar. Tú eres el puente."</p>
            <span class="quote-attr">Habla en 30 Días</span>
          </div>
        </div>
      </div>
      <div class="email-footer">
        <p class="footer-text">Si no creaste esta cuenta, puedes ignorar este mensaje sin problema.</p>
        <p class="footer-text" style="margin-top: 12px;">
          © 2025 Habla en 30 Días
          <span class="footer-dots">·</span>
          <a href="${SITE_URL}/privacidad" class="footer-link">Privacidad</a>
          <span class="footer-dots">·</span>
          <a href="${SITE_URL}/terminos" class="footer-link">Términos</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;

  return resend.emails.send({
    from:    FROM,
    to,
    subject: "¡Bienvenida a Habla en 30 Días! 🌻",
    html,
  });
}

export async function sendPasswordResetEmail(to: string, resetLink: string) {
  const html = `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>Restablecer contraseña — Habla en 30 Días</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    body { background-color: #F5EDE3; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 0; padding: 0; width: 100%; }
    .email-wrapper { background-color: #F5EDE3; padding: 48px 24px; }
    .email-container { max-width: 560px; margin: 0 auto; }
    .email-header { text-align: center; padding-bottom: 32px; }
    .logo-mark { display: inline-block; width: 52px; height: 52px; background: linear-gradient(135deg, #E07B39 0%, #B85E25 100%); border-radius: 16px; line-height: 52px; text-align: center; font-size: 24px; box-shadow: 0 4px 16px rgba(224, 123, 57, 0.35); margin-bottom: 16px; }
    .brand-name { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; font-size: 20px; font-weight: 600; color: #3D2314; letter-spacing: -0.02em; display: block; }
    .brand-tagline { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500; color: #B09080; letter-spacing: 0.08em; text-transform: uppercase; display: block; margin-top: 4px; }
    .email-card { background-color: #FFFFFF; border-radius: 24px; overflow: hidden; box-shadow: 0 2px 24px rgba(61, 35, 20, 0.10), 0 1px 4px rgba(61, 35, 20, 0.06); border: 1px solid #EAD9CC; }
    .card-hero { background: linear-gradient(135deg, #F3EFFC 0%, #EAE5F8 50%, #DDD6F5 100%); padding: 40px 40px 36px; text-align: center; border-bottom: 1px solid #DDD6F5; }
    .hero-icon-wrap { display: inline-block; width: 72px; height: 72px; background: #FFFFFF; border-radius: 50%; text-align: center; line-height: 72px; font-size: 32px; box-shadow: 0 4px 20px rgba(155, 142, 196, 0.25); margin-bottom: 20px; border: 2px solid #DDD6F5; }
    .hero-title { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; font-size: 26px; font-weight: 600; color: #3D2314; line-height: 1.25; letter-spacing: -0.02em; margin-bottom: 8px; }
    .hero-subtitle { font-family: 'Inter', sans-serif; font-size: 15px; color: #7A5C4A; line-height: 1.6; }
    .card-body { padding: 36px 40px 40px; }
    .body-text { font-family: 'Inter', sans-serif; font-size: 15px; color: #7A5C4A; line-height: 1.7; margin-bottom: 28px; }
    .cta-wrap { text-align: center; margin: 32px 0; }
    .cta-button { display: inline-block; background: linear-gradient(135deg, #9B8EC4 0%, #7A6BAF 100%); color: #FFFFFF !important; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600; text-decoration: none; letter-spacing: 0.01em; padding: 16px 40px; border-radius: 14px; box-shadow: 0 4px 20px rgba(155, 142, 196, 0.45), 0 1px 4px rgba(155, 142, 196, 0.25); }
    .divider { border: none; border-top: 1px solid #EAD9CC; margin: 28px 0; }
    .expiry-notice { text-align: center; margin-top: 24px; }
    .expiry-pill { display: inline-block; background-color: #F3EFFC; border: 1px solid #DDD6F5; border-radius: 999px; padding: 6px 16px; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500; color: #7A6BAF; }
    .fallback-wrap { background-color: #FDF8F3; border: 1px solid #EAD9CC; border-radius: 14px; padding: 16px 20px; }
    .fallback-label { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; color: #B09080; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; display: block; }
    .fallback-link { font-family: 'Inter', monospace; font-size: 12px; color: #9B8EC4 !important; word-break: break-all; line-height: 1.5; text-decoration: none; }
    .security-box { background-color: #FFF8EC; border: 1px solid #F5C842; border-radius: 14px; padding: 16px 20px; margin-top: 28px; }
    .security-label { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; color: #B08A10; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; display: block; }
    .security-text { font-family: 'Inter', sans-serif; font-size: 13px; color: #7A5C4A; line-height: 1.6; }
    .email-footer { text-align: center; padding-top: 28px; padding-bottom: 8px; }
    .footer-text { font-family: 'Inter', sans-serif; font-size: 12px; color: #B09080; line-height: 1.6; }
    .footer-link { color: #B09080 !important; text-decoration: underline; }
    .footer-dots { color: #EAD9CC; margin: 0 6px; }
    @media only screen and (max-width: 600px) {
      .email-wrapper { padding: 28px 16px; }
      .card-hero { padding: 32px 24px 28px; }
      .card-body { padding: 28px 24px 32px; }
      .hero-title { font-size: 22px; }
      .cta-button { display: block; text-align: center; padding: 16px 24px; }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-container">
      <div class="email-header">
        <div class="logo-mark">🌻</div>
        <span class="brand-name">Habla en 30 Días</span>
        <span class="brand-tagline">Programa de Lenguaje Infantil</span>
      </div>
      <div class="email-card">
        <div class="card-hero">
          <div class="hero-icon-wrap">🔑</div>
          <h1 class="hero-title">Restablecer contraseña</h1>
          <p class="hero-subtitle">Recibimos una solicitud para cambiar tu contraseña</p>
        </div>
        <div class="card-body">
          <p class="body-text">
            Haz clic en el botón de abajo para establecer una nueva contraseña.
            Si no solicitaste este cambio, puedes ignorar este mensaje — tu contraseña actual seguirá siendo la misma.
          </p>
          <div class="cta-wrap">
            <a href="${resetLink}" class="cta-button" target="_blank">
              Establecer nueva contraseña
            </a>
          </div>
          <div class="expiry-notice">
            <span class="expiry-pill">⏱ Este enlace es válido por 1 hora</span>
          </div>
          <hr class="divider" />
          <p class="body-text" style="margin-bottom: 12px; font-size: 13px;">
            Si el botón no funciona, copia y pega el siguiente enlace en tu navegador:
          </p>
          <div class="fallback-wrap">
            <span class="fallback-label">Enlace de recuperación</span>
            <a href="${resetLink}" class="fallback-link" target="_blank">${resetLink}</a>
          </div>
          <div class="security-box">
            <span class="security-label">⚠ Aviso de seguridad</span>
            <p class="security-text">
              Si no solicitaste este cambio, alguien más puede haber ingresado tu correo.
              No compartas este enlace con nadie — es de uso personal y único.
            </p>
          </div>
        </div>
      </div>
      <div class="email-footer">
        <p class="footer-text">No respondas a este correo — es un mensaje automático.</p>
        <p class="footer-text" style="margin-top: 12px;">
          © 2025 Habla en 30 Días
          <span class="footer-dots">·</span>
          <a href="${SITE_URL}/privacidad" class="footer-link">Privacidad</a>
          <span class="footer-dots">·</span>
          <a href="${SITE_URL}/terminos" class="footer-link">Términos</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;

  return resend.emails.send({
    from:    FROM,
    to,
    subject: "Recupera tu contraseña — Habla en 30 Días",
    html,
  });
}
