function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // --- SETUP START ---
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.defaults({ scroller: "#main" });
  // --- SETUP END ---

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function scrollUpText() {
  document
  .querySelector(".scroll-up-head1")
  .addEventListener("mouseenter", function () {
    gsap.to(".scroll-up-head1 h3", {
      y: -62,
      duration: 0.4,
    });
  });

document
  .querySelector(".scroll-up-head1")
  .addEventListener("mouseleave", function () {
    gsap.to(".scroll-up-head1 h3", {
      y: 0,
      duration: 0.4,
    });
  });

document
  .querySelector(".scroll-up-head2")
  .addEventListener("mouseenter", function () {
    gsap.to(".scroll-up-head2 h3", {
      y: -63,
      duration: 0.4,
    });
  });

document
  .querySelector(".scroll-up-head2")
  .addEventListener("mouseleave", function () {
    gsap.to(".scroll-up-head2 h3", {
      y: 0,
      duration: 0.4,
    });
  });

document
  .querySelector(".scroll-up-head3")
  .addEventListener("mouseenter", function () {
    gsap.to(".scroll-up-head3 h3", {
      y: -62,
      duration: 0.4,
    });
  });

document
  .querySelector(".scroll-up-head3")
  .addEventListener("mouseleave", function () {
    gsap.to(".scroll-up-head3 h3", {
      y: 0,
      duration: 0.4,
    });
  });

document
  .querySelector(".scroll-up-head4")
  .addEventListener("mouseenter", function () {
    gsap.to(".scroll-up-head4 h3", {
      y: -62,
      duration: 0.4,
    });
  });

document
  .querySelector(".scroll-up-head4")
  .addEventListener("mouseleave", function () {
    gsap.to(".scroll-up-head4 h3", {
      y: 0,
      duration: 0.4,
    });
  });

document
  .querySelector(".scroll-up-head5")
  .addEventListener("mouseenter", function () {
    gsap.to(".scroll-up-head5 h3", {
      y: -62,
      duration: 0.4,
    });
  });

document
  .querySelector(".scroll-up-head5")
  .addEventListener("mouseleave", function () {
    gsap.to(".scroll-up-head5 h3", {
      y: 0,
      duration: 0.4,
    });
  });

document
  .querySelector(".scroll-up-head6")
  .addEventListener("mouseenter", function () {
    gsap.to(".scroll-up-head6 h3", {
      y: -62,
      duration: 0.4,
    });
  });

document
  .querySelector(".scroll-up-head6")
  .addEventListener("mouseleave", function () {
    gsap.to(".scroll-up-head6 h3", {
      y: 0,
      duration: 0.4,
    });
  });
}

function loadingAnimation() {
  var tl = gsap.timeline();

  tl.from(".line h1", {
    y: 200,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: 0.5,
  });

  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");

      var grow = 0;

      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 30);
    },
  });
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 2.9,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1200,
    opacity: 0,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });

  tl.from("#nav", {
    opacity: 0,
  });

  tl.from("#hero2 h1,#hero3 h2,#hero4 h1", {
    y: 190,
    stagger: 0.2,
    duration: 0.4,
  });

  tl.from(
    "#hero1, #page2",
    {
      opacity: 0,
      duration: 0.7,
    },
    "-=1.2"
  );
}
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x - 20,
      top: dets.y - 20,
    });
  });

  Shery.makeMagnet("#nav-part2 h4", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  var videoContainer = document.querySelector("#video-container");

  var video = document.querySelector("#video-container video");

  var flag = 0;

  videoContainer.addEventListener("click", function () {
    if (flag == 0) {
      flag = 1;
      video.play();
      video.style.opacity = 1;
      document.querySelector("#video-container img").style.opacity = 0;
      document.querySelector(
        "#video-cursor"
      ).innerHTML = `<i class="ri-pause-line"></i>`;

      gsap.to("#video-cursor", {
        scale: 0.5,
      });
    } else {
      flag = 0;
      video.pause();
      video.style.opacity = 0;
      document.querySelector("#video-container img").style.opacity = 1;
      document.querySelector(
        "#video-cursor"
      ).innerHTML = `<i class="ri-play-fill"></i>`;

      gsap.to("#video-cursor", {
        scale: 1,
      });
    }
  });

  // videoContainer.addEventListener("mouseenter", function () {
  //   videoContainer.addEventListener("mousemove", function (dets) {
  //     gsap.to("#crsr", {
  //       scale: 0,
  //     });
  //     gsap.to("#video-cursor", {
  //       left: dets.clientX,
  //       top: dets.clientY,
  //     });
  //   });
  // });
  // videoContainer.addEventListener("mouseleave", function () {
  //   gsap.to("#crsr", {
  //     scale: 1,
  //   });
  //   gsap.to("#video-cursor", {
  //     left: "90%",
  //     top: "5%",
  //   });
  // });

  document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.querySelector("#video-container");
    const customCursor = document.querySelector("#video-cursor");
  
    videoContainer.addEventListener("mouseenter", function () {
      gsap.to("#crsr", {
        scale: 0,
      });
      videoContainer.addEventListener("mousemove", moveCursor);
    });
  
    videoContainer.addEventListener("mouseleave", function () {
      gsap.to("#crsr", {
        scale: 1,
      });
      gsap.to("#video-cursor", {
        left: "90%",
        top: "5%",
      });
      videoContainer.removeEventListener("mousemove", moveCursor);
    });
  
    
    function moveCursor(event) {
      // Get the position of the video container
      const containerRect = videoContainer.getBoundingClientRect();
    
      // Calculate the position of the cursor relative to the video container
      const cursorX = event.clientX - containerRect.left;
      const cursorY = event.clientY - containerRect.top;
    
      // Apply the position to the custom cursor
      gsap.to("#video-cursor", {
        left: cursorX,
        top: cursorY,
      });
    }
  });

}


function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.51,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8333333175178391},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.52,"range":[0,2]},"discard_threshold":{"value":0.53,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.37,"range":[0,2]},"noise_scale":{"value":13.74,"range":[0,100]}},
    gooey: true,
  });
}


document.querySelector("#hero3").addEventListener("mousemove", function (dets) {
  // gsap.to("#flag",{
  //   opacity:1

  // })
  var rotate = 0;
  var diffrot = 0;
  rotate = dets.clientX;

  setInterval(function () {
    diffrot = dets.clientX - rotate;
  }, 100);

  console.log("value of roatte : ", rotate);

  console.log("value of diffrot : ", diffrot);
  gsap.to(document.querySelector("#flag"), {
    opacity: 1,
    ease: Power3,
    top: dets.clientY,

    left: dets.clientX,
    rotate: gsap.utils.clamp(-15, 15, diffrot),
    duration: 0.3,
    scrub: 0.9,
  });
});
document.querySelector("#hero3").addEventListener("mouseleave", function () {
  gsap.to("#flag", {
    opacity: 0,
  });
});


locomotiveAnimation();

sheryAnimation();
loadingAnimation();
cursorAnimation();
scrollUpText();