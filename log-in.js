import {close_form} from './modules/listenersAPI.mjs';  //static import module files

const modal= document.querySelector('.modal');
const close_btn=document.querySelector('.close-btn');

close_btn.addEventListener('click',function(event){
    close_form(event,modal,close_btn);
});