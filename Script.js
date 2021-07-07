//---menu show--
const showMenu=(toggleId,navId)=>{
	const toggle=document.getElementById(toggleId),
	nav=document.getElementById(navId)

	if (toggle&&nav){
		toggle.addEventListener('click',()=>{
			nav.classList.toggle('show')
		})
	}
}
showMenu('nav-toggle','nav-menu')
//----active and remove menu----
const navlink=document.querySelectorAll('.nav-link')

function linkAction(){
	// active link
	navlink.forEach(n=>n.classList.remove('active'))
	this.classList.add('active')
	//remove menu for mobile
	const navMenu=document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}
navlink.forEach(n=>n.addEventListener('click',linkAction))
//-------scroll reveal animation---
const sr=ScrollReveal({
	origin:'top',
	distance:'80px',
	duration:'2000',
	reset:true
})
//-----scroll home--
sr.reveal('.home-title',{})
sr.reveal('.home-extra',{delay:100})
sr.reveal('.button',{delay:200})
sr.reveal('.home-img',{delay:400})
sr.reveal('.home-social-icon',{interval:200})

//-----scroll about--
sr.reveal('.about-img',{})
sr.reveal('.about-subtitle',{delay:200})
sr.reveal('.about-text',{delay:400})


//-----scroll skills--
sr.reveal('.skills-subtitle',{})
sr.reveal('.skills-text',{delay:200})
sr.reveal('.skills-data',{interval:200})
sr.reveal('.skills-img',{delay:400})


//-----scroll services--
sr.reveal('.box',{interval:200})

//------scroll portfolio---
sr.reveal('.portfolio-img',{interval:200})

//-----scroll phone-mail--
sr.reveal('.call',{interval:200})

//------scroll blog-----
sr.reveal('.slider-box',{interval:200})
//-----scroll contact--
sr.reveal('.contact-input',{interval:200})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');
tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target);
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove('qualification__active');
		});
		target.classList.add('qualification__active');
		tabs.forEach((tab) => {
			tab.classList.remove('qualification__active');
		});
		tab.classList.add('qualification__active');
	});
});
