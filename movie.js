const arrows = document.querySelectorAll(".arrow");

const movielist = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i) =>{
   const itemNumber = movielist[i].querySelectorAll("img").length;
   let clickCounter = 0 ;
   arrow.addEventListener("click" , () => {
      clickCounter++ ;
      if(itemNumber - (4+clickCounter)>=0){
         movielist[i].style.transform = `translateX(${movielist[i].computedStyleMap().get("transform")[0].x.value -300}px)`;

      }
      else{
         movielist[i].style.transform = `translateX(0)`
         clickCounter = 0 ;
      }
      // movielist[i].style.transform = `translateX(${movielist[i].computedStyleMap().get("transform")[0].x.value -300}px)`;
   })
   
})



const ball = document.querySelector(".toggle-ball");
const item = document.querySelectorAll(".container, .movie-title-list, .navbar-container, .sitebar,.left-menu-icon,.toggle");

ball.addEventListener("click",()=>{
   item.forEach(item=>{
      item.classList.toggle("active")
   });
   ball.classList.toggle("active")
})

