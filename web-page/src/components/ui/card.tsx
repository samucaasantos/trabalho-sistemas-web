import React from 'react'
import styles from './card.module.css'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`${styles.card} ${className}`}>
      {children}
    </div>
  )
}

