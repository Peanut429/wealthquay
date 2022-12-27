import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import mapImage from '../assets/images/contact.png'
import logo1 from '../assets/images/websit_logo_1.png'
import logo2 from '../assets/images/websit_logo_2.png'
import logo3 from '../assets/images/websit_logo_3.png'

function Contacts() {
  const { t } = useTranslation()

  return (
    <main className={styles.contacts}>
      <div className={styles.contacts__ways}>
        <div className={styles.contacts__item}>
          <h1>{t('contacts.address.name')}</h1>
          <div>{t('contacts.address.content')}</div>
        </div>
        <div className={styles.contacts__item}>
          <h1>{t('contacts.email.name')}</h1>
          <div>support@wealthquay.cn</div>
        </div>
      </div>
      <ul className={styles.websites}>
        <li>
          {/* <span className={styles.icon}></span> */}
          <img className={styles.logo} src={logo1} alt="" />
          <a href='https://www.khariscapital.com' target="_blank" rel="noreferrer">www.khariscapital.com</a>
        </li>
        <li>
          {/* <span className={styles.icon}></span> */}
          <img className={styles.logo} src={logo2} alt="" />
          <a href='https://www.onyx.b' target="_blank" rel="noreferrer">www.onyx.bs</a>
        </li>
        <li>
          {/* <span className={styles.icon}></span> */}
          <img className={styles.logo} src={logo3} alt="" />
          <a href='https://www.caystone.com' target="_blank" rel="noreferrer">www.caystone.com</a>
        </li>
      </ul>
      <img src={mapImage} alt="" />
    </main>
  )
}

export default Contacts
