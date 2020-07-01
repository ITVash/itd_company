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
	/* const googleTranslateConfig = {
		lang: 'en'
	}
	new google.translate.TranslateElement({
		pageLanguage: googleTranslateConfig.lang,
}) */
	const callRef = React.useRef()
	React.useEffect(()=>{
		document.body.addEventListener('click', ()=> setCall(false))
	},[call])
	console.log('callRef :>> ', callRef.current);
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
						<ul className={classNames("popup_nav_list", { popup_nav_list__active: lang })} onBlur={()=> setLang(false)} onFocus={()=> setLang(false)}>
							<li className="popup_nav_list__item" data-google-lang="en">Английский</li>
							<li className="popup_nav_list__item" data-google-lang="ru">Русский</li>
						</ul>
					{/* )} */}
				</div>
				<div className="call_button_container">
					<button className='call_button' onClick={()=> setCall(!call)} onBlur={()=> {}}></button>
					{call && (
						<ul className="popup_nav_list popup_nav_list__bottom popup_nav_list__active" ref={ref => callRef.current = ref}>
							{/* <li className="popup_nav_list__item">+380715553322</li> */}
							<li className="popup_nav_list__item">+79950060572</li>
						</ul>
					)}
				</div>
				<div className="mail_button_container">
					<button className='mail_button' onClick={()=> setMail(!mail)} onBlur={()=> setMail(false)}></button>
					{mail && (
						<ul className="popup_nav_list popup_nav_list__bottom popup_nav_list__active">
							<li className="popup_nav_list__item">itdwebcompany@gmail.com</li>
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
