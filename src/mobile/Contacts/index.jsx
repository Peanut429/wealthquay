import styles from './index.module.scss'
import mapImage from '../../assets/images/contact.png'
import { useTranslation } from 'react-i18next'

function Contacts() {
  const { t } = useTranslation()

  return (
    <main className={styles.contacts}>
      <div>
        <h1 className={styles.title}>Contacts</h1>
        <img src={mapImage} alt="" />

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
            <span className={styles.icon}></span>
            <a href='https://www.khariscapital.com' target="_blank" rel="noreferrer">www.khariscapital.com</a>
          </li>
          <li>
            <span className={styles.icon}></span>
            <a href='https://www.onyx.b' target="_blank" rel="noreferrer">www.onyx.bs</a>
          </li>
          <li>
            <span className={styles.icon}></span>
            <a href='https://www.caystone.com' target="_blank" rel="noreferrer">www.caystone.com</a>
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>Copyright © 2022 – 沪ICP备000000000000号-3</div>
    </main>
  )
}

export default Contacts
