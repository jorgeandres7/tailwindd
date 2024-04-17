import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './Components/Page/Home/Home'
import { HeaderBlog } from './Components/Header/HeaderBlog'
import { Main } from './Components/Main/Main'
import { Section } from './Components/Section/Section'




function App() {
  

  return (
    <>
      <Home>
        <HeaderBlog></HeaderBlog> 
     
      <Main>
       <Section></Section>
      </Main>
      </Home>
      </>
  )
}

export default App
