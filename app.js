let element_choice_1 = document.getElementById('choice_1');
let element_choice_2 = document.getElementById('choice_2');
let element_choice_3 = document.getElementById('choice_3');
let element_choice_4 = document.getElementById('choice_4');

document.querySelector('#choice_1').addEventListener('click', function() {
	element_choice_2.classList.add('choice_text_hover');
	element_choice_2.classList.remove('choice_text_selected');
	element_choice_3.classList.add('choice_text_hover');
	element_choice_3.classList.remove('choice_text_selected');
	element_choice_4.classList.add('choice_text_hover');
	element_choice_4.classList.remove('choice_text_selected');
	element_choice_1.classList.remove('choice_text_hover');
	element_choice_1.classList.add('choice_text_selected');
});

document.querySelector('#choice_2').addEventListener('click', function() {
	element_choice_1.classList.add('choice_text_hover');
	element_choice_1.classList.remove('choice_text_selected');
	element_choice_3.classList.add('choice_text_hover');
	element_choice_3.classList.remove('choice_text_selected');
	element_choice_4.classList.add('choice_text_hover');
	element_choice_4.classList.remove('choice_text_selected');
	element_choice_2.classList.remove('choice_text_hover');
	element_choice_2.classList.add('choice_text_selected');
});

document.querySelector('#choice_3').addEventListener('click', function() {
	element_choice_1.classList.add('choice_text_hover');
	element_choice_1.classList.remove('choice_text_selected');
	element_choice_2.classList.add('choice_text_hover');
	element_choice_2.classList.remove('choice_text_selected');
	element_choice_4.classList.add('choice_text_hover');
	element_choice_4.classList.remove('choice_text_selected');
	element_choice_3.classList.remove('choice_text_hover');
	element_choice_3.classList.add('choice_text_selected');
});

document.querySelector('#choice_4').addEventListener('click', function() {
	element_choice_1.classList.add('choice_text_hover');
	element_choice_1.classList.remove('choice_text_selected');
	element_choice_2.classList.add('choice_text_hover');
	element_choice_2.classList.remove('choice_text_selected');
	element_choice_3.classList.add('choice_text_hover');
	element_choice_3.classList.remove('choice_text_selected');
	element_choice_4.classList.remove('choice_text_hover');
	element_choice_4.classList.add('choice_text_selected');
});
