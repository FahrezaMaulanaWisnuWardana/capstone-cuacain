const listTime = document.querySelectorAll('li');
const timeHour = document.querySelector('p.jam');

listTime.forEach( item => {
    item.addEventListener('click', () => {
        listTime.forEach( el => {
            if(el.classList.contains('active')){
                el.classList.remove('active');
            }
        })
        item.classList.add('active');
    })
})

const getTime = () => {
    const hour = new Date().getHours();
    timeHour.innerText = `${hour}.00`;
}

getTime();