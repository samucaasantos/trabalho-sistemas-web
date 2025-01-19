import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
      <div className={styles.headerImg}></div>
      <nav className={styles.dropdownMenu}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li>
            <Link href="/servicos">Serviços</Link>
            <ul className={styles.submenu}>
              <li><Link href="/servicos#desenvolvimento">Design</Link></li>
              <li><Link href="/servicos#design">Desenvolvimento</Link></li>
              <li><Link href="/servicos#consultoria">Consultoria</Link></li>
            </ul>
          </li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}

