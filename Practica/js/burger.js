let menuBtn = document.querySelector('.menu-btn');
let menu__adaptive = document.querySelector('.menu__adaptive');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu__adaptive.classList.toggle('active');
})
