"use strict"

function Choose1() {
document.querySelector('.n2').classList.remove('purple');
document.querySelector('.n3').classList.remove('purple');
document.querySelector('.n4').classList.remove('purple');
document.querySelector('.n1').classList.add('purple');

document.querySelector('.block__textblock2').classList.add('hidden')
document.querySelector('.block__textblock3').classList.add('hidden')
document.querySelector('.block__textblock4').classList.add('hidden')
document.querySelector('.block__textblock1').classList.remove('hidden')

document.querySelector('.i2').classList.add('hidden')
document.querySelector('.i3').classList.add('hidden')
document.querySelector('.i4').classList.add('hidden')
document.querySelector('.i1').classList.remove('hidden')
}
function Choose2() {
	document.querySelector('.n1').classList.remove('purple');
	document.querySelector('.n3').classList.remove('purple');
	document.querySelector('.n4').classList.remove('purple');
	document.querySelector('.n2').classList.add('purple');

document.querySelector('.block__textblock1').classList.add('hidden')
document.querySelector('.block__textblock3').classList.add('hidden')
document.querySelector('.block__textblock4').classList.add('hidden')
document.querySelector('.block__textblock2').classList.remove('hidden')

document.querySelector('.i1').classList.add('hidden')
document.querySelector('.i3').classList.add('hidden')
document.querySelector('.i4').classList.add('hidden')
document.querySelector('.i2').classList.remove('hidden')
}
function Choose3() {
	document.querySelector('.n1').classList.remove('purple');
	document.querySelector('.n2').classList.remove('purple');
	document.querySelector('.n4').classList.remove('purple');
	document.querySelector('.n3').classList.add('purple');

document.querySelector('.block__textblock1').classList.add('hidden')
document.querySelector('.block__textblock2').classList.add('hidden')
document.querySelector('.block__textblock4').classList.add('hidden')
document.querySelector('.block__textblock3').classList.remove('hidden')

document.querySelector('.i1').classList.add('hidden')
document.querySelector('.i2').classList.add('hidden')
document.querySelector('.i4').classList.add('hidden')
document.querySelector('.i3').classList.remove('hidden')
}
function Choose4() {
	document.querySelector('.n1').classList.remove('purple');
	document.querySelector('.n2').classList.remove('purple');
	document.querySelector('.n3').classList.remove('purple');
	document.querySelector('.n4').classList.add('purple');

document.querySelector('.block__textblock1').classList.add('hidden')
document.querySelector('.block__textblock2').classList.add('hidden')
document.querySelector('.block__textblock3').classList.add('hidden')
document.querySelector('.block__textblock4').classList.remove('hidden')

document.querySelector('.i1').classList.add('hidden')
document.querySelector('.i2').classList.add('hidden')
document.querySelector('.i3').classList.add('hidden')
document.querySelector('.i4').classList.remove('hidden')
}