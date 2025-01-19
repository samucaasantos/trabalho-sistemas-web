import { Card } from '../../components/ui/card'
import ContactForm from '../../components/ContactForm'
import styles from './contact.module.css'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
      title: "Telefone",
      info: "(71) 99999-9999",
      description: "Segunda a Sexta, 9h às 18h"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
      title: "Email",
      info: "contato@empresa.com",
      description: "Responderemos em até 24h"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      title: "Endereço",
      info: "Salvador, BA",
      description: "Avenida Paralela, 1000"
    }
  ]

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Entre em Contato</h1>
        <p>Estamos aqui para ajudar. Entre em contato conosco!</p>
      </header>

      <div className={styles.content}>
        <div className={styles.contactInfo}>
          {contactInfo.map((item, index) => (
            <Card key={index} className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p className={styles.info}>{item.info}</p>
              <p className={styles.description}>{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className={styles.formCard}>
          <ContactForm />
        </Card>
      </div>
    </div>
  )
}



