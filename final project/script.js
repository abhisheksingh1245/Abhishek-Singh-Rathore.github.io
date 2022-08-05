AOS.init({
    duration: 3000,
});

function social() {
    location.href = "https://www.instagram.com/abhishek_singh1245/";
}

const numb = document.querySelector(".key");
let counter = 0;
setInterval(() => {
  if(counter == 0){
    clearInterval();
  }else{
    counter+=1;
    numb.textContent = counter + "%";
  }
}, 90);