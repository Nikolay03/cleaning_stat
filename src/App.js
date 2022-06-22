import React from 'react'
import HomeContainer from 'containers/Home/HomeContainer'
import ThemeProvider from './providers/ThemeProvider'
import '@fontsource/source-sans-pro/300.css'
import '@fontsource/source-sans-pro/400.css'
import '@fontsource/source-sans-pro/600.css'
import 'react-multi-carousel/lib/styles.css'
import 'animate.css/animate.min.css'

function App () {
  return (
    <ThemeProvider>
      <HomeContainer />
    </ThemeProvider>
  )
}

export default App
