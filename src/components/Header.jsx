import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import {Container} from './Containter'
import {Link} from 'react-router-dom'

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background: (--colors-ui-base);
  
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const Title = styled(Link).attrs({
  to: '/'
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`
const Header = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            { theme === 'light' ? (
              <IoMoonOutline size={'14px'} style={{marginRight: '0.75rem'}}/>
            ) : (
              <IoMoon size={'14px'} style={{marginRight: '0.75rem'}}/>
            )}
            <span style={{marginLeft: '0.75rem'}}>{theme} theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}

export default Header