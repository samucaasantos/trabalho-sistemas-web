import MainContent from '../components/MainContent'
import Carousel from '../components/Carousel'
import ContactForm from '../components/ContactForm'
import Sidebar from '../components/Sidebar'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <MainContent />
        <Carousel />
        <ContactForm />
        <Sidebar />
      </main>
    </div>
  )
}

