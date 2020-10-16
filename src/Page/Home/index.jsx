import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import ReadMore from "read-more-react"

import { Header, Footer } from "../../Component"
import { Forms } from "../../Container"
import { Clickbait } from "../../Component"

import "./style.scss"

const Home = () => {
	const [check, setCheck] = useState(false)
	const [mobi, setMobi] = useState(false)
	const [click, setClick] = useState(false)
	const slider = () => {
		const types = document.querySelectorAll(".types_item")
		types.forEach((items, id) => {
			items.addEventListener("click", () => {
				if (window.innerWidth <= 800) {
					setMobi(true)
				} else {
					setMobi(false)
				}
			})
		})

		let index = 0
		const slides = document.querySelectorAll(".clickbait_slide")
		let length = slides.length
		for (let i = 0; i < length; i++) {
			let offset = i * 100 + "%"
			slides.item(i).style.left = offset
		}
		if (check)
			document.querySelector("#number_of_slide").textContent =
				"0" + (index + 1) + "/" + length + ""
		const nextSlide = document.querySelector("#next_slide")
		const prevSlide = document.querySelector("#prev_slide")
		if (check)
			nextSlide.addEventListener("click", () => {
				index++
				prevSlide.classList.remove("disable")
				if (index >= length - 1) {
					nextSlide.classList.add("disable")
					document.querySelector("#slider_title").textContent =
						"Отлично! Остался последний шаг. Оставьте нам ваши контакты и мы с вами связажемся"
				}
				if (index > length - 1) {
					index--
				}
				slides.forEach((item, id) => {
					let offset = (id - index) * 100 + "%"
					item.style.transition = "all .500s linear"
					setTimeout(() => (item.style.left = offset), 1)
				})
				document.querySelector("#number_of_slide").textContent =
					"0" + (index + 1) + "/" + length + ""
			})
		if (check)
			prevSlide.addEventListener("click", () => {
				index--
				nextSlide.classList.remove("disable")
				document.querySelector("#slider_title").textContent =
					"Ответьте на несколько вопросов и получите информацию о заказе"
				if (index <= 0) {
					prevSlide.classList.add("disable")
				}
				if (index < 0) {
					index++
				}
				slides.forEach((item, id) => {
					let offset = (id - index) * 100 + "%"
					item.style.transition = "all .500s linear"
					setTimeout(() => (item.style.left = offset), 1)
				})
				document.querySelector("#number_of_slide").textContent =
					"0" + (index + 1) + "/" + length + ""
			})
	}
	useEffect(() => {
		slider()
	}, [slider])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	const divText = document.createElement("div")
	const text = `<p>Мы придерживаемся принципу индивидуального подхода к каждому	проекту, любой наш проект уникален.</p><p>Мы создаем сайты для бизнеса, которые будут работать на вас.</p><p>Мы всегда стремимся найти самые конкурентоспособные решения и	достичь самого высокого уровня эффективности по всем проектам.</p><p>Мы создаем landing, корпоративный сайт, интернет – магазин любой сложности.</p><p>Мы продвигаем сайты на всех интернет- площадках.</p><p>Заказать создание сайта от веб - студии International Techno Dynamics, значит доверить свой имидж лучшим.</p>`
	divText.innerHTML = text
	return (
		<>
			<Helmet>
				<title>ITD Company - Главная</title>
				<meta name="description" content="Главная страница сайта" />
			</Helmet>
			<Header />
			<section className="index_main_screen">
				<div className="wrapper">
					<div className="index_main_screen_content_container">
						<div className="index_main_screen_logo_container">
							<img src="/img/logo_172.png" alt="logo" />
						</div>
						<div className="index_main_screen_name_container">
							<h1>
								international
								<br />
								techno
								<br />
								dynamics
							</h1>
							<h2>Команда специалистов, которая впечатляет!</h2>
							<div className="index_main_screen_text">
								Ответьте всего на 5 вопросов
								<br />и узнайте цену Вашего сайта
							</div>
							<button
								className="main_screen_button"
								onClick={() => setClick(true)}
							>
								Узнать цену
							</button>
						</div>
						<div className="index_main_screen_img_container">
							<img src="/img/index_main_img.png" alt="img" />
						</div>
					</div>
				</div>
			</section>
			<section className="index_advantages_screen">
				<div className="wrapper">
					<div className="gradient_title">
						<h2>
							Наши
							<br />
							преимущества
						</h2>
					</div>
				</div>
				<div className="index_advantages">
					<div className="index_advantages_item">
						<div className="index_advantages_item_number">01</div>
						<div className="index_advantages_item_icon">
							<img
								src="/img/advantages_cool.png"
								alt=""
								className="index_advantages_icon"
							/>
							<div className="index_advantages_item_title">Эффективность</div>
						</div>
					</div>
					<div className="index_advantages_item">
						<div className="index_advantages_item_number">02</div>
						<div className="index_advantages_item_icon">
							<img
								src="/img/advantages_pencil.png"
								alt=""
								className="index_advantages_icon"
							/>
							<div className="index_advantages_item_title">Креативные идеи</div>
						</div>
					</div>
					<div className="index_advantages_item">
						<div className="index_advantages_item_number">03</div>
						<div className="index_advantages_item_icon">
							<img
								src="/img/advantages_cubok.png"
								alt=""
								className="index_advantages_icon"
							/>
							<div className="index_advantages_item_title">Оптимизация</div>
						</div>
					</div>
					<div className="index_advantages_item">
						<div className="index_advantages_item_number">04</div>
						<div className="index_advantages_item_icon">
							<img
								src="/img/advantages_tool.png"
								alt=""
								className="index_advantages_icon"
							/>
							<div className="index_advantages_item_title">Стратегия</div>
						</div>
					</div>
					<div className="index_advantages_item">
						<div className="index_advantages_item_number">05</div>
						<div className="index_advantages_item_icon">
							<img
								src="/img/advantages_clock.png"
								alt=""
								className="index_advantages_icon"
							/>
							<div className="index_advantages_item_title">
								Работа на результат
							</div>
						</div>
					</div>
					<div className="index_advantages_item">
						<div className="index_advantages_item_number">06</div>
						<div className="index_advantages_item_icon">
							<img
								src="/img/advantages_patern.png"
								alt=""
								className="index_advantages_icon"
							/>
							<div className="index_advantages_item_title">
								Работаем без шаблонов
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="index_why_we">
				<div className="wrapper">
					<h2>Почему мы?</h2>
					<div className="shift_description">
						{window.innerWidth >= 100 && (
							<>
								<p>
									Мы придерживаемся принципу индивидуального подхода к каждому
									проекту, любой наш проект уникален.
								</p>
								<p>
									Мы создаем сайты для бизнеса, которые будут работать на вас.
								</p>
								<p>
									Мы всегда стремимся найти самые конкурентоспособные решения и
									достичь самого высокого уровня эффективности по всем проектам.
								</p>
								<p>
									Мы создаем landing, корпоративный сайт, интернет – магазин
									любой сложности.
								</p>
								<p>Мы продвигаем сайты на всех интернет- площадках.</p>
								<p>
									Заказать создание сайта от веб - студии International Techno
									Dynamics, значит доверить свой имидж лучшим.
								</p>
							</>
						)}
						{window.innerWidth <= 100 && (
							<ReadMore
								text={divText.innerHTML}
								min={200}
								ideal={200}
								max={text.length}
								readMoreText="читать больше..."
							/>
						)}
					</div>
				</div>
			</section>
			<section className="index_contacts">
				<div className="wrapper">
					<h2>
						Оставьте заявку
						<br />и мы с Вами свяжемся!
					</h2>
					<Forms />
					<center>
						<button className="downloadBtn">Скачать</button>
					</center>
				</div>
			</section>
			<Footer />
			{click && <Clickbait setCheck={setClick} check={click} />}
		</>
	)
}

export default Home
