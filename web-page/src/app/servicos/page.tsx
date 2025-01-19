import { Card } from '@/components/ui/card'
import styles from './services.module.css'

export default function ServicesPage() {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-blue-500"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>,
      title: "Desenvolvimento",
      description: "Desenvolvimento de aplicações web modernas e responsivas utilizando as mais recentes tecnologias como React, Next.js e TypeScript.",
      features: [
        "Aplicações Web",
        "Sites Responsivos",
        "APIs RESTful",
        "Integrações de Sistema"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-purple-500"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
      title: "Design",
      description: "Criação de interfaces modernas e intuitivas, focando na experiência do usuário e nas últimas tendências de design.",
      features: [
        "UI/UX Design",
        "Design Responsivo",
        "Prototipagem",
        "Design System"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-green-500"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      title: "Consultoria",
      description: "Consultoria especializada em desenvolvimento web e arquitetura de software para otimizar seus projetos.",
      features: [
        "Análise Técnica",
        "Otimização de Performance",
        "Melhores Práticas",
        "Arquitetura de Software"
      ]
    }
  ]

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Nossos Serviços</h1>
        <p>Soluções completas para suas necessidades digitais</p>
      </header>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <Card key={index} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              {service.icon}
            </div>
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
            <ul className={styles.featuresList}>
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}

