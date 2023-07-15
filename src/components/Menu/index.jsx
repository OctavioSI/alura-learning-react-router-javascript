import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.scss'

export default function Menu() {
  const pageroutes = [
    {title: "Início", to: "/"},
    {title: "Sobre Mim", to: "/sobremim"}
  ];

  return (
    <>
    <header>
      <nav className={styles.navegacao}>
        {pageroutes.map((route) => {
          return (
            <NavLink 
              key={route.title}
              to={route.to} 
              className={
                ({isActive}) => `
                    ${styles.link} 
                    ${isActive ? styles.linkDestacado : ''}
                ` 
              }
              end
            >{route.title}</NavLink>
          )
        })}
      </nav>
    </header>
    </>
  )
}
