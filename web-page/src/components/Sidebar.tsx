import Link from 'next/link'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2>Links Úteis</h2>
      <ul>
        <li><Link href="https://www.w3schools.com/html/default.asp">Aprenda HTML</Link></li>
        <li><Link href="https://www.w3schools.com/css/default.asp">Aprenda CSS</Link></li>
        <li><Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Aprenda JavaScript</Link></li>
      </ul>
    </aside>
  )
}

