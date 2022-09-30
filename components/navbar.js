import Link from 'next/link'
import styles from '../styles/modules/nav.module.scss'

export function NavItem(props) {
  return (
    <div>
      <Link href={props.link || '/'}>
        <a className={styles.link}>{props.title}</a>
      </Link>
    </div>
  )
}
export default function (props) {
  return (
    <nav className={styles.navbar}>
      <div>
        <container className={styles['nav-section']}>
          <Link href="/">
            <a className={styles.link}>
              <h1 className={styles.h1}>{props.name}</h1>
            </a>
          </Link>
        </container>
        {props.items && <container className={[styles['nav-section'], styles['nav-section-sub']].join(' ')}>
          {props.items?.map(({ item, link }) => <NavItem key={item} title={item} link={link} className={styles.link} />)}
        </container>}
      </div>
    </nav>
  )
}