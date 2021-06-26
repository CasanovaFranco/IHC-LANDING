let abrir =document.getElementById('open');
let menu=document.getElementById('menu');
let cerrado=false;
abrir.addEventListener('click',apertura);
function apertura(){
    if (cerrado){
        menu.style.width='70vw';
        cerrado=false;
    }
    else{
        menu.style.width="0%";
        menu.style.overflow='hidden';
        cerrado=true;
    }
}
window.addEventListener('revize',res);
function res(){
    if(screen.width>700)
    {
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
}
