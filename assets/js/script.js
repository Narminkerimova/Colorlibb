const colorlib_rezume=document.querySelector(".colorlib_rezume")
const rezume_nav=document.querySelector(".rezume_nav")
const remove_button=document.querySelector(".remove_button")
const colorlib_nav=document.querySelector(".colorlib_nav")
const main_nav=document.querySelector(".main_nav")
const menu_nav=document.querySelector(".menu_nav")
const menu_btn=document.getElementById("menu_btn")

colorlib_rezume.addEventListener("click",function(){
    rezume_nav.classList.toggle("rezume_hidden")
})
remove_button.addEventListener("click",function(){
    colorlib_nav.classList.add("colorlib_hidden")
    main_nav.style.marginTop=("0vh")
    menu_nav.style.marginTop=("10vh")
})
menu_btn.addEventListener("click",function(){
    menu_nav.classList.toggle("hidden_menu")
})