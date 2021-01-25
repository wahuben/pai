const imie = document.getElementById('imie');
const email = document.getElementById('email');
const nazwisko = document.getElementById('nazwisko');
const haslo = document.getElementById('haslo');
const blad = document.getElementById('blad');
const powhaslo = document.getElementById('powhaslo');
const checkbox = document.getElementById('checkbox');
const form = document.getElementById('form');

form.addEventListener("click", (e) => {
    let messages = [];
        if(imie.value === '' || imie.value == null){
            messages.push("bledne imie");
        } else {
            imie.style.border = "1px solid #00ff00";
        }
        
        if(nazwisko.value === '' || nazwisko.value == null || imie.value == nazwisko.value){
            messages.push("bledne nazwisko");
            } else{
                nazwisko.style.border = "1px solid #00ff00";            
            }

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email.value)){
            email.style.border = "1px solid #00ff00";
            } else{
                messages.push("bledny mail");
            }

        if(haslo.value.length < 3 || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(form.haslo.value)){
            messages.push("bledne haslo");
            } else{
                haslo.style.border = "1px solid #00ff00";
            }

        if(haslo.value != powhaslo.value || powhaslo.value === '' || powhaslo.value == null){
            messages.push("haslo nie zgadza sie");
            } else{
                powhaslo.style.border = "1px solid #00ff00";
            }
        
        if(checkbox.checked ) { 
            return true;
            } else{
                messages.push("Zaakceptuj the Terms of Use & Privacy Policy!");
            }

        if(messages.length >= 1 ){
            e.preventDefault();
                blad.innerText = messages.join(', ');
        } else {
            alert("validation ok");
        }
});