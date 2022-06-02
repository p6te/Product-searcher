const search = document.querySelector('.searcher')
const produkt = document.querySelectorAll('li')



const odczyt = e => {
    const text = e.target.value.toLowerCase();
    console.log(text);

    produkt.forEach(element => {
        const task = element.textContent;
        if(task.toLowerCase().includes(text)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        } 
    });
} 


search.addEventListener('keyup', odczyt)


