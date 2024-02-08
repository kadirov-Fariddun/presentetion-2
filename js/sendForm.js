//   обробптываем отправку фрпмы в телеграм
const element = document.getElementById('phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(element, maskOptions);


// const axios = require('axios');
const sendOrderForm = document.querySelector('.form-send');
const token = '6486468186:AAFgOLu5MaYvwBtZo2frWvgR6tJBVYL6-2Y';
const chat_id = '@alfa_dizel_db';//1338153173
const URL = `https://api.telegram.org/bot${token}/sendMessage`;
// const token = '5951322071:AAGPbDQTeHpohM7_-LfOhQWMCRQru08VAGA/';
// const chatId = 'chat_id=1338153173&text='
// let URL = 'https://api.telegram.org/' + token + 'sendMessage?' + chatId;
sendOrderForm.onsubmit = async (e) => {
	e.preventDefault();
	let name = e.target.querySelector('[name="name"]');
	let phone = e.target.querySelector('[name="phone"]');
	let text = e.target.querySelector('[name="text"]');
	let message;
	   message=`<b>Заказ с сайта <i>VERISMA</i>!</b>\n`;
	   message+=`<b>Имя:</b> ${name.value}\n`;
	   message+=`<b>Телефон номер:</b> <i>${phone.value}</i>\n`;
	   message+=`<b>Сообщения:</b> <i>\n${text.value}</i>\n`;
	   axios.post(URL,{
		   chat_id:chat_id,
		   parse_mode:'html',
		   text:message,
	   });
	   e.target.innerHTML = `
	   <div class="send-loader-animation">
	   <h2>Отправка...</h2>
	      <div class="kinetic"></div>
       </div>`;
	   setTimeout(() => {
		e.target.innerHTML = `
		<div class='succes-send-message' style="font-size:16px; display:flex;align-items:center;justify-content:center;
		width:100%;height:500px; column-gap:10px;">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: green;transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path></svg>
			<span>Заявка успешно отправлено</span>
		</div>
		`;
		setTimeout(() => {
			location.reload();
			location.href = '/index.html';
		   }, 1500);
	   }, 3000);
	  
	  
 };

 //loader script 
document.querySelector('body').onload = () => {
	setTimeout(() => {
		document.querySelector('.preloader').style.opacity = 0; 
		setTimeout(() => {
			document.querySelector('.preloader').style.display = 'none'; 
		}, 500);
		
	}, 1500);
}