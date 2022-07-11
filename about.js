console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	
	alert('form submitted successfully');
}


const giveCompliment = (evt) => {
	evt.preventDefault()
	let comp1 = document.querySelector('#comp-1')
	let comp2 = document.querySelector('#comp-2')
	let comp3 = document.querySelector('#comp-3')

	let compArr = [comp1,comp2,comp3]
	let randomComp = Math.floor(Math.random()* compArr.length)

	let comps = compArr[randomComp]
	console.log(comps)
	alert(comps.textContent)

}	

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseover',giveCompliment)