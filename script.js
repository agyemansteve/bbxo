// CONSTANTS ////////////////////////////////////////////////////////////

const section = document.querySelector("section");
// section.style.background="url(images/pinkBrush2.jpg)";
const node = document.querySelector("#section-slide");
// const innserSection = document.querySelector(".section-inner")
const wave = document.querySelector("#divider");
const images = [].slice.call(document.querySelectorAll(".section-img"), 0);
const sectionInners = document.querySelectorAll(".section-div-inner");
const topCards = document.querySelectorAll(".top-card-img");
const fasRow = document.querySelector(".fasRow");
const faMouse = document.querySelector(".fa-mouse");
const faText = document.querySelector(".fa-Text");
const faText2 = document.querySelector(".fa-Text2");
const faChevron = document.querySelector(".fa-chevron-down");

// INTERSECTION oBSERVERs

window.onload = function () {
  // const sectionInnerBodies = document.querySelectorAll(
  //   ".section-div-inner-body"
  // );
  // console.log(images)

  //  section color on load

  section.style.backgroundColor = "#00000012";
  topCards.forEach((card) => {
    card.style.borderColor = "white";
  });

  if (wave !== null) {
    wave.style.color = "white";
  }

  const timeout1 = setTimeout(() => {
    fasRow.style.opacity = 1;
    fasRow.style.height = "50vh";
  }, 2000);

  // const timeout2 = setTimeout(() => {
  //   // fasRow.style.opacity = 1;
  //   fasRow.style.height = "50vh";
  // }, 2500);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          faMouse.style.opacity = 0;
          faChevron.style.opacity = 0;
          faText.style.opacity = 0;

          faText2.style.opacity = 1;
          // document.querySelector(".fas-mouse").style.opacity = "0";
          // entry.target.style.transform = "scale(1)";
          // card.style.borderColor=entry.target.getAttribute("data-color");
          topCards.forEach((card) => {
            card.style.borderColor = entry.target.getAttribute("data-color");
          });

          section.style.backgroundColor =
            entry.target.getAttribute("data-color");

          fasRow.style.backgroundColor =
            entry.target.getAttribute("data-color");

          document.querySelector("#bottom-title").style.color =
            entry.target.getAttribute("data-color");

          if (wave === null) {
            document.querySelector(".row").style.backgroundColor =
              entry.target.getAttribute("data-color");
          } else {
            wave.style.color = entry.target.getAttribute("data-color");
          }
        } else {
          entry.target.style.opacity = 0;
          // entry.target.style.transform = "scale(.65)";
          document.querySelector("#bottom-title").style.color = "#d196c2";
          faMouse.style.opacity = 1;
          faChevron.style.opacity = 1;
          faText.style.opacity = 1;
          faText2.style.opacity = 0;
          // document.querySelector(".fas-mouse").style.opacity = "1";

          // section.style.backgroundColor = ("white");
          // topCards.forEach((card)=>{
          //   card.style.borderColor="white";
          // })
          // wave.style.color = "white";
        }
      });
    },
    {
      threshold: 0.25,
    }
  );

  images.forEach((el, i) => {
    observer.observe(el);
  });

  const cardVids = document.querySelectorAll(".card-vid");
  const logo = document.querySelector(".logo-name");
  // const navContainer= document.querySelector(".nav-container")

  const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // document.querySelector("nav.navbar").style.background="transparent";
          // console.log(entry)
          entry.target.style.opacity = 1;
          // entry.target.style.transform = "scale(.65)";
          // document.querySelector(".logo-name").style.display = "none";
          // document.querySelector(".navbar-nav").style.transform =
          //   "translateX(50%)";

          // navContainer.style.flexDirection="column"

          // section.style.backgroundColor = entry.target.getAttribute("data-color");
          // wave.style.color = entry.target.getAttribute("data-color");
        } else {
          entry.target.style.opacity = 0.5;
          // entry.target.style.transform = "scale(.65)";
          // document.querySelector(".logo-name").style.display = "inline";
          // document.querySelector(".navbar-nav").style.transform =
          //   "translateX(0%)";

          // navContainer.style.flexDirection="row"
        }
      });
    },
    {
      threshold: 0.25,
    }
  );

  cardVids.forEach((el, i) => {
    observer2.observe(el);
  });

  // /////////CARD INNER BODY DIV OBSERVER /////

  // let observercardInnerBodyObserver = new IntersectionObserver(
  //   (entries, cardInnerBodyObserver) => {
  //     entries.forEach((entry) => {
  //       sectionInners.forEach((inner) => {
  //         if (entry.isIntersecting && inner.style.visibility === "visible") {
  //           console.log(entry.target);

  //           // entry.target.style.opacity = "1";
  //           console.log(inner);
  //         } else {
  //           // entry.target.style.opacity = "0";
  //         }
  //       });
  //     });
  //   },
  //   { threshold: 1 }
  // );

  // sectionInnerBodies.forEach((body) => {
  //   observercardInnerBodyObserver.observe(body);
  // });

  /////////////////////////////// Card CLICKS //////////////////////

  images.forEach((img) => {
    img.addEventListener("click", function (event) {
      event.preventDefault();
      faText2.style.display = "none";
      if (this.classList.contains("section-img-active")) {
        sectionInners.forEach((sectionInner) => {
          if (sectionInner === this.children[0]) {
            sectionInner.classList.remove("section-div-inner-active");

            sectionInner.style.visibility = "hidden";
            // document.querySelectorAll(".section-inner").style.height = "265vh";
          }
        });

        this.classList.remove("section-img-active");

        // sectionInners.forEach((sectionInner) => {
        //   if (
        //     sectionInner === this.children[0] &&
        //     sectionInner.classList.containscontains("section-img-active")
        //   ) {
        //     sectionInner.classList.remove("section-img-active");
        //   }
        // });

        node.append(this);
        images.forEach((pic) => {
          pic.style.display = "inline-block";
          pic.style.opacity = "1";
        });
      } else {
        this.classList.add("section-img-active");

        sectionInners.forEach((sectionInner) => {
          if (sectionInner === this.children[0]) {
            sectionInner.style.visibility = "visible";
            // document.querySelectorAll(".section-inner").style.height = "135vh";

            sectionInner.classList.add("section-div-inner-active");
          } else {
            // sectionInner.classList.remove("section-img-active");
          }
        });

        images.forEach((pic) => {
          if (pic !== event.target) {
            pic.style.opacity = "0";
            pic.style.display = "none";
            event.target.style.display = "inline";
          }
        });
      }
    });
  });
};

//  SCROLL FUCNTION

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // const parent = document.querySelector('section');
  // const child = document.querySelector('section-inner');
  // child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";

  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    if (window.innerWidth <= 768) {
      document.querySelector("nav.navbar").style.width = "96%";
      document.querySelector("nav.navbar").style.margin = "auto";
      // document.querySelector("#divider").stlye.fill="white";
    } else {
      document.querySelector("nav.navbar").style.width = "40%";
      document.querySelector(".logo-name").style.fontSize = "18px";
      document.querySelector("nav.navbar").style.background = "transparent ";

      // document.querySelector("#divider").stlye.fill="white"
      document.querySelector("nav.navbar").style.margin = "auto";
      // document.querySelector("#divider").style.color="purple"

      // console.log(document.querySelector("#divider").style.color="yellow")
    }
  } else {
    document.querySelector("nav.navbar").style.width = "100%";
    document.querySelector(".logo-name").style.fontSize = "28px";
    document.querySelector("nav.navbar").style.background = "#000 ";
    // document.querySelector("#divider").style.color="white"
    // document.querySelector(".section-inner").scrollTo({
    //   right: 1000,
    //   behavior: 'smooth'
    // })
    // document.querySelector("#divider").style.height=""
    // document.querySelector("#divider").stlye.fill="black"
  }
}

// const parent = document.querySelector('section');
// const child = document.querySelector('section-inner');
// child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";

// GALLERY SLIDE SHOW

// function showSlides(n) {
//   let i;
//   const slides = document.querySelectorAll(".mySlides");
//   const dots = document.querySelectorAll(".dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   setTimeout(showSlides, 10000);
// }

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(num) {
//   showSlides((slideIndex += num));
// }

// // Thumbnail image controls
// function currentSlide(num) {
//   showSlides((slideIndex = num));
// }
