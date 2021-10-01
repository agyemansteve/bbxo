
    // INTERSECTION oBSERVER

    window.onload = function (){

    
    






  // CONSTANTS ////////////////////////////////////////////////////////////



      const section = document.querySelector("section");
      // section.style.background="url(images/pinkBrush2.jpg)";
    const node = document.querySelector("#section-slide")
      // const innserSection = document.querySelector(".section-inner")
      const wave = document.querySelector("#divider");
      const images = [].slice.call(document.querySelectorAll(".section-img"),0)
      const topCards = document.querySelectorAll(".top-card-img")
    // console.log(images)





  //  section color on load

    section.style.backgroundColor = ("white");
            topCards.forEach((card)=>{
              card.style.borderColor="white";
            })
            wave.style.color = "white";




    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            // entry.target.style.transform = "scale(1)";


            // card.style.borderColor=entry.target.getAttribute("data-color");
              topCards.forEach((card)=>{
                card.style.borderColor=entry.target.getAttribute("data-color");
              })

            section.style.backgroundColor = entry.target.getAttribute("data-color");
            wave.style.color = entry.target.getAttribute("data-color");
          } else {
            entry.target.style.opacity = 0;
            // entry.target.style.transform = "scale(.65)";

            // section.style.backgroundColor = ("white");
            // topCards.forEach((card)=>{
            //   card.style.borderColor="white";
            // })
            // wave.style.color = "white";
          }
        });
      },
      {
        threshold: 0.25
      }
    );

    images.forEach((el, i) => {
      observer.observe(el);
    });


    const cardVids = document.querySelectorAll(".card-vid")
    const logo = document.querySelector(".logo-name");
    // const navContainer= document.querySelector(".nav-container")



    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

        

          if (entry.isIntersecting) {
            // document.querySelector("nav.navbar").style.background="transparent";
            // console.log(entry)
            entry.target.style.opacity = 1;
            entry.target.style.transform = "scale(1)";
            document.querySelector(".logo-name").style.display="none";
            document.querySelector(".navbar-nav").style.transform="translateX(-51%)";





            // navContainer.style.flexDirection="column"


            // section.style.backgroundColor = entry.target.getAttribute("data-color");
            // wave.style.color = entry.target.getAttribute("data-color");
          } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = "scale(.65)";
            document.querySelector(".logo-name").style.display="inline";
            document.querySelector(".navbar-nav").style.transform="translateX(0%)";



            // navContainer.style.flexDirection="row"
          }
        });
      },
      {
        threshold: .25
      }
    );

    cardVids.forEach((el, i) => {
      observer2.observe(el);
    });



    /////////////////////////////// Card CLICKS //////////////////////


    

    images.forEach((img)=>{

    
      img.addEventListener("click", function(event){
        event.preventDefault()

      

          if (this.classList.contains('section-img-active'))
          {
                  this.classList.remove("section-img-active");
                  // this.classList.add("section-img-hide");
                  node.append(this);
                  images.forEach((pic)=>
                      {
                        pic.style.display="inline"
                        pic.style.opacity="1";
                      })
            }
              else{
                  
                this.classList.add('section-img-active');

                images.forEach((pic)=>
                    {
                    if(pic !== event.target)
                              {
                                pic.style.opacity="0";
                                pic.style.display="none";
                                event.target.style.display="inline"; 
                              }
                })
              }

        
      });



    })



    }

    // 




    // function changeOnClick(event,h,w){
    //   event.preventDefault()
    //     // alert("Clicked")
    //     // console.log(event.target)
    //     event.target.style.height=h
    //     event.target.style.width=w



    // }







    //  SCROLL FUCNTION 








    window.onscroll = function() {scrollFunction()};







    function scrollFunction() {


      // const parent = document.querySelector('section');
      // const child = document.querySelector('section-inner');
      // child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";





      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        if(window.innerWidth <= 768){
          document.querySelector("nav.navbar").style.width = "83%"; 
          document.querySelector("nav.navbar").style.margin = "auto";
          // document.querySelector("#divider").stlye.fill="white";
          
        }else{
          document.querySelector("nav.navbar").style.width = "35%";
          // document.querySelector("nav.navbar").style.background="white"
          
          // document.querySelector("#divider").stlye.fill="white"
        document.querySelector("nav.navbar").style.margin = "auto";
        // document.querySelector("#divider").style.color="purple"

        // console.log(document.querySelector("#divider").style.color="yellow")
        }
        
        
      } else {
        document.querySelector("nav.navbar").style.width = "100%";
        // document.querySelector("nav.navbar").style.background="transparent"
        // document.querySelector("#divider").style.color="white"
        // document.querySelector(".section-inner").scrollTo({
        //   right: 1000,
        //   behavior: 'smooth'
        // })
        // document.querySelector("#divider").style.height=""
        // document.querySelector("#divider").stlye.fill="black"
        
      }
    }

    const parent = document.querySelector('section');
    const child = document.querySelector('section-inner');
    child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";





    // GALLERY SLIDE SHOW

    function showSlides(n) {
      let i;
      const slides = document.querySelectorAll(".mySlides");
      const dots = document.querySelectorAll(".dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}  

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 10000); 
    }

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(num) {
      showSlides(slideIndex += num);
    }

    // Thumbnail image controls
    function currentSlide(num) {
      showSlides(slideIndex = num);
    }


      
  