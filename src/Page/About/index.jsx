import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"

import { Header, Footer } from "../../Component"
import { Forms } from '../../Container';

import "./style.scss"

const About = () => {
	const [openSlide, setOpenSlide] = useState(false)
	//const [itemSlide, setItemSlide] = useState(0)
	const slider = () => {
		let item = 0
		let str = ""
		const switcher = document.querySelector(".slide_switcher_constraint")
		const sliders = document.querySelectorAll(".slide")
		for (let i = 0; i < sliders.length; i++) {
			let offset = i * 100 + "%"
			sliders[i].style.left = offset
			str += '<span class="switcher_point"></span>'
		}
		if (openSlide) switcher.innerHTML = str
		if (openSlide) switcher.children[item].classList.add("active")
		const switchPoints = document.querySelectorAll(".switcher_point")
		const nextSlide = document.querySelector("#next_slide")
		const prevSlide = document.querySelector("#prev_slide")
		if (openSlide) nextSlide.addEventListener("click", () => {
			item++
			prevSlide.classList.remove("disable")
			if (item >= sliders.length - 1) {
				nextSlide.setAttribute('class', 'disable')
			}
			if (item > sliders.length - 1) {
				item--
			}
			sliders.forEach((point, id) => {
				let offset = (id - item) * 100 + "%"
				point.style.transition = 'all .500s linear'
				setTimeout(() => point.style.left = `${offset}`, 1)
			})
			switchPoints.forEach(item => item.classList.remove("active"))
			switchPoints.item(item).classList.add("active")
		})
		if (openSlide) prevSlide.addEventListener("click", () => {
			item--
			nextSlide.classList.remove("disable")
			if (item <= 0) {				
				prevSlide.setAttribute('class', 'disable')
			}
			if (item < 0) {
				item++
			}
			sliders.forEach((point, id) => {
				let offset = (id - item) * 100 + "%"
				point.style.transition = 'all .500s linear'
				setTimeout(() => point.style.left = `${offset}`, 1)
			})
			switchPoints.forEach(item => item.classList.remove("active"))
			switchPoints.item(item).classList.add("active")
		})
		
		switchPoints.forEach((item, id) => {
			item.addEventListener("click", () => {
				item = id
				sliders.forEach((point, id) => {
					let offset = (id - item) * 100 + "%"
					point.style.transition = 'all .500s linear'
					setTimeout(() => point.style.left = `${offset}`, 1)
				})
				switchPoints.forEach(item => item.classList.remove("active"))
				switchPoints.item(item).classList.add("active")
			})
		})
	}
	useEffect(() => {
		slider()
	}, [slider])
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Helmet>
				<title>ITD Company - О Нас</title>
				<meta name='description' content='Страница сайта - О Нас' />
			</Helmet>
			<Header />
			<div className='wrapper'>
				<div className='services_container'>
					<div className='gradient_title'>
						<h2>О нас</h2>
					</div>
				</div>
			</div>
			<div className='wrapper'>
				<section className='about_introduction'>
					<div className='about_container'>
						<div className='about'>
							<h2>
								МЫ БОЛЬШЕ,
								<br />
								ЧЕМ ПРОСТО КОМПАНИЯ
							</h2>
							<p>
								Веб-студия International Techno Dynamics создана в 2019 году. В
								ней работает дружный коллектив, который действует сообща. Наши
								сотрудники ответственно относятся к своему ремеслу. Они
								настоящие специалисты в сфере веб-разработки, графическом
								дизайне, SEO, CMM, (креативные дизайнеры, профессиональные
								программисты.) Каждый работник любит свою профессию и следит за
								трендами в своей сфере деятельности, поэтому компания
								поддерживает и задает новые направления, постоянно разрабатывает
								новые решения. Все работники веб-студии являются
								профессионалами, ведь они отдали профессии немало лет.
							</p>
						</div>
					</div>
					<div className='about_img_container'>
						<img src='/img/about_1.jpg' alt='' />
					</div>
				</section>
			</div>

			<div className='wrapper'>
				<section className='slogan'>
					Новые технологии, творческий подход и желание всегда быть на шаг
					впереди — основные принципы работы нашего агентства. Тут не нужно
					лишних слов, просто посмотрите раздел проектов — они говорят за нас.
				</section>
			</div>

			<section className='photos'>
				<div className='wrapper'>
					<div className='photos_container'>
						<img src='/img/photo1.jpg' alt='our photo 1' />
						<img src='/img/photo2.jpg' alt='our photo 1' />
					</div>
					<button id='how_we_work' onClick={() => setOpenSlide(true)}>
						Как мы работаем
					</button>
				</div>
			</section>

			<section className='contact_form index_contacts_light'>
				<div className='wrapper'>
					<div className='wrapper_form'>
						<div className='gradient_title'>
							<h2>Контакты</h2>
						</div>
						<div className='contacts'>
							<div>
								<div className='title'>Позвоните нам</div>
								<div className='gradient_contact'>+ 38 (071) 555-33-22</div>
							</div>
							<div>
								<div className='title'>Или напишите нам</div>
								<div className='gradient_contact'>itd.company@gmail.com</div>
							</div>
						</div>

						<div className='index_contacts index_contacts_light'>
							<h2>Или оставьте заявку и мы свяжемся с Вами!</h2>
							{/* <form action=''>
								<div className='index_input_container'>
									<input
										type='text'
										className='index_contacts_input'
										placeholder='Имя'
										required
									/>
									<input
										type='tel'
										className='index_contacts_input error_input'
										placeholder='Телефон (WhatsApp/Viber)'
										required
									/>
									<input
										type='email'
										className='index_contacts_input'
										placeholder='Email'
										required
									/>
								</div>
								<textarea
									name=''
									id=''
									cols='30'
									rows='10'
									placeholder='Ваше сообщение'
									required
								></textarea>
								<div className='error_form_msg'>
									JF sdf sdf sdomvsd mosld sdflmdsfm!
								</div>
								<button type='submit'>Отправить</button>
							</form> */}
							<Forms />
						</div>
					</div>
				</div>
			</section>

			{openSlide && (
				<section id='how_we_work_form'>
					<img
						src='/img/close_form.png'
						alt=''
						id='close_how_form'
						style={{opacity: "70%"}}
						onClick={() => setOpenSlide(false)}
					/>
					<div className='how_we_work_wrapper'>
						<img src='/img/prev_slide_blue.png' alt='prev' id='prev_slide' />
						<img src='/img/next_slide_blue.png' alt='next' id='next_slide' />

						<div className='gradient_title'>
							<h2>КАК МЫ РАБОТАЕМ</h2>
						</div>

						<div id='how_we_work_slider'>
							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/1.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>01</div>
										<p>
										Заполнение чек-листа
										</p>
									</div>
									<div className='number_mobile'>01</div>
								</div>
							</div>

							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/2.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>02</div>
										<p>Формирование первичного ТЗ на основании полученной информации</p>
									</div>
									<div className='number_mobile'>02</div>
								</div>
							</div>

							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/3.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>03</div>
										<p>
										Согласование с заказчиком. Обсуждение дополнительных вопросов и нюансов, формирование градации цены или же точной цены и сроков
										</p>
									</div>
									<div className='number_mobile'>03</div>
								</div>
							</div>

							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/4.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>04</div>
										<p>
										Заключение договора
										</p>
									</div>
									<div className='number_mobile'>04</div>
								</div>
							</div>

							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/5.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>05</div>
										<p>
										Утверждение заказчиком финального ТЗ
										</p>
									</div>
									<div className='number_mobile'>05</div>
								</div>
							</div>

							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/6.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>06</div>
										<p>
										Разработка макетов дизайна сайта
										</p>
									</div>
									<div className='number_mobile'>06</div>
								</div>
							</div>

							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/5.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>07</div>
										<p>
										Согласование макетов с заказчиком
										</p>
									</div>
									<div className='number_mobile'>07</div>
								</div>
							</div>

							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/8.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>08</div>
										<p>
										Вёрстка готовых, согласованных макетов
										</p>
									</div>
									<div className='number_mobile'>08</div>
								</div>
							</div>

							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/9.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>09</div>
										<p>
										Бэк-энд, программирование и проработка функциональности сайта
										</p>
									</div>
									<div className='number_mobile'>09</div>
								</div>
							</div>

							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/10.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>10</div>
										<p>
										Тестирование проекта, при необходимости, правки в проекте
										</p>
									</div>
									<div className='number_mobile'>10</div>
								</div>
							</div>

							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/11.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>11</div>
										<p>
										Демонстрация проекта заказчику
										</p>
									</div>
									<div className='number_mobile'>11</div>
								</div>
							</div>

							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/12.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>12</div>
										<p>
										Создание документации
										</p>
									</div>
									<div className='number_mobile'>12</div>
								</div>
							</div>

							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/13.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>13</div>
										<p>
										Размещение сайта на хостинге
										</p>
									</div>
									<div className='number_mobile'>13</div>
								</div>
							</div>

							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/14.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>14</div>
										<p>
										Приём работы от заказчика
										</p>
									</div>
									<div className='number_mobile'>14</div>
								</div>
							</div>

							<div className='slide'>
								<div className='content_container'>
									<div
										className='slider_image'
										style={{ background: "url(/how/15.png)" }}
									></div>
									<div className='slide_info'>
										<div className='number'>15</div>
										<p>
										Завершение проекта
										</p>
									</div>
									<div className='number_mobile'>15</div>
								</div>
							</div>

						</div>
						<div className='slide_switcher'>
							<span className='slide_switcher_constraint'></span>
						</div>
					</div>
				</section>
			)}

			<Footer />
		</>
	)
}

export default About
