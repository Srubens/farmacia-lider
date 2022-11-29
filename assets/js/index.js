$(document).ready(function(){
console.log('ola mundo!')

const myfunction = async() =>{
	const { value: formValues } = await Swal.fire({
		
		html:
		`
		<p>Informe seu nome e email para ganhar 15% de desconto na proxima compra!</p>
			<input id="swal-input1" class="swal2-input" placeholder="nome">
			<input id="swal-input2" class="swal2-input" placeholder="e-mail">
		`,
		confirmButtonText:'Cadastrar',
		focusConfirm: false,
		preConfirm: () => {
			if( document.getElementById('swal-input1').value == "" && document.getElementById('swal-input2').value == "" ){
				return ''
			}else{
				let arr = [
				`Obrigado por se cadastrar o use o cupom #15PORCENT`,
				document.getElementById('swal-input1').value,
				document.getElementById('swal-input2').value
				]
				let result =  arr.toString().replace(",", " ")
				return result
			}
			// document.getElementById('swal-input1').value,
			// document.getElementById('swal-input2').value
		  
		}
	  })
	  if(!formValues || formValues === ""){
		""
	  }else{
		Swal.fire(JSON.stringify(formValues))
	  }
}

window.addEventListener("load", myfunction)

$(window).scroll(()=>{
	if( $(this).scrollTop() > 200 ){
		$('.menu_header').css({
			"background":"#fff"
		})
		$('.menu_header').addClass('fixed-top')
	}else{
		$('.menu_header').removeClass('fixed-top')

	}
	// console.log(window.scrollY)
})

var map = L.map('map').setView([-23.404680, -51.909550], 13);

	var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	var marker = L.marker([-23.404680, -51.909550]).addTo(map);

})