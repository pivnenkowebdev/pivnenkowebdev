import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger)

document.fonts.ready.then(() => {
    const tlHero = gsap.timeline();

    const mainTitleSplit = new SplitText("#mainTitle", {
        type: "chars",
    });
    
    const subtitleSplit = new SplitText("#heroSubtitle", {
        type: "words",
    });
    
    const listSplit = new SplitText("#heroList", {
        type: "lines",
    });

    tlHero.from(mainTitleSplit.chars, {
        x: -100,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
            mainTitleSplit.revert();
        }
    })
    .addLabel("afterTitle")
    .from(subtitleSplit.words, {
        x: -100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
            subtitleSplit.revert();
        }
    }, "afterTitle")
    .addLabel("afterSubtitle")
    .from(listSplit.lines, {
        x: -100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
            listSplit.revert();
        }
    }, "afterSubtitle")
    .addLabel("afterList")
    .from("#heroLink", {
        opacity: 0,
        stagger: {
            amount: 0.5,
            from: "random",
        },
        duration: 0.8,
        ease: "power2.out"
    }, "afterList")
})

const tlAboutSection = gsap.timeline({
    scrollTrigger: {
        trigger: "#aboutMeSection",
        start: 'top 60%',
        end: '60% 70%',
        scrub: 2,
    }
});

tlAboutSection
    .from("#aboutMeTitle", { x: '200%' })
    .from("#aboutMeSubtitle", { x: '200%' }, ">")
    .from("#listAbout", { x: '200%' }, ">");

const tlGarancySection = gsap.timeline({
    scrollTrigger: {
        trigger: "#garancySection",
        start: 'top 80%',
        end: '60% 90%',
        scrub: 2,
        // markers: true
    }
});

tlGarancySection
    .from("#garancyTitle", { x: '200%' })
    .from("#garancySubtitle", { x: '200%' }, ">")

gsap.from("[data-garancy-card]", {
    scrollTrigger: {
        trigger: "#garancySection",
        start: '70% bottom',
        end: '80% 95%',
        scrub: 2,
        // markers: true
    },
        y: "100%",
        opacity: 0,
        stagger: 0.6,
        scrub: 1,
        duration: 1
})

gsap.from("#garancyLink", {
scrollTrigger: {
        trigger: "#garancySection",
        start: '70% 80%',
        end: 'top 90%',
        scrub: 2,
        // markers: true
    },
        y: "100%",
        opacity: 0,
        stagger: 0.6,
        scrub: 1
})

gsap.from("#rockIcon", {
    scrollTrigger: {
        trigger: "#rockIcon",
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none reverse none",
    },
    scale: 0,
    opacity: 0,
    ease: "bounce.inOut",
    duration: 1,
});

gsap.from("#manIcon", {
    scrollTrigger: {
        trigger: "#aboutMeSubtitle",
        start: "top 70%",
        end: "bottom bottom",
        toggleActions: "play none reverse none",
    },
    scale: 0,
    opacity: 0,
    ease: "bounce.inOut",
    duration: 1,
});

gsap.from("#womanIcon", {
    scrollTrigger: {
        trigger: "#listAbout",
        start: "top 60%",
        end: "bottom bottom",
        toggleActions: "play none reverse none",
    },
    scale: 0,
    opacity: 0,
    ease: "bounce.inOut",
    duration: 1
});

gsap.from("#fireIcon", {
    scrollTrigger: {
        trigger: "#listAbout",
        start: "top 60%",
        end: "bottom bottom",
        toggleActions: "play none reverse none",
    },
    scale: 0,
    opacity: 0,
    ease: "bounce.inOut",
    duration: 1
});

const tlProgrammsSection = gsap.timeline({
    scrollTrigger: {
        trigger: "#programmsSection",
        start: '40% 80%',
        end: '60% bottom',
        scrub: 2,
        // markers: true,
        toggleActions: "play none reverse none",
    },
});

tlProgrammsSection.to("body", {
    backgroundColor: '#000814',
    color: '#fff',
    duration: 0.5,
})
.to("#header", {
    backgroundColor: "transparent",
    // duration: 0.5
}, "<")

gsap.from("[data-programm]", {
    scrollTrigger: {
        trigger: "#programmsSection",
        start: '70% 90%',
        end: '60% 70%',
        scrub: 2,
        // markers: true
    },
        y: "100%",
        opacity: 0,
        stagger: 0.6,
        scrub: 1,
        duration: 1
})

gsap.from("#programmLink", {
scrollTrigger: {
        trigger: "#programmLink",
        start: '70% bottom',
        end: 'top 90%',
        scrub: 2,
        markers: true
    },
        y: "100%",
        opacity: 0,
        stagger: 0.6,
        scrub: 1
})
