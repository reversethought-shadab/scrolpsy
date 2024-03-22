function homePageAnimation() {
  gsap.set(".slidesm", {
    scale: 5,
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom top",
      scrub: 2,
    },
  });

  tl.to(
    ".video",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  );
  tl.to(
    ".slidesm",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  );
  tl.to(
    ".slidesm",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  );
  tl.to(
    ".lft",
    {
      xPercent: -10,
      stagger: 0.03,
      ease: Power4,
    },
    "b"
  );
  tl.to(
    ".rgt",
    {
      xPercent: 10,
      stagger: 0.03,
      ease: Power4,
    },
    "b"
  );
}
function handleSlides() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".third",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
    xPercent: -200,
    ease: Power4,
  });
}
function teamList() {
  document.querySelectorAll(".list-items").forEach((el) => {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".team-pic"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
    });
    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".team-pic"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}
function testimonial() {
  var clutter = "";
  document
    .querySelector(".testimo")
    .textContent.split("")
    .forEach(function (e) {
      if (e === "") clutter += `<span>&nbsp;</span>`;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".testimo").innerHTML = clutter;
  gsap.set(".testimo span", {
    opacity: 0.1,
  });
  gsap.to(".testimo span", {
    scrollTrigger: {
      trigger: ".testimonial",
      start: "top 60%",
      end: "bottom 90%",
      scrub: 2,
    },

    opacity: 1,
    stagger: 0.03,
    ease: Power4.easeOut,
  });
}
function capsuleAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top  70%",
      end: "bottom bottom",
      scrub: 3,
    },
    y: 0,
    ease: Power4,
  });
}
document.querySelectorAll(".section").forEach(function (e) {
  ScrollTrigger.create({
    trigger: e,
    start: "top 50%",
    end: "bottom 50%",
    scrub: 1,
    onEnter: function () {
      document.body.setAttribute("theme", e.dataset.color);
    },
    onEnterBack: function () {
      document.body.setAttribute("theme", e.dataset.color);
    },
  });
});
homePageAnimation();
handleSlides();
teamList();
testimonial();
capsuleAnimation();
