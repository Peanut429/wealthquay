import classNames from 'classnames'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next'
import logo from '../../assets/images/logo.png'
import menuIcon from '../../assets/images/menu_icon.png'
import menuCloseIcon from '../../assets/images/menu_close_icon.png'
import routeIcon from '../../assets/images/route_icon.png'
import routeActiveIcon from '../../assets/images/route_icon_active.png'
import styles from './index.module.scss'

function PageHeader () {
  const { t } = useTranslation()

  const pathname = window.location.hash

  const [status, setStatus] = useState(false)

  const menuItems = [
    { name: t('nav.0'), pathname: '#/home' },
    { name: t('nav.1'), pathname: '#/about' },
    { name: t('nav.2'), pathname: '#/team' },
    { name: t('nav.3'), pathname: '#/services' },
    { name: t('nav.4'), pathname: '#/contacts' },
  ]

  return (
    <nav className={classNames(styles.header, {[styles.expand]: status})}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="logo" />
        <img
          className={styles.icon}
          src={status ? menuCloseIcon : menuIcon}
          alt=""
          onClick={() => setStatus(prev => !prev)}
        />
      </div>
      <div className={styles['header-menu']}>
        <ul>
          {menuItems.map(item => (
            <a key={item.pathname} href={item.pathname} onClick={() => setStatus(false)}>
              <li
                className={classNames({ [styles.active]: pathname === item.pathname })}
              >
                <span>{item.name}</span>
                <img src={pathname === item.pathname ? routeActiveIcon : routeIcon} alt="" />
              </li>
            </a>
          ))}
        </ul>
        <div className={styles.language}>
          <span
            className={classNames(styles['language-button'], {[styles.active]: t('lng') === 'zh'})}
            onClick={() => {
              changeLanguage('en')
              setStatus(false)
            }}
          >EN</span>
          <span
            className={classNames(styles['language-button'], {[styles.active]: t('lng') === 'en'})}
            onClick={() => {
              changeLanguage('zh')
              setStatus(false)
            }}
          >CN</span>
        </div>
      </div>
    </nav>
  )
}

export default PageHeader