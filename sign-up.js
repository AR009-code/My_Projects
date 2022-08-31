import { close_form } from "./modules/listenersAPI.mjs";

const click_btn= document.querySelector('#click-me');
const modal= document.querySelector('.modal');
const close_btn=document.querySelector('.close-btn');
const cancel_btn=document.querySelector('.cancel-btn');

click_btn.addEventListener('click',function(event){
    modal.style.display='block';
});

close_btn.addEventListener('click',function(event){
    close_form(event,modal,close_btn);
});

cancel_btn.addEventListener('click',function(event){
    close_form(event,modal,cancel_btn);
})