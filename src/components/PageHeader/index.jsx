import logo from '../../assets/images/logo.png'
import styles from './index.module.scss'

function PageHeader () {
  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="logo" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/about">
              <li>About Us</li>
            </a>
            <a href="/team">
              <li>Our Team</li>
            </a>
            <a href="/services">
              <li>Our services</li>
            </a>
            <a href="/contacts">
              <li>Contacts</li>
            </a>
          </ul>
          <span className={styles.language}>CN</span>
        </div>
      </div>
    </nav>
  )
}

export default PageHeader