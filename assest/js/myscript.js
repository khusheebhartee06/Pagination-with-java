const galleryItems = document.querySelector('.gallery-items').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const pageNo = document.querySelector('.page-no');
let maxItem = 3;
let index = 1;
let pagination=galleryItems.length/maxItem

prev.addEventListener('click', () => {
    index--;
    disabled()
    showItems()
})
next.addEventListener('click', () => {
    index++;
    disabled()
    showItems()
})
function disabled() {
    if (index == 1) {
        prev.classList.add('disabled')
    }
   else{
        prev.classList.remove('disabled')
    }
    if (index == 3) {
        next.classList.add('disabled')
    }
   else{
        next.classList.remove('disabled')
    }
}
function showItems() {
    for (let i = 0; i < galleryItems.length; i++){
        galleryItems[i].classList.add('hide');
        galleryItems[i].classList.remove('show');
        if (i >= (index * maxItem) - maxItem && i < index * maxItem) {
            galleryItems[i].classList.add('show');
            galleryItems[i].classList.remove('hide');
            
        }
        pageNo.innerHTML = index;
    }
}
window.onload = () => {
    showItems();
    disabled()
}