import styles from './index.module.scss'
import bgImage from '../../assets/images/home.png'
import { useTranslation } from 'react-i18next'

function Home () {
  const { t } = useTranslation()

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <h1>{t('home.title')}</h1>
        <h1 className={styles.red}>{t('home.subTitle')}</h1>
        <img src={bgImage} alt="" />
      </section>
    </main>
  )
}

export default Home
