import nodemailer from 'nodemailer'

const Sender = async values => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "vashdns@gmail.com",
      pass: "ragnarok1985"
    }
  })

  await transport.sendMail({
    from: "robot@itd.company",
    to: "vashdns@gmail.com",
    subject: "Обратная связь с сайта",
    text: `${values.text}`,
    html: `<p>Имя отправителя: ${values.name}</p>
    <p>Телефон отправителя: ${values.phone}</p>
    <p>Почта отправителя: ${values.email}</p>
    <p>Сообщение: <br /> ${values.text}</p>`
  }, (error, info) => {
      if (error) {
        console.log('Ошибка отправки почты!', error)
      } else {
        console.log('Почта отправлена!', info)
      }
  })
}

export default Sender