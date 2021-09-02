// selectors
const showModalBtn = document.querySelector(".show");
const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop");
// const closeBtn = document.querySelector(".close");
// const confirmBtn = document.querySelector(".confirm");
// functions
showModalBtn.addEventListener("click",()=>{
    modal.style.opacity = "1";
    modal.style.transform = "translateY(20vh)";
    backDrop.style.display = "block";
});
function closeModal(){
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)";
    backDrop.style.display = "none";
}
// events
// closeBtn.addEventListener("click",closeModal);
// confirmBtn.addEventListener("click",()=>{
//     closeModal();
//     alert("you have been confirmed the modal !");
// });
backDrop.addEventListener("click",closeModal);

