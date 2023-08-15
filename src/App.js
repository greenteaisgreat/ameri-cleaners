import React from 'react';
import styles from './style';
import { NavBar, Hero, Services, About, Eco, Testimonials, Contact, Faq, Footer } from './components'

const App = () => {
  return (
    <div className=" w-full overflow-hidden">
    <div className={`${styles.flexCenter}`}>
      <div className='w-full'>
        <NavBar />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className="w-full">
        <Hero />
      </div>
    </div>
    
    <div className={`${styles.flexCenter}`}>
      <div className='w-full'>
        <Services />
        <About />
        <Eco />
        <Testimonials />
        <Contact />
        <Faq />
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default App;