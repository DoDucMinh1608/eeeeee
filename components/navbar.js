import Link from 'next/link'
import styles from '../styles/modules/nav.module.scss'

export function NavItem({ link, title }) {
  return (
    <Link href={link}>
      <a className={styles.link}>{title}</a>
    </Link>
  )
}

export default function ({ name, items }) {
  return (
    <nav className={styles.navbar}>
      <div>
        <container className={styles['nav-section']}>
          <Link href="/">
            <a className={styles.link}>
              <h1 className={styles.h1}>{name}</h1>
            </a>
          </Link>
        </container>
        <container className={`${styles['nav-section']} ${styles['nav-section-sub']}`}>
          {items?.map(({ title, link }) => <NavItem key={title} title={title} link={link} />)}
        </container>
      </div>
    </nav>
  )
}