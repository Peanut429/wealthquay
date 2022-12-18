import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'

function Services() {
  const { t } = useTranslation()
  const data = [
    { title: t('services.0.title'), content: t('services.0.content') },
    { title: t('services.1.title'), content: t('services.1.content') },
    { title: t('services.2.title'), content: t('services.2.content') },
    { title: t('services.3.title'), content: t('services.3.content') },
    { title: t('services.4.title'), content: t('services.4.content') },
  ]

  return (
    <main className={styles.main}>
      {data.map(item => {
        return <div key={item.title} className={styles.service}>
          <div className={styles.service__wrapper}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.content}>{item.content}</div>
          </div>
        </div>
      })}
    </main>
  )
}

export default Services
