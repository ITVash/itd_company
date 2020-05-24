import React, { useState } from "react"
import { Link } from 'react-router-dom'
import classNames from 'classnames'
//import google from 'https://translate.google.com/translate_a/element.js?cb=TranslateInit';


import './style.scss'

const Header = () => {
	const [open, setOpen] = useState(false)
	const [lang, setLang] = useState(false)
	const [call, setCall] = useState(true)
	const [mail, setMail] = useState(true)
	/* const googleTranslateConfig = {
		lang: 'en'
	}
	new google.translate.TranslateElement({
		pageLanguage: googleTranslateConfig.lang,
}) */
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
				<div className="lang_button_container">
					<button className='lang_button' onClick={()=> setLang(!lang)} onBlur={()=> setLang(!lang)}></button>
					{lang && (
						<ul class="popup_nav_list popup_nav_list__active">
							<li class="popup_nav_list__item">Английский</li>
							<li class="popup_nav_list__item popup_nav_list__item_active">Русский</li>
						</ul>
					)}
				</div>
				<div class="call_button_container">
					<button className='call_button' onClick={()=> setCall(!call)} onBlur={()=> setCall(!call)}></button>
					{call && (
						<ul class="popup_nav_list popup_nav_list__bottom popup_nav_list__active">
							<li class="popup_nav_list__item">+380715553322</li>
							<li class="popup_nav_list__item">+79950060572</li>
						</ul>
					)}
				</div>
				<div class="mail_button_container">
					<button className='mail_button' onClick={()=> setMail(!mail)} onBlur={()=> setMail(!mail)}></button>
					{mail && (
						<ul class="popup_nav_list popup_nav_list__bottom popup_nav_list__active">
							<li class="popup_nav_list__item">itdcompany@gmail.com</li>
							{/* <li class="popup_nav_list__item">mail@mail.mail</li> */}
						</ul>
					)}
				</div>
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
