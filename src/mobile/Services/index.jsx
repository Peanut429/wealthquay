import { Swiper } from 'antd-mobile'
import styles from './index.module.scss'

function Services() {
  const data = [
    { title: 'Cross Border Platform Services', content: 'We aim to provide bespoke cross border platform of global asset allocation for UHNW.' },
    { title: 'Global Wealth Management Services', content: 'We aim to provide a package of global assets allocation plans to assist our clients in achieving strategic global asset distribution.' },
    { title: 'Offshore Family Trust Services', content: 'We aim to provide a comprehensive consulting service of setting up the offshore family trusts, offshore family offices and IBC services including directorship services, full accounting services, compliance and risk management services，private banking connections and etc.' },
    { title: 'Family Lawyer Services', content: 'We aim to assist our client with legal advisory services in overseas strategic layout.' },
    { title: 'Onshore and Offshore Charity Platform Services', content: 'We aim to provide long-term charitable activities that cover both domestic and overseas, and customized charity services.' },
  ]

  return (
    <main className={styles.main}>
      <h1>Our Service</h1>
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
