import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init("zSALsmGE2152AYMXH");

export default function ContactForm() {

  const formRef = useRef();

  const [form, setForm] = useState({
    name: 'Vicente',
    email: 'animekaistore@gmail.com',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function sendEmail(e) {
    e.preventDefault();
    setSending(true);
    setResult(null);

    emailjs.sendForm(
      "service_bmhmv3n",
      "template_4rv54mj",
      formRef.current,
      "zSALsmGE2152AYMXH"
    )
    .then(
      () => setResult({ ok: true, message: "Correo enviado correctamente." }),
      (error) => setResult({ ok: false, message: "Error: " + error.text })
    )
    .finally(() => setSending(false));
  }

  return (
    <div style={{ maxWidth: 720, margin: '0 auto' }}>
      <h2>Contacto</h2>

      <form ref={formRef} onSubmit={sendEmail}>
        <input name="from_name" value={form.name} onChange={handleChange} required />
        <input name="reply_to" type="email" value={form.email} onChange={handleChange} required />
        <input name="subject" value={form.subject} onChange={handleChange} />
        <textarea name="message" rows={6} value={form.message} onChange={handleChange} required />

        <button type="submit" disabled={sending}>
          {sending ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      {result && (
        <p style={{ marginTop: 8, color: result.ok ? 'green' : 'red' }}>
          {result.message}
        </p>
      )}
    </div>
  );
}
