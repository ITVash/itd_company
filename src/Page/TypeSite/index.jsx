import React, { useState, useEffect, useCallback } from "react"
import { Helmet } from "react-helmet"
import classNames from "classnames"
import Toggle from "react-slide-toggle"

import { Header, Footer } from "../../Component"
import { Clickbait } from '../../Container'

import "./style.scss"

const TypeSite = () => {
	const [check, setCheck] = useState(false)
	const [mobi, setMobi] = useState(false)
	const [desc, setDesc] = useState({
		promo: true,
		is: false,
		sv: false,
		sp: false,
		one: false,
		cs: false,
		lan: false,
		blog: false,
		port: false,
	})

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
	return (
		<>
			<Helmet>
				<title>ITD Company - Типы сайтов</title>
				<meta name='description' content='Страница сайта - Типы сайтов' />
			</Helmet>
			<Header />
			<div className='index_contacts_light'>
				<div className='wrapper'>
					<div className='services_container '>
						<div className='gradient_title'>
							<h2>Типы сайтов</h2>
						</div>
					</div>
				</div>
			</div>
			<div className='index_contacts_light'>
				<div className='wrapper types_site_container'>
					<div className='types'>
						<ul>
							<li
								className={classNames("types_item", { active: desc.promo })}
								onClick={() => {
									setDesc({
										promo: true,
										is: false,
										sv: false,
										sp: false,
										one: false,
										cs: false,
										lan: false,
										blog: false,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t1.png'
													alt=''
													className='type_icon'
												/>
												<p>Промо-сайт</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Промо-сайт</b> — это, как правило, небольшой, но
														яркий веб-сайт, на который сложно не обратить
														внимание.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>- небольшое количество текстового контента;</li>
														<li>
															- яркость восприятия информации за счет
															качественного графического контента;
														</li>
														<li>
															- относительно небольшой срок существования, в
															основном, на время проведения акции или
															мероприятия.
														</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>
															- для крупных компаний, желающих выделить
															какой-либо конкретный товар или услугу, среди
															множества других;
														</li>
														<li>
															- для компаний, которые только начинают свою
															деятельность;
														</li>
														<li>
															- компаниям, которые планируют масштабные
															мероприятия;
														</li>
														<li>
															- компаниям, запускающим сезонные акции и
															распродажи.
														</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/types/Промо/1.jpg' alt='' />
													</a>
													<a href='#'>
														<img src='/types/Промо/2.jpg' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.is })}
								onClick={() => {
									setDesc({
										promo: false,
										is: true,
										sv: false,
										sp: false,
										one: false,
										cs: false,
										lan: false,
										blog: false,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t2.png'
													alt=''
													className='type_icon'
												/>
												<p> Интернет-магазин</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Интернет-магазин</b> - это сайт, позволяющий
														совершать покупки или продажи посредством сети
														интернет.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>- наличие личного кабинета;</li>
														<li>
															- удобство совершения покупок в любом месте и в
															любое время;
														</li>
														<li>- онлайн-оплата;</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>
															- для владельцев стандартизированных товаров и
															услуг;
														</li>
														<li>
															- для компаний, занимающихся традиционной
															розничной коммерцией.
														</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/types/Интернет магазин/1.jpg' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.sv })}
								onClick={() => {
									setDesc({
										promo: false,
										is: false,
										sv: true,
										sp: false,
										one: false,
										cs: false,
										lan: false,
										blog: false,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t3.png'
													alt=''
													className='type_icon'
												/>
												<p>Сайт-визитка</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Сайт-визитка</b> - это электронная «визитная
														карточка» компании или отдельного человека с
														описанием деятельности. Большинство таких сайтов
														состоят из одной или трех страниц.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>
															- краткое содержание и лаконичная презентация;
														</li>
														<li>- индивидуальность;</li>
														<li>
															- не требует значительных финансовых вложений;
														</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>- для индивидуальных предпринимателей;</li>
														<li>
															- для небольших компаний, которые только начинают
															свою деятельность;
														</li>
														<li>
															- для компаний с фиксированным перечнем услуг и
															продукции.
														</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/types/Сайт визитка/1.jpg' alt='' />
													</a>
													<a href='#'>
														<img src='/types/Сайт визитка/2.jpg' alt='' />
													</a>
													<a href='#'>
														<img src='/types/Сайт визитка/3.jpg' alt='' />
													</a>
													<a href='#'>
														<img src='/types/Сайт визитка/4.jpg' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.sp })}
								onClick={() => {
									setDesc({
										promo: false,
										is: false,
										sv: false,
										sp: true,
										one: false,
										cs: false,
										lan: false,
										blog: false,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t4.png'
													alt=''
													className='type_icon'
												/>
												<p>Сайт-портфолио</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Сайт-портфолио</b> - это сайт, на котором
														компания либо отдельный человек, может максимально
														подробно рассказать о своих навыках, наработках или
														талантах.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>- наглядная демонстрация работ и навыков;</li>
														<li>
															- удобство в использовании (больше не нужно носить
															с собой флешку с Вашими работами, достаточно дать
															ссылку на сайт).
														</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>- для людей творческих профессий;</li>
														<li>
															- для людей всех профессий и направленностей.
														</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/types/Сайт портфолио/1.jpg' alt='' />
													</a>
													<a href='#'>
														<img src='/types/Сайт портфолио/2.jpg' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.one })}
								onClick={() => {
									setDesc({
										promo: false,
										is: false,
										sv: false,
										sp: false,
										one: true,
										cs: false,
										lan: false,
										blog: false,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t5.png'
													alt=''
													className='type_icon'
												/>
												<p>Одностраничник</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Одностаничник</b> - это сайт, который состоит из
														одной короткой или длинной страницы, созданный с
														целью продажи товара или услуги.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>- тестирование новой ниши;</li>
														<li>- возможность сбора контактных данных;</li>
														<li>
															- привлечение большего количества людей на сайт.
														</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>- для компаний, продающих товары;</li>
														<li>- для компаний, предоставляющих услуги.</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/types/Одностраничник/1.jpg' alt='' />
													</a>
													<a href='#'>
														<img src='/types/Одностраничник/2.jpg' alt='' />
													</a>
													<a href='#'>
														<img src='/types/Одностраничник/3.jpg' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.cs })}
								onClick={() => {
									setDesc({
										promo: false,
										is: false,
										sv: false,
										sp: false,
										one: false,
										cs: true,
										lan: false,
										blog: false,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t6.png'
													alt=''
													className='type_icon'
												/>
												<p>Корпоративный сайт</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Корпоративный сайт</b> - это качественная и
														полноценная презентация компании в Интернете.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>- формирование и повышение имиджа компании;</li>
														<li>- расширение клиентской и партнерской базы;</li>
														<li>
															- предоставление полной информации о компании;
														</li>
														<li>- привлечение новых сотрудников;</li>
														<li>- хранение и обмен файлов.</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>
															- для компаний, которые хотят привлечь новых
															клиентов;
														</li>
														<li>
															- компаниям, ведущим работу с сотрудниками
															удаленно;
														</li>
														<li>
															- компаниям, продающим свои товары или услуги.
														</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/types/Корпоративный сайт/1.jpg' alt='' />
													</a>
													<a href='#'>
														<img src='/types/Корпоративный сайт/2.jpg' alt='' />
													</a>
													<a href='#'>
														<img src='/types/Корпоративный сайт/3.jpg' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.lan })}
								onClick={() => {
									setDesc({
										promo: false,
										is: false,
										sv: false,
										sp: false,
										one: false,
										cs: false,
										lan: true,
										blog: false,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t7.png'
													alt=''
													className='type_icon'
												/>
												<p>Лендинг</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Landing</b> - это страница сайта, направленная на
														одно целевое действие (покупка товара или услуги,
														скачивание файла или получение контакта заказчика).
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>- повышение эффективности рекламы;</li>
														<li>- одно предложение - одно действие.</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>- организаторам мероприятий;</li>
														<li>- компаниям по продаже товаров и услуг.</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/types/Лендинг/1.jpg' alt='' />
													</a>
													<a href='#'>
														<img src='/types/Лендинг/2.jpg' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.blog })}
								onClick={() => {
									setDesc({
										promo: false,
										is: false,
										sv: false,
										sp: false,
										one: false,
										cs: false,
										lan: false,
										blog: true,
										port: false,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t3.png'
													alt=''
													className='type_icon'
												/>
												<p>Блог</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Блог</b> - это веб-сайт, содержащий постоянно
														обновляемую хронологическую ленту информации.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>
															- возможность публикации отзывов посетителями;
														</li>
														<li>- простота добавления новых записей;</li>
														<li>- большая аудитория.</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>- пользователям по интересам;</li>
														<li>
															- авторам публикаций своих статей или работ;
														</li>
														<li>
															- компаниям, показывающим обзор своих товаров и
															услуг.
														</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/types/Блог/1.jpg' alt='' />
													</a>
													<a href='#'>
														<img src='/types/Блог/2.jpg' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
							<li
								className={classNames("types_item", { active: desc.port })}
								onClick={() => {
									setDesc({
										promo: false,
										is: false,
										sv: false,
										sp: false,
										one: false,
										cs: false,
										lan: false,
										blog: false,
										port: true,
									})
								}}
							>
								<Toggle
									duration={500}
									collapsed
									render={({ toggle, setCollapsibleElement }) => (
										<>
											<div
												className='types_item_header'
												onClick={mobi ? toggle : null}
											>
												<img
													src='/img/Types/t3.png'
													alt=''
													className='type_icon'
												/>
												<p>Портал</p>
											</div>
											<div
												onClick={mobi ? toggle : null}
												className={classNames(
													"type_description",
													"type_description_mobile",
												)}
												ref={setCollapsibleElement}
											>
												<div className='description'>
													<p className='type_is'>
														<b>Портал</b> - это глобальный сайт, в рамках
														которого собраны более мелкие виртуальные проекты,
														работающие как единое целое.
													</p>
													<h3>Особенности</h3>
													<ul>
														<li>
															- удобная и понятная навигация в огромном потоке
															информации;
														</li>
														<li>
															- большие возможности для архивирования и работы с
															информацией в любых доступных форматах;
														</li>
														<li>
															- передача данных между различными приложениями,
															задействованными пользователем в ходе работы на
															портале.
														</li>
													</ul>
													<h3>Для кого</h3>
													<ul>
														<li>
															- компаниям для продвижения бренда или увеличения
															продаж;
														</li>
														<li>
															- для государственных органов (информация о
															внесенных изменениях в законы и т.п.);
														</li>
														<li>- для СМИ (политика, спорт, экономика).</li>
													</ul>
												</div>
												<div className='images'>
													<a href='#'>
														<img src='/types/Портал/1.jpg' alt='' />
													</a>
													<a href='#'>
														<img src='/types/Портал/2.jpg' alt='' />
													</a>
													<a href='#'>
														<img src='/types/Портал/3.jpg' alt='' />
													</a>
												</div>
											</div>
										</>
									)}
								/>
							</li>
						</ul>
						<button id='view_check_list' onClick={() => setCheck(true)}>
							Заполнить чек-лист
						</button>
					</div>
					<div id='type_description_container'>
						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.promo },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Промо-сайт</b> — это, как правило, небольшой, но яркий
									веб-сайт, на который сложно не обратить внимание.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>- небольшое количество текстового контента;</li>
									<li>
										- яркость восприятия информации за счет качественного
										графического контента;
									</li>
									<li>
										- относительно небольшой срок существования, в основном, на
										время проведения акции или мероприятия.
									</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>
										- для крупных компаний, желающих выделить какой-либо
										конкретный товар или услугу, среди множества других;
									</li>
									<li>
										- для компаний, которые только начинают свою деятельность;
									</li>
									<li>
										- компаниям, которые планируют масштабные мероприятия;
									</li>
									<li>- компаниям, запускающим сезонные акции и распродажи.</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/types/Промо/1.jpg' alt='' />
								</a>
								<a href='#'>
									<img src='/types/Промо/2.jpg' alt='' />
								</a>			
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.is },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Интернет-магазин</b> - это сайт, позволяющий совершать
									покупки или продажи посредством сети интернет.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>- наличие личного кабинета;</li>
									<li>
										- удобство совершения покупок в любом месте и в любое время;
									</li>
									<li>- онлайн-оплата;</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>- для владельцев стандартизированных товаров и услуг;</li>
									<li>
										- для компаний, занимающихся традиционной розничной
										коммерцией.
									</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/types/Интернет магазин/1.jpg' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.sv },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Сайт-визитка</b> - это электронная «визитная карточка»
									компании или отдельного человека с описанием деятельности.
									Большинство таких сайтов состоят из одной или трех страниц.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>- краткое содержание и лаконичная презентация;</li>
									<li>- индивидуальность;</li>
									<li>- не требует значительных финансовых вложений;</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>- для индивидуальных предпринимателей;</li>
									<li>
										- для небольших компаний, которые только начинают свою
										деятельность;
									</li>
									<li>
										- для компаний с фиксированным перечнем услуг и продукции.
									</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/types/Сайт визитка/1.jpg' alt='' />
								</a>
								<a href='#'>
									<img src='/types/Сайт визитка/2.jpg' alt='' />
								</a>
								<a href='#'>
									<img src='/types/Сайт визитка/3.jpg' alt='' />
								</a>
								<a href='#'>
									<img src='/types/Сайт визитка/4.jpg' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.sp },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Сайт-портфолио</b> - это сайт, на котором компания либо
									отдельный человек, может максимально подробно рассказать о
									своих навыках, наработках или талантах.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>- наглядная демонстрация работ и навыков;</li>
									<li>
										- удобство в использовании (больше не нужно носить с собой
										флешку с Вашими работами, достаточно дать ссылку на сайт).
									</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>- для людей творческих профессий;</li>
									<li>- для людей всех профессий и направленностей.</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/types/Сайт портфолио/1.jpg' alt='' />
								</a>
								<a href='#'>
									<img src='/types/Сайт портфолио/2.jpg' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.one },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Одностаничник</b> - это сайт, который состоит из одной
									короткой или длинной страницы, созданный с целью продажи
									товара или услуги.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>- тестирование новой ниши;</li>
									<li>- возможность сбора контактных данных;</li>
									<li>- привлечение большего количества людей на сайт.</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>- для компаний, продающих товары;</li>
									<li>- для компаний, предоставляющих услуги.</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/types/Одностраничник/1.jpg' alt='' />
								</a>
								<a href='#'>
									<img src='/types/Одностраничник/2.jpg' alt='' />
								</a>
								<a href='#'>
									<img src='/types/Одностраничник/3.jpg' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.cs },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Корпоративный сайт</b> - это качественная и полноценная
									презентация компании в Интернете.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>- формирование и повышение имиджа компании;</li>
									<li>- расширение клиентской и партнерской базы;</li>
									<li>- предоставление полной информации о компании;</li>
									<li>- привлечение новых сотрудников;</li>
									<li>- хранение и обмен файлов.</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>
										- для компаний, которые хотят привлечь новых клиентов;
									</li>
									<li>- компаниям, ведущим работу с сотрудниками удаленно;</li>
									<li>- компаниям, продающим свои товары или услуги.</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/types/Корпоративный сайт/1.jpg' alt='' />
								</a>
								<a href='#'>
									<img src='/types/Корпоративный сайт/2.jpg' alt='' />
								</a>
								<a href='#'>
									<img src='/types/Корпоративный сайт/3.jpg' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.lan },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Landing</b> - это страница сайта, направленная на одно
									целевое действие (покупка товара или услуги, скачивание файла
									или получение контакта заказчика).
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>- повышение эффективности рекламы;</li>
									<li>- одно предложение - одно действие.</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>- организаторам мероприятий;</li>
									<li>- компаниям по продаже товаров и услуг.</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/types/Лендинг/1.jpg' alt='' />
								</a>
								<a href='#'>
									<img src='/types/Лендинг/2.jpg' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.blog },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Блог</b> - это веб-сайт, содержащий постоянно обновляемую
									хронологическую ленту информации.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>- возможность публикации отзывов посетителями;</li>
									<li>- простота добавления новых записей;</li>
									<li>- большая аудитория.</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>- пользователям по интересам;</li>
									<li>- авторам публикаций своих статей или работ;</li>
									<li>
										- компаниям, показывающим обзор своих товаров и услуг.
									</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/types/Блог/1.jpg' alt='' />
								</a>
								<a href='#'>
									<img src='/types/Блог/2.jpg' alt='' />
								</a>
							</div>
						</div>

						<div
							className={classNames(
								"type_description",
								"type_description_mobile",
								{ active: desc.port },
							)}
						>
							<div className='description'>
								<p className='type_is'>
									<b>Портал</b> - это глобальный сайт, в рамках которого собраны
									более мелкие виртуальные проекты, работающие как единое целое.
								</p>
								<h3>Особенности</h3>
								<ul>
									<li>
										- удобная и понятная навигация в огромном потоке информации;
									</li>
									<li>
										- большие возможности для архивирования и работы с
										информацией в любых доступных форматах;
									</li>
									<li>
										- передача данных между различными приложениями,
										задействованными пользователем в ходе работы на портале.
									</li>
								</ul>
								<h3>Для кого</h3>
								<ul>
									<li>
										- компаниям для продвижения бренда или увеличения продаж;
									</li>
									<li>
										- для государственных органов (информация о внесенных
										изменениях в законы и т.п.);
									</li>
									<li>- для СМИ (политика, спорт, экономика).</li>
								</ul>
							</div>
							<div className='images'>
								<a href='#'>
									<img src='/types/Портал/1.jpg' alt='' />
								</a>
								<a href='#'>
									<img src='/types/Портал/2.jpg' alt='' />
								</a>
								<a href='#'>
									<img src='/types/Портал/3.jpg' alt='' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{check && (
				<Clickbait setCheck={setCheck} />
			)}
			<Footer />
		</>
	)
}

export default TypeSite
