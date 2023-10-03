import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <NavLink className={styles.logo} to="/">
            <img alt="Gamba logo" src="/logo.png" />
          </NavLink>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div className={styles.externalLinks}>
            <a href="https://discord.gg/YGr6mBADQk" target="_blank" rel="noreferrer">
              Discord
            </a>
            <a href="https://explorer.gamba.so" target="_blank" rel="noreferrer">
              Stats
            </a>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
