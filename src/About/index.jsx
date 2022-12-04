import classNames from 'classnames'
import styles from './index.module.scss'
import bgImage from '../assets/images/about_us.png'

function About () {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <img src={bgImage} alt="" />
        <h1>About Us</h1>
        <div className={classNames(styles['bold-text'], styles.top)}>
          <span>“</span>
          <span>Relying on the global cooperation network to provide the most advanced strategic layout services</span>
          <span>”</span>
        </div>
        <div className={classNames(styles['bold-text'], styles.bottom)}>
          <span>“</span>
          <span>Global asset allocation service provid-er for domestic and overseas high net worth clients</span>
          <span>”</span>
        </div>
        <div className={styles['normal-text']}>As a global assets allocation service provider for UHNW, Wealth Quay Family Office provides the most advanced strategic planning services based on a global cooperation network. The team has extensive experiences in the areas of derivatives and quantitative analysis, financial service consultancy, capital market and investment banking business.</div>
      </section>
    </main>
  )
}

export default About
