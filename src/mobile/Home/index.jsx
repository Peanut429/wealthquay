import styles from './index.module.scss'
import bgImage from '../../assets/images/home.png'

function Home () {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <h1>Your Global</h1>
        <h1 className={styles.red}>Wealth Partners</h1>
        <img src={bgImage} alt="" />
      </section>
    </main>
  )
}

export default Home
