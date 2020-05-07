import React, { useState } from "react"
import { Link } from 'react-router-dom'
import classNames from 'classnames'


import './style.scss'

const Header = () => {
  const [open, setOpen] = useState(false)
	return (
		<>
			<section id='main_menu'  className={classNames({open: open})}>
				<img src='/img/close_form.png' alt='Close' id='close_menu' onClick={()=> setOpen(false)} />
				<ul id='main_menu_container'>
					<li>
						<Link to="/" className='main_menu_item' onClick={()=> setOpen(false)}>
							<div className='top'></div>
							<div className='bottom'>
								<div className='menu_title'>Главная</div>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/about" className='main_menu_item' onClick={()=> setOpen(false)}>
							<div className='top'></div>
							<div className='bottom'>
								<div className='menu_title'>О нас</div>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/portfolio" className='main_menu_item' onClick={()=> setOpen(false)}>
							<div className='top'></div>
							<div className='bottom'>
								<div className='menu_title'>Портфолио</div>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/services" className='main_menu_item' onClick={()=> setOpen(false)}>
							<div className='top'></div>
							<div className='bottom'>
								<div className='menu_title'>Услуги</div>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/type-site" className='main_menu_item' onClick={()=> setOpen(false)}>
							<div className='top'></div>
							<div className='bottom'>
								<div className='menu_title'>Типы сайтов</div>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/about" className='main_menu_item' onClick={()=> setOpen(false)}>
							<div className='top'></div>
							<div className='bottom'>
								<div className='menu_title'>Контакты</div>
							</div>
						</Link>
					</li>
				</ul>
			</section>
			<section className='fixed_buttons_right'>
				<button className='lang_button'></button>
				<button className='call_button'></button>
				<button className='mail_button'></button>
			</section>
			<section className='fixed_buttons_left'>
				<div id='menu_button' onClick={()=> setOpen(true)}>
					<span className='side_menu_line'></span>
					<span className='side_menu_line'></span>
					<span className='side_menu_line'></span>
				</div>
			</section>
		</>
	)
}

export default Header
