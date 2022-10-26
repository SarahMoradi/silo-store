import React, { useState } from 'react'

import { Badge } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'
import { useCart } from '../../context/CartProvider'

const Navigation = () => {
  const { cart } = useCart()
  return (
    <header className={styles.main_navigation}>
      <nav>
        <ul>
          <li>
            <NavLink to='/' activeclassname={styles.active_link} exact>
              Home
            </NavLink>
          </li>
          <li className={styles.cart_container}>
            <NavLink to='/cart'>Cart</NavLink>
            <Badge className={styles.badge_container} color='white'>
              {cart.length > 0 && cart.length}
            </Badge>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Navigation
