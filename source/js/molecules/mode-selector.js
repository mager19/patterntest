function openModeSelector(){
	const lightbox = document.querySelector('.selector-modalidad')
	lightbox.style.display = 'flex'
	setTimeout(function(){
		lightbox.classList.add('activo')
	}, 10)
}
function closeModeSelector(){
		const lightbox = document.querySelector('.selector-modalidad')
		lightbox.classList.remove('activo')
		lightbox.addEventListener('transitionend', hideLightbox)
}
function hideLightbox(){
	const lightbox = document.querySelector('.selector-modalidad')
	lightbox.style.display = 'none'
	lightbox.removeEventListener('transitionend', hideLightbox, false)
}