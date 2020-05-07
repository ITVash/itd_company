import React from "react"

import './style.scss'

const ServiceContainer = props => {
  const { children, numb, close, refs } = props
	return (
		<section className='services_subitem_container' ref={refs}>
			<img src='/img/prev_slide.png' alt='prev' id='prev_slide' />
			<img src='/img/next_slide.png' alt='next' id='next_slide' />
			<img src='/img/close_form.png' alt='Close' id='close_form' onClick={close} />
      <div id='slide_number'>{numb}</div>
      {children}
		</section>
	)
}

export default ServiceContainer
