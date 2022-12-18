import styles from './index.module.scss'
import mapImage from '../../assets/images/contact.png'

function Contacts() {
  return (
    <main className={styles.contacts}>
      <div>
        <h1 className={styles.title}>Contacts</h1>
        <img src={mapImage} alt="" />

        <div className={styles.contacts__ways}>
          <div className={styles.contacts__item}>
            <h3>Address</h3>
            <div>3A/F No.1155 Fangdian Road,Pudong,Shanghai</div>
          </div>
          <div className={styles.contacts__item}>
            <h3>E-mail</h3>
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
