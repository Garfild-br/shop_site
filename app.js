/*
const btnPlus = document.querySelector('[data-action="plus"]');
const btnMinus = document.querySelector('[data-action="minus"]');
const counter = document.querySelector('[data-counter]');


btnMinus.addEventListener('click', function () {
	console.log ('fuck in shit m');
	
	if (parseInt(counter.innerText) > 1) {
		counter.innerText = --counter.innerText
	}

});

btnPlus.addEventListener('click', function () {
	console.log ('fuck in shit p');
	
	counter.innerText = ++counter.innerText;
});
*/

/*---------------открытие корзины---------------*/

let bascket = document.querySelector('.general_bascket');
let open_bascket = document.querySelector('.open_bascket');
let open_bascket_2 = document.querySelector('.open_bascket_2');
let close_bascket = document.querySelector('.close_bascket');


open_bascket.addEventListener('click', function (event) {
	event.preventDefault();
	bascket.classList.toggle('active');

})

open_bascket_2.addEventListener('click', function (event) {
	event.preventDefault();
	bascket.classList.toggle('active');
})


close_bascket.addEventListener('click', function (event) {
	bascket.classList.remove('active');
})

/*---------------добавление в корзину---------------*/

window.addEventListener('click', function (event) {
	
	let counter;
	   
	if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		const counterWrapper = event.target.closest('.container_2_plus_minus');
		counter = counterWrapper.querySelector('[data-counter]');
	}
	
	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}
	if (event.target.closest('.container_2_bascket') && parseInt(counter.innerText) === 1 )  {
		event.target.closest('.container_2_info').remove();
	}
	
	if (event.target.dataset.action === 'minus') {
		if (parseInt(counter.innerText) > 1) {
		counter.innerText = --counter.innerText;
		} else if (event.target.closest('.container_2_bascket') && parseInt(counter.innerText) === 1){
			event.target.closest('.container_2_info').remove();
			
	
		}
	}
});

/*-------добавление в корзину-------*/

const cartWrapper = document.querySelector('.container_2_bascket');

window.addEventListener('click', function (event) {
	
	
	if (event.target.hasAttribute('data-cart')){
		
		const card = event.target.closest('.container_2_info')
		
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			tittle: card.querySelector('.container_2_tittle').innerText,
			price: card.querySelector('.container_2_price').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};
		
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
		
		if(itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		}else {
		
		
		const cartItemHTML = `<div class="container_2_info" data-id="${productInfo.id}">
								<div class="container_2_img">
									<style type="text/css">
										.container_2_info{
											margin-top: 40px;
											margin-bottom: -60px;
											z-index: 1;
										}
									</style>
									<img class="product-img" src="${productInfo.imgSrc}" alt="#">
								</div>
								<div class="container_2_tittle">
									<p>${productInfo.tittle}</p>
								</div>
								<div class="container_2_text">
									<span>Sed ut perspiciatis, unde omnis 
										iste natus error sit voluptatem accusantium 
									</span>
								</div>
								<div class="container_2_buttons">
									<div class="container_2_plus_minus">
										<div data-action="minus" class="container_2_minus">
											-
										</div>
										
										<div data-counter class="container_2_sum">
											${productInfo.counter}
										</div>
										<div data-action="plus" class="container_2_plus">
											+
										</div>
									</div>
									<div class="container_2_price">
										<p>${productInfo.price}</p>
									</div>
								</div>
							</div>`;
							
							
			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)				
	}
	
		card.querySelector('[data-counter]').innerText = '1';
	

	
		
	}
});


 






