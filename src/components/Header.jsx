import React from 'react'
import Logo from "../components/images/logo.png"

const Header = () => {

  const links = [
    { id: 1, name: "Services" },
    { id: 2, name: "About" },
    { id: 3, name: "Faq" },
    { id: 4, name: "Contact" }
  ]

  return (
    <header>
      <div className='container flex items-center justify-between' >
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>

        <ul className='flex gap-7.5' >
          {links.map((link) => (
            <li key={link.id}>
              <a href="#">{link.name}</a>
            </li>
          ))}
        </ul>
        <a className='py-[5px] px-[60px] bg-[#3360FF]' href="#">Kirish</a>

      </div>
    </header>
  )
}

export default Header