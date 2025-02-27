

// SliderSection


const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");
const header_h2 = document.querySelector(".header-h2")
const active = document.querySelector(".active header-h2")

let slideIndex = 0;

slides[slideIndex].classList.add('active');

prevBtn.addEventListener('click', () => {
    console.log("prev");
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex === 0) ? (slides.length - 1) : slideIndex - 1;
    slides[slideIndex].classList.add("active");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`

})

nextBtn.addEventListener('click', () => {
    console.log("next");
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
    slides[slideIndex].classList.add("active");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`
})


// About Us


const menu_items = document.querySelectorAll(".menu_item")
const lists = document.querySelectorAll(".nacc li");

console.log(menu_items);
console.log(lists);

let menu_index = 0;

menu_items[menu_index].classList.add("activee");

menu_items[0].addEventListener("click",()=>
{
    menu_items[menu_index].classList.remove("activee");
    lists[menu_index].classList.remove("visible");
    menu_index = 0;
    menu_items[menu_index].classList.add("activee");
    lists[0].classList.add("visible");
})
menu_items[1].addEventListener("click",()=>
{   
    menu_items[menu_index].classList.remove("activee");
    lists[menu_index].classList.remove("visible");
    menu_index = 1;
    menu_items[menu_index].classList.add("activee");
    lists[1].classList.add("visible");
})
menu_items[2].addEventListener("click",()=>
{
    menu_items[menu_index].classList.remove("activee");
    lists[menu_index].classList.remove("visible");
    menu_index = 2;
    menu_items[menu_index].classList.add("activee");
    lists[2].classList.add("visible");
})


// Testimonial


const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot")

let dot_index = 0;
items[dot_index].classList.add("active");
dots[dot_index].classList.add("active");

dots[0].addEventListener("click",()=>
{
    dots[dot_index].classList.remove("active");
    items[dot_index].classList.remove("active");
    dot_index=0;
    dots[0].classList.add("active")
    items[0].classList.add("active");
    items.forEach((item,index)=>
    {
        item.style.transform = `translateX(-${dot_index*100}%)`;
    })
    
    console.log(dot_index);
})
dots[1].addEventListener("click",()=>
{
    dots[dot_index].classList.remove("active");
    items[dot_index].classList.remove("active");
    dot_index=1;
    dots[1].classList.add("active")
    items[1].classList.add("active");
    items.forEach((item,index) =>
        {
            item.style.transform = `translateX(-${dot_index*100}%)`;
        })
    console.log(dot_index);
})
dots[2].addEventListener("click",()=>
{
    dots[dot_index].classList.remove("active");
    items[dot_index].classList.remove("active");
    dot_index=2;
    dots[2].classList.add("active")
    items[2].classList.add("active");
    items.forEach((item,index)=>
        {
            item.style.transform = `translateX(-${dot_index*100}%)`;
        })
    console.log(dot_index);
})


// Navbar DropdownS


const menu_bar = document.querySelector(".menu_bar");
const menu_line = document.querySelectorAll(".menu_line")
const dropdown = document.querySelector(".dropdown")

menu_bar.addEventListener("click",()=>
{
    dropdown.classList.toggle("true");
})
