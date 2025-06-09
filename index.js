const openModal = document.getElementById("open-modal");
const overlay = document.getElementById("overlay");
const closeModal = document.getElementById("close-modal");
openModal.addEventListener('click', function(){
    overlay.style.display = "block"
})

closeModal.addEventListener('click', function(){
    overlay.style.display = "none";
})