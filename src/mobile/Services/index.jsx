import { Swiper } from 'antd-mobile'
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
      <h1>{t('m_services.title')}</h1>
      <div className={styles.banner}>
        <Swiper
          defaultIndex={0}
          style={{
            '--track-padding': ' 0 0 40vw',
          }}
          indicatorProps={{
            style: {
              '--dot-color': 'rgba(0, 0, 0, 0.09)',
              '--active-dot-color': '#000000',
              '--dot-size': '8px',
              '--active-dot-size': '8px',
              '--dot-border-radius': '50%',
              '--dot-spacing': '15px'
            }
          }}
        >
          {data.map(item => (
            <Swiper.Item key={item.title}>
              <div className={styles.service}>
                <div className={styles.service__wrapper}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.content}>{item.content}</div>
                </div>
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
    </main>
  )
}

export default Services
