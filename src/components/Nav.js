import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = props => {
  return (
    <nav>
      <span className="nav__item">
        <NavLink
          to="/home"
          activeClassName="nav__item--active"
          exact>
          home
        </NavLink>
      </span>
      <span className="nav__item">
        <NavLink
          to="/demo"
          activeClassName="nav__item--active"
          exact>
          demo
        </NavLink>
      </span>
      <style jsx>{`
        .nav__item {
          padding-left: 30px;
        }
      `}</style>
    </nav>
  )
}

export default Nav
