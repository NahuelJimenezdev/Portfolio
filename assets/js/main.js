/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


//   || Typewriting Hero Heading

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const text = ["Desarrollador FullStack", "Autodidacta", "Responsable"]
const delay = {
  typing: 100,
  erasing: 70,
  newText: 2000
}
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < text[textIndex].length) {
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedText.textContent += text[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, delay.typing);
  } else {
    cursor.classList.remove("typing");
    setTimeout(erase, delay.newText);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedText.textContent = text[textIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, delay.erasing);
  } else {
    cursor.classList.remove("typing");
    textIndex++;
    if(textIndex >= text.length) textIndex = 0;
    setTimeout(type, delay.typing + 1100)
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (text.length) {
    setTimeout(type, delay.newText + 250);
  }
})



/*Formulario*/
document.querySelector('#hablemos').addEventListener('click', function() {
    
  let nombreInteresado = document.getElementById('full-name').value;
  console.log(nombreInteresado);
  let asuntoMensaje = document.getElementById('asunto').value;
  console.log(asuntoMensaje);
  let mensaje = document.getElementById('message').value;
  console.log(asuntoMensaje);

  let url = "https://api.whatsapp.com/send?phone=5491166582695&text=*_Nombre:_* " + nombreInteresado + ", *_Asunto_*: " + asuntoMensaje + ", *_Mensaje_*: " + mensaje;

  window.open(url);
})
