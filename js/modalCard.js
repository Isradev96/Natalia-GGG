const popupViews = document.querySelectorAll('.popup-view');
const popupBtns = document.querySelectorAll('.popup-btn');
const closeBtns = document.querySelectorAll('.clouse-btn-popup');


//javascript para abrir modal de las cards de galeria

const popup = function(popupClick){
    popupViews[popupClick].classList.add('open-modal-card');
}

popupBtns.forEach((popupBtn, i) =>{
    popupBtn.addEventListener("click", () =>{
        popup(i);
    });
});

//javascript para cerrar el modal

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('open-modal-card');
        });
    });
});