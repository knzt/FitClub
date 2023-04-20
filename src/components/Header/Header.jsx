import React from 'react'
import "./Header.css"
import Logo from '../../assets/logo.png'
import { useState } from 'react'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className="header">
        <img src={Logo} alt="Logo da marca, uma letra F ao lado do nome do clube: 'The Fit Club'" className="logo"/>

        {menuOpened === false && mobile === true ? (
          <div>
            <img

            onClick={() => setMenuOpened(true)}

            src={Bars} alt="" className='bars' />
          </div>
        ) : (
          <ul className="header-menu">
            <li><Link onClick={()=>setMenuOpened(false)}
            to='home'
            span={true}
            smooth={true}
            >Início</Link></li>

            <li><Link onClick={()=>setMenuOpened(false)}
            to='programs'
            span={true}
            smooth={true}
            >Programas</Link></li>

            <li><Link onClick={()=>setMenuOpened(false)}
            to='reasons'
            span={true}
            smooth={true}
            >Diferencial</Link></li>

            <li><Link onClick={()=>setMenuOpened(false)}
            to='plans'
            span={true}
            smooth={true}
            >Planos</Link></li>

            <li><Link onClick={()=>setMenuOpened(false)}
            to='testimonials'
            span={true}
            smooth={true}
            >Depoimentos</Link></li>
          </ul>
      )}

    </div>
  )
}

export default Header
