'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'
import { createLead } from '@/app/lib/actions'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    const formDataToSend = new FormData();
    console.log(formDataToSend);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);
    console.log(formDataToSend.entries());
    await createLead(formDataToSend);
    // Limpar o formulário após o envio
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject">Assunto</label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={styles.input}
        >
          <option value="">Selecione um assunto</option>
          <option value="desenvolvimento">Desenvolvimento</option>
          <option value="design">Design</option>
          <option value="consultoria">Consultoria</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={styles.input}
          minLength={10}
        ></textarea>
      </div>

      <button type="submit" className={styles.submitButton}>
        Enviar Mensagem
      </button>
    </form>
  )
}

