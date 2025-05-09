import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    cv: '',
    application: '',
    availableFrom: '',
    availableTo: '',
    certificate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, certificate: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Takk! Din registrering er sendt.');
    setForm({
      name: '',
      email: '',
      phone: '',
      cv: '',
      application: '',
      availableFrom: '',
      availableTo: '',
      certificate: null,
    });
  };

  return (
    <>
      <Head>
        <title>Sjøfolk AS | Vi bemanner havet</title>
        <meta name="description" content="Registrer deg for maritime oppdrag i dine friperioder" />
      </Head>
      <main style={{ maxWidth: '700px', margin: 'auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>Sjøfolk AS</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Vi bemanner havet. Registrer deg for maritime oppdrag i dine friperioder.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input name="name" placeholder="Fullt navn" value={form.name} onChange={handleChange} required />
          <input name="email" placeholder="E-post" value={form.email} onChange={handleChange} required />
          <input name="phone" placeholder="Telefonnummer" value={form.phone} onChange={handleChange} required />
          <textarea name="cv" placeholder="Kort CV / Erfaring" value={form.cv} onChange={handleChange} rows={4}></textarea>
          <textarea name="application" placeholder="Søknad / motivasjon" value={form.application} onChange={handleChange} rows={4}></textarea>
          <input name="availableFrom" type="date" value={form.availableFrom} onChange={handleChange} />
          <input name="availableTo" type="date" value={form.availableTo} onChange={handleChange} />
          <input name="certificate" type="file" accept=".pdf,.jpg,.png" onChange={handleFileChange} />
          <button type="submit">Registrer</button>
        </form>
      </main>
    </>
  );
}
