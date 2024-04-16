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
      </Home>
      <Main>
        <Section><h1 className='text-white'>hola, como vas</h1></Section>
      </Main>
      </>
  )
}

export default App
