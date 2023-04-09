import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Built by{' '}
      <a href="https://bucolic-faloodeh-8def2c.netlify.app/">Yuto Ichihara</a>
    </div>
  </Container>
)

export default Footer
