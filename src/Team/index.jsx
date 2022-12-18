import styles from './index.module.scss'
import member1 from '../assets/images/Sophia Li.png'
import member2 from '../assets/images/Maggie Liu.png'
import member3 from '../assets/images/Leanne Nie.png'
import member4 from '../assets/images/Ben Cui.png'
import member5 from '../assets/images/Margaret Guan.png'
import { useTranslation } from 'react-i18next'

function Team () {
  const {t} = useTranslation()

  const members = [
    { name: 'Sophia Li', image: member1 },
    { name: 'Maggie Liu', image: member2 },
    { name: 'Leanne Nie', image: member3 },
    { name: 'Ben Cui', image: member4 },
    { name: 'Margaret Guan', image: member5 },
  ]

  return (
    <main className={styles.team}>
      <section className={styles.container}>
        <div className={styles['top-text']}>
          <h1>{t('team.title')}</h1>
          <div>{t('team.description')}</div>
        </div>
        <div className={styles.members}>
          {members.map(item => {
            return <div className={styles['members__item']} key={item.name}>
              <img src={item.image} alt={item.name} />
              <span className={styles.members__name}>{item.name}</span>
            </div>
          })}
        </div>
      </section>
    </main>
  )
}

export default Team
