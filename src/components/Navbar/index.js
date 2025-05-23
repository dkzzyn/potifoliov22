import React from 'react'
import {
  Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems,
  GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink
} from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di'
import { FaBars } from 'react-icons/fa'
import { Bio } from '../../data/constants'
import { useTheme } from 'styled-components'
import { useThemeContext } from '../../utils/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa' // ÍCONES

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const theme = useTheme()
  const { toggleTheme, themeMode } = useThemeContext()

  const isDark = themeMode === 'dark'

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: theme.logo, cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href='#skills'>Habilidades</NavLink>
          <NavLink href='#experience'>Experiência</NavLink>
          <NavLink href='#projects'>Projetos</NavLink>
          <NavLink href='#education'>Educação</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Perfil GitHub</GitHubButton>
          <GitHubButton onClick={toggleTheme} style={{ marginLeft: '10px' }}>
            {isDark ? <><FaSun style={{ marginRight: 6 }} /> Modo Claro</> : <><FaMoon style={{ marginRight: 6 }} /> Modo Escuro</>}
          </GitHubButton>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>Sobre</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>Habilidades</MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(false)}>Experiências</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projetos</MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(false)}>Educação</MobileLink>
            <GitHubButton
              style={{ padding: '10px 16px', background: theme.primary, color: 'white', width: 'max-content' }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
            <GitHubButton
              onClick={() => {
                toggleTheme()
                setIsOpen(false)
              }}
              style={{ marginTop: '10px' }}
            >
              {isDark ? <><FaSun style={{ marginRight: 6 }} /> Modo Claro</> : <><FaMoon style={{ marginRight: 6 }} /> Modo Escuro</>}
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
