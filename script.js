function highlightLink() {
  let links = document.getElementsByClassName("link");
  for(let link of links){
    link.addEventListener('click', function(){
      let activeNav = document.getElementsByClassName("active")[0];
      activeNav.classList.remove("active");
      this.classList.add('active');
    });
  }
 }
highlightLink();


 window.onscroll = function() {navBarFix()};

 let navbar = document.getElementsByClassName("flex-desk")[0];
 let sticky = navbar.offsetTop;

 function navBarFix() {
   if (window.pageYOffset >= sticky) {
     navbar.classList.add("sticky")
   } else {
     navbar.classList.remove("sticky");
   }
 }

 // function windowResize(){
 //   debugger;
 //   let w = window.innerWidth;
 //   let h = window.innerHeight;
 //   if(w <= 1150){
 //     let div = document.createElement("div");
 //     div.style.display = "flex";
 //     div.style.flexDirection = "column";
 //     div.appendChild(document.getElementsByClassName("project")[0]);
 //     document.getElementById("portfolio").appendChild(div);
 //   }
 // }
 //
 // windowResize();
