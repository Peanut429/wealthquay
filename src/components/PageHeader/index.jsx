import { changeLanguage } from 'i18next'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/images/logo.png'
import styles from './index.module.scss'

function PageHeader () {
  const {t} = useTranslation()
  const lng = t('lng')

  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="logo" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ul>
            <a href="#/home">
              <li>{t('nav.0')}</li>
            </a>
            <a href="#/about">
              <li>{t('nav.1')}</li>
            </a>
            <a href="#/team">
              <li>{t('nav.2')}</li>
            </a>
            <a href="#/services">
              <li>{t('nav.3')}</li>
            </a>
            <a href="#/contacts">
              <li>{t('nav.4')}</li>
            </a>
          </ul>
          {lng === 'en'
            ? <span className={styles.language} onClick={() => changeLanguage('zh')}>CN</span>
            : <span className={styles.language} onClick={() => changeLanguage('en')}>EN</span>
          }
        </div>
      </div>
    </nav>
  )
}

export default PageHeader