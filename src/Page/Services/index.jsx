import React, { useEffect, useState, useCallback, useRef } from "react"
import { Helmet } from "react-helmet"

import { Header, Footer, ServiceContainer, ServiceBody } from "../../Component"

const Services = () => {
	const [service, setService] = useState(false)
	const [count, setCount] = useState(0)
	const base = [
		{
			background: "/img/Услуги/web-разработка.png",
			title: "WEB-разработка",
			slide_items: [
				{
					link: "/services/1",
					item: "Создание сайтов",
				},
				{
					link: "/services/2",
					item: "Создание ИМ",
				},
				{
					link: "/services/3",
					item: "Создание CRM",
				},
				{
					link: "/services/4",
					item: "Создание сайтов",
				},
				{
					link: "/services/5",
					item: "Моб. версия",
				},
				{
					link: "/services/6",
					item: "Web-прог.",
				},
			],
		},
		{
			background: "/img/Услуги/web-дизайн.png",
			title: "WEB-дизайн",
			slide_items: [
				{
					link: "/services/7",
					item: "Создание макета",
				},
				{
					link: "/services/8",
					item: "Создание логотипа",
				},
				{
					link: "/services/9",
					item: "Создание иконок",
				},
				{
					link: "/services/10",
					item: "Уникальная графика",
				},
				{
					link: "/services/11",
					item: "Изображения",
				},
				{
					link: "/services/12",
					item: "Вёрстка",
				},
				{
					link: "/services/13",
					item: "Разработка анимации",
				},
			],
		},
		{
			background: "/img/Услуги/Интернет-маркетинг.png",
			title: "Интернет-маркетинг",
			slide_items: [
				{
					link: "/services/14",
					item: "SEO",
				},
				{
					link: "/services/15",
					item: "SMM",
				},
				{
					link: "/services/16",
					item: "Оформление соц. Сетей",
				},
				{
					link: "/services/17",
					item: "Подключение и настройка Google AdWords, Yandex Analitic",
				},
				{
					link: "/services/18",
					item: "Настройка контекстной рекламы",
				},
				{
					link: "/services/19",
					item: "Копирайтинг",
				},
				{
					link: "/services/20",
					item: "Разработка стратегии по продвижению",
				},
			],
		},
		{
			background: "/img/Услуги/Техподдержка.png",
			title: "Техподдержка",
			slide_items: [
				{
					link: "/services/21",
					item: "Администрирование и обслуживание сайта",
				},
				{
					link: "/services/22",
					item: "Размещение сайта на хостинге",
				},
				{
					link: "/services/23",
					item: "Наполнение сайта",
				},
				{
					link: "/services/24",
					item: "Организация безопасности",
				},
			],
		},
		{
			background: "/img/Услуги/Дизайн.png",
			title: "Дизайн",
			slide_items: [
				{
					link: "/services/25",
					item: "Разработка фирменного стиля",
				},
				{
					link: "/services/26",
					item: "Дизайн печатной рекламы",
				},
				{
					link: "/services/27",
					item: "Разработка визиток, буклетов, приглашений на мероприятия",
				},
				{
					link: "/services/28",
					item: "Дизайн наружной рекламы, вывесок",
				},
			],
		},
	]
	const itemRef = useRef(null)
	let slidesType = null
	const onClickHandler = useCallback(() => {
		let index = 0
		const serviceItem = document.querySelectorAll(".service_item")
		const prevSlide = document.querySelector("#prev_slide")
		const nextSlide = document.querySelector("#next_slide")
		const slide = itemRef
		/**
		 * Обработка нажатия а услугу и показ нужного типа услуги
		 */
		serviceItem.forEach((item, id) => {
			item.addEventListener("click", () => {
				index = id
				setCount(id)
				setService(true)
				slidesType = slide.current.querySelectorAll(".services_slider")
				slidesType.forEach((sliden, i) => {
					let offset = (i - id) * 100 + "%"
					setTimeout(() => (sliden.style.left = offset), 1)
				})
				document.querySelector("#slide_number").textContent =
					"0" + (index + 1) + ""
			})
		})
		/**
		 * Отработчик скрола назад
		 */
		index = count
		if (service)
			prevSlide.addEventListener("click", () => {
				index--
				setCount(index < 0 ? 0 : index)
				nextSlide.classList.remove("disable")
				if (index <= 0) {
					prevSlide.classList.add("disable")
				}
				if (index < 0) {
					index++
				}
				slidesType = slide.current.querySelectorAll(".services_slider")
				slidesType.forEach((sliden, i) => {
					let offset = (i - index) * 100 + "%"
					sliden.style.transition = "all .500s linear"
					setTimeout(() => (sliden.style.left = offset), 1)
				})
				document.querySelector("#slide_number").textContent =
					"0" + (index + 1) + ""
			})
		/**
		 * Обработчик слайдера некст
		 */
		if (service)
			nextSlide.addEventListener("click", () => {
				index++
				slidesType = slide.current.querySelectorAll(".services_slider")
				setCount(index > slidesType.length - 1 ? slidesType.length - 1 : index)
				prevSlide.classList.remove("disable")
				if (index >= slidesType.length - 1) {
					nextSlide.classList.add("disable")
				}
				if (index > slidesType.length - 1) {
					index--
				}
				slidesType.forEach((sliden, i) => {
					let offset = (i - index) * 100 + "%"
					sliden.style.transition = "all .500s linear"
					setTimeout(() => (sliden.style.left = offset), 1)
				})
				document.querySelector("#slide_number").textContent =
					"0" + (index + 1) + ""
			})
		/**
		 * Делаем треугольные типы услуг))
		 */
		if (service) {
			let webTypes = slide.current.querySelectorAll(".web_design")
			let ul = webTypes.item(count)
			let subItem = ul.childNodes
			if (window.innerWidth > 800) {
				let width_circle = ul.querySelector(".number").clientWidth
				let cur_x = width_circle + 25
				let step = subItem[1].offsetTop - subItem[0].offsetTop
				subItem.forEach((item, id) => {
					if (subItem.length % 2 === 0) {
						if (subItem.length / (id + 1) >= 2) {
							let res = -cur_x + "px"
							setTimeout(() => (item.style.cssText = `margin-left: ${res}`), 1)
							cur_x += step
						} else {
							cur_x -= step
							let res = -cur_x + "px"
							setTimeout(() => (item.style.cssText = `margin-left: ${res}`), 1)
						}
					} else {
						if (Math.ceil(subItem.length / (id + 1)) > 2) {
							let res = -cur_x + "px"
							setTimeout(() => (item.style.cssText = `margin-left: ${res}`), 1)
							cur_x += step
						} else {
							let res = -cur_x + "px"
							setTimeout(() => (item.style.cssText = `margin-left: ${res}`), 1)
							cur_x -= step
						}
					}
				})
				/**
				 * Квадрат
				 */
				let height = ul.clientHeight / Math.sqrt(2)
				let width = ul.clientHeight / Math.sqrt(2)
				let rec = slide.current.querySelectorAll(".rectangle").item(count)
				rec.style.cssText = `width: ${
					height > width ? height : width
					}px; height: ${height > width ? height : width}px;`
				let top_offset = (ul.clientHeight - rec.clientHeight) / 2
				rec.style.top = `${top_offset}px`
				rec.style.left= `${-rec.clientHeight / 2}px`
			}
		}
	}, [service, count])

	useEffect(() => {
		onClickHandler()
	}, [onClickHandler])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Helmet>
				<title>ITD Company - Услуги</title>
				<meta name='description' content='Страница сайта - Услуги' />
			</Helmet>
			<Header />
			<section className='services_screen'>
				<div className='wrapper'>
					<div className='services_container'>
						<div className='gradient_title'>
							<h2>Услуги</h2>
						</div>
						<div className='shift_description light_text'>
							Веб-студия International Techno Dynamics предоставляет широкий
							спектр услуг по web-разработке сайтов. Мы ценим время наших
							заказчиков, уважаем их желания и требования, поэтому делаем
							(стараемся сделать) нашу работу быстро и качественно. Мы создаем
							продающие сайты любого типа: landing page, сайты визитки,
							корпоративные сайты, интернет-магазины. Особое внимание уделяем
							web-дизайну, так как без красивого оформления, ресурс не будет
							полноценно выглядеть и быть в тренде (полноценен). Большинство
							пользователей привлекает именно оригинальный дизайн. Кроме того,
							чтобы увеличить количество посетителей, мы занимаемся оптимизацией
							и продвижением сайтов.
						</div>
						<div className='services'>
							<article className='service_item'>
								<span>
									<div className='top_part'>
										<h4 className='service_title'>WEB-разработка</h4>
									</div>
									<div className='bottom_part'>
										<div className='services_number'>01</div>
									</div>
								</span>
							</article>
							<article className='service_item'>
								<span>
									<div className='top_part'>
										<h4 className='service_title'>WEB-дизайн</h4>
									</div>
									<div className='bottom_part'>
										<div className='services_number'>02</div>
									</div>
								</span>
							</article>
							<article className='service_item'>
								<span>
									<div className='top_part'>
										<h4 className='service_title'>Интернет-маркетинг</h4>
									</div>
									<div className='bottom_part'>
										<div className='services_number'>03</div>
									</div>
								</span>
							</article>
							<article className='service_item'>
								<span>
									<div className='top_part'>
										<h4 className='service_title'>Техподдержка</h4>
									</div>
									<div className='bottom_part'>
										<div className='services_number'>04</div>
									</div>
								</span>
							</article>
							<article className='service_item'>
								<span>
									<div className='top_part'>
										<h4 className='service_title'>Дизайн</h4>
									</div>
									<div className='bottom_part'>
										<div className='services_number'>05</div>
									</div>
								</span>
							</article>
						</div>
					</div>
				</div>
			</section>
			<section className='index_contacts index_contacts_light'>
				<div className='wrapper'>
					<h2>
						Оставьте заявку <br /> и мы с Вами свяжемся!
					</h2>
					<form action=''>
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
					</form>
				</div>
			</section>
			{service && (
				<ServiceContainer
					numb={null}
					close={() => setService(false)}
					refs={itemRef}
				>
					{base &&
						base.map((item, id) => (
							<ServiceBody
								key={id}
								title={item.title}
								img={item.background}
								items={item.slide_items}
							/>
						))}
				</ServiceContainer>
			)}
			<Footer />
		</>
	)
}

export default Services
