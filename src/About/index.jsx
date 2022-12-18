import classNames from 'classnames'
import styles from './index.module.scss'
import bgImage from '../assets/images/about_us.png'
import { useTranslation } from 'react-i18next'

function About () {
  const {t} = useTranslation()

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <img src={bgImage} alt="" />
        <h1>{t('about.title')}</h1>
        <div className={classNames(styles['bold-text'], styles.top)}>
          <span>“</span>
          <span>{t('about.quotes_1')}</span>
          <span>”</span>
        </div>
        <div className={classNames(styles['bold-text'], styles.bottom)}>
          <span>“</span>
          <span>{t('about.quotes_2')}</span>
          <span>”</span>
        </div>
        <div className={styles['normal-text']}>{t('about.description')}</div>
      </section>
    </main>
  )
}

export default About
