import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function About() {
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateContactForm = ({ from_name, from_email, message }) => {
    if (!from_name.trim() || !from_email.trim() || !message.trim()) {
      return 'Por favor completa todos los campos.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from_email.trim())) {
      return 'Por favor ingresa un correo válido.';
    }
    return null;
  };

  const clearMessages = () => {
    setTimeout(() => {
      setError('');
      setSuccess('');
    }, 3000);
  };

  const handleSubmitWhatsApp = e => {
    e.preventDefault();
    if (loading) return;

    const err = validateContactForm(form);
    if (err) {
      setError(err);
      clearMessages();
      return;
    }

    setError('');
    setSuccess('');
    setLoading(true);

    const phoneNumber = '56937450359'; 
    const messageText = `Hola AnimeKai Store! Soy ${form.from_name}.
Email: ${form.from_email}
Mensaje: ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      messageText
    )}`;
    window.open(url, '_blank');

    setSuccess('Mensaje abierto en WhatsApp ✅');
    setForm({ from_name: '', from_email: '', message: '' });
    setLoading(false);
    clearMessages();
  };

  const handleSubmitEmail = e => {
    e.preventDefault();
    if (loading) return;

    const err = validateContactForm(form);
    if (err) {
      setError(err);
      clearMessages();
      return;
    }

    setError('');
    setSuccess('');
    setLoading(true);

    emailjs
      .sendForm(
        'service_kt80mwp',
        'template_4rv54mj',
        formRef.current,
        'M0Z02nLJBQ7yLgrMM'
      )
      .then(() => {
        setSuccess('Correo enviado con éxito ✅');
        setForm({ from_name: '', from_email: '', message: '' });
        setLoading(false);
        clearMessages();
      })
      .catch(err => {
        console.error('Error EmailJS:', err);
        setError('Error al enviar el mensaje ❌');
        setLoading(false);
        clearMessages();
      });
  };

  return (
    <section id="about" className="container">
      <h2>Quiénes Somos</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            <strong>AnimeKai Store</strong> Es una tienda especializada en productos de anime y manga..</p>
          <p>
          Fundada en 2020, nació de nuestra pasión por este increíble mundo. Crecimos viendo distintos animes y leyendo mangas, por lo que decidimos transformar ese gusto en un emprendimiento dedicado a lo que realmente nos motiva.
            En AnimeKai Store, nos dedicamos a ofrecer una amplia variedad de productos relacionados con el anime y manga,
            ofreciendo figuras, pósters, ropa y accesorios de tus series favoritas.
          </p>
          <p>
            En <strong>AnimeKai Store</strong>, ofrecemos una amplia variedad de productos relacionados con tus series favoritas: figuras, pósters, ropa, accesorios y mucho más.
          </p>
          <p>
            Nuestro objetivo es entregar productos de calidad, con envíos rápidos, atención personalizada y una experiencia de compra pensada para verdaderos fanáticos del anime y el manga.
          </p>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmitWhatsApp}>
          <h3>Contáctanos</h3>

          <div className="form-group">
  <label htmlFor="from_name">Nombre:</label>
  <input
    id="from_name"
    type="text"
    name="from_name"
    value={form.from_name}
    onChange={handleChange}
  />
</div>

<div className="form-group">
  <label htmlFor="from_email">Correo:</label>
  <input
    id="from_email"
    type="email"
    name="from_email"
    value={form.from_email}
    onChange={handleChange}
  />
</div>

<div className="form-group">
  <label htmlFor="message">Mensaje:</label>
  <textarea
    id="message"
    name="message"
    value={form.message}
    onChange={handleChange}
  ></textarea>
</div>


          {error && <span className="error-message">{error}</span>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

          <button
            type="submit"
            style={{ backgroundColor: '#25d366' }}
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar por WhatsApp'}
          </button>

          <button
            type="button"
            onClick={handleSubmitEmail}
            style={{ marginTop: '0.5rem', backgroundColor: '#5d62fb' }}
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar por Correo'}
          </button>
        </form>
      </div>
    </section>
  );
}
