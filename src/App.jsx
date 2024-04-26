import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './Components/Page/Home/Home'
import { HeaderBlog } from './Components/Header/HeaderBlog'
import { Main } from './Components/Main/Main'
import { Section } from './Components/Section/Section'
import { Slider } from './Components/Slider/Slider'
import { Footer } from './Components/Footer/Footer'




function App() {
  

  return (
    <>
      <Home>
        <HeaderBlog></HeaderBlog> 
     
      <Main>
       <Section></Section>
       
      </Main>
   <Footer>
      <Slider/>
      </Footer>
     
      </Home>
      </>
  )
}

export default App
