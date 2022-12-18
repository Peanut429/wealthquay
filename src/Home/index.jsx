import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import bgImage from '../assets/images/home.png'

function Home () {
  const { t } = useTranslation()
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <img src={bgImage} alt="" style={{ pointerEvents: 'none'}} />
        {/* <h1>Your Global</h1> */}
        <h1>{t('home.title')}</h1>
        {/* <h1 className={styles.red}>Wealth Partners</h1> */}
        <h1 className={styles.red}>{t('home.subTitle')}</h1>
      </section>
    </main>
  )
}

export default Home
