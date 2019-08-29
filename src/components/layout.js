import React from 'react'
import styled from 'styled-components'

import Header from "../components/header"
import Footer from "../components/footer"
import "../components/global-styles.css"

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Layout = ({children}) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout
