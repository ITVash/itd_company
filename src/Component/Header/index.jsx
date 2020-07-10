import React, { useState } from "react"
import { Link } from 'react-router-dom'
import classNames from 'classnames'
//import google from 'https://translate.google.com/translate_a/element.js?cb=TranslateInit';


import './style.scss'

const Header = () => {
	const [open, setOpen] = useState(false)
	const [lang, setLang] = useState(false)
	const [call, setCall] = useState(false)
	const [mail, setMail] = useState(false)
	
	const callRef = React.useRef()
	const langRef = React.useRef()
	const mailRef = React.useRef()
	React.useEffect(()=>{
		document.body.addEventListener('click', e => {
			if (!e.path.includes(callRef.current)) {
				setCall(false)
			}
			if (!e.path.includes(langRef.current)) {
				setLang(false)
			}
			if (!e.path.includes(mailRef.current)) {
				setMail(false)
			}
		})
	}, [call, lang, mail])

	return (
		<>
			<section id='main_menu'  className={classNames({open: open})}>
				<img src='/img/close_form.png' alt='Close' id='close_menu' onClick={()=> setOpen(false)} />
				<ul id='main_menu_container'>
					<li>
						<Link to="/" className='main_menu_item' onClick={()=> setOpen(false)}>
							<div className='bottom'>
								<div className='menu_title'>Главная</div>
							</div>
							<div className='top'></div>
						</Link>
					</li>
					<li>
						<Link to="/about" className='main_menu_item' onClick={()=> setOpen(false)}>
							<div className='bottom'>
								<div className='menu_title'>О нас</div>
							</div>
							<div className='top'></div>
						</Link>
					</li>
					<li>
						<Link to="/portfolio" className='main_menu_item' onClick={()=> setOpen(false)}>
							<div className='bottom'>
								<div className='menu_title'>Портфолио</div>
							</div>
							<div className='top'></div>
						</Link>
					</li>
					<li>
						<Link to="/services" className='main_menu_item' onClick={()=> setOpen(false)}>
							<div className='bottom'>
								<div className='menu_title'>Услуги</div>
							</div>
							<div className='top'></div>
						</Link>
					</li>
					<li>
						<Link to="/type-site" className='main_menu_item' onClick={()=> setOpen(false)}>
							<div className='bottom'>
								<div className='menu_title'>Типы сайтов</div>
							</div>
							<div className='top'></div>
						</Link>
					</li>
					<li>
						<Link to="/about" className='main_menu_item' onClick={()=> setOpen(false)}>
							<div className='bottom'>
								<div className='menu_title'>Контакты</div>
							</div>
							<div className='top'></div>
						</Link>
					</li>
				</ul>
			</section>
			<section className='fixed_buttons_right'>
				<div className="lang_button_container">
					<button className='lang_button' onClick={()=> setLang(!lang)} /* onBlur={()=> setLang(false)} */ ></button>
					{/* {lang && ( */}
						<ul className={classNames("popup_nav_list", { popup_nav_list__active: lang })} ref={langRef}>
							<li className="popup_nav_list__item" data-google-lang="en">Английский</li>
							<li className="popup_nav_list__item" data-google-lang="ru">Русский</li>
						</ul>
					{/* )} */}
				</div>
				<div className="call_button_container">
					<button className='call_button' onClick={()=> setCall(!call)} onBlur={()=> {}}></button>
					{call && (
						<ul className="popup_nav_list popup_nav_list__bottom popup_nav_list__active" ref={callRef}>
							{/* <li className="popup_nav_list__item">+380715553322</li> */}
							<li className="popup_nav_list__item"><a className="popup_nav_list__item" href="tel:+79950060572">+79950060572</a></li>
						</ul>
					)}
				</div>
				<div className="mail_button_container">
					<button className='mail_button' onClick={()=> setMail(!mail)} onBlur={()=> {}}></button>
					{mail && (
						<ul className="popup_nav_list popup_nav_list__bottom popup_nav_list__active" ref={mailRef}>
							<li className="popup_nav_list__item"><a className="popup_nav_list__item" href="mailto:itdwebcompany@gmail.com">itdwebcompany@gmail.com</a></li>
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
