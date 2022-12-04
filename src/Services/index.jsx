import styles from './index.module.scss'

function Services() {
  const data = [
    { title: 'Cross Border Platform Services', content: 'We aim to provide bespoke cross border platform of global asset allocation for UHNW.' },
    { title: 'Global Wealth Management Services', content: 'We aim to provide a package of global assets allocation plans to assist our clients in achieving strategic global asset distribution.' },
    { title: 'Offshore Family Trust Services', content: 'We aim to provide a comprehensive consulting service of setting up the offshore family trusts, offshore family offices and IBC services including directorship services, full accounting services, compliance and risk management services，private banking connections and etc.' },
    { title: 'Onshore and Offshore Charity Platform Services', content: 'We aim to provide long-term charitable activities that cover both domestic and overseas, and customized charity services.' },
    { title: 'Family Lawyer Services', content: 'We aim to assist our client with legal advisory services in overseas strategic layout.' },
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
