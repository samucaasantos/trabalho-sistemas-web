import styles from './MainContent.module.css'

export default function MainContent() {
  return (
    <section className={styles.mainContent}>
      <h2>Bem-vindo ao Nosso Site</h2>
      <p>Oferecemos soluções inovadoras em design, desenvolvimento e consultoria para impulsionar o seu negócio no mundo digital.</p>
      
      <article>
        <h3>Nossos Serviços em Destaque</h3>
        <p>Descubra como podemos transformar suas ideias em realidade com nossa expertise em tecnologia e design. Nossa equipe está pronta para enfrentar desafios e criar soluções personalizadas para o seu negócio.</p>
      </article>
    </section>
  )
}

