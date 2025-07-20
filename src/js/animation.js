import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger) 

const listSplitAbout = new SplitText("#listAbout", {
    type: "lines",
});

const tlHero = gsap.timeline();

const tlAboutSection = gsap.timeline();

const main = document.querySelector('#main');

ScrollTrigger.create({
    animation: tlAboutSection,
    trigger: '#siteContainer',
    start: 'top top',
    end: () => main.offsetWidth / 2,
    scrub: 0.5,
    pin: true,
    // markers: true 
});

tlAboutSection
.fromTo("#aboutMeSection", 
    {
        x: "-100%", 
        y: "100%",
    }, 
    {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#aboutMeSection",
            start: "top 80%",
            end: "top 60%",
            scrub: 1.5,
        }
    }
)
    .to({}, { duration: 0.5 })
    .fromTo(".third", 
        { x: "-100%" }, 
        { x: "-200%" }, 
        ">"
    )
    .to({}, { duration: 0.3 })
    .fromTo(".fourth", 
        { x: "-400%" }, 
        { x: "-300%" }, 
        ">"
    );


const tlAboutTitle = gsap.timeline({
    scrollTrigger: {
        trigger: "#aboutMeTitle",
        start: "top 90%",
        end: "top 60%",
        scrub: 2,
        // markers: true
    }
});

tlAboutTitle
    .from("#aboutMeTitle", {
        x: "200%",
        opacity: 0,
        duration: 2,
        ease: "power3.out"
    })
    .from("#rockIcon", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "bounce"
    });

const tlAboutSubtitle = gsap.timeline({
    scrollTrigger: {
        trigger: "#aboutMeSubtitle",
        start: "top 90%",
        end: "top 60%",
        scrub: 2,
        // markers: true
    }
});

tlAboutSubtitle
    .from("#aboutMeSubtitle", {
        x: "200%",
        opacity: 0,
        duration: 2,
        ease: "power3.out"
    })
    .from("#womanIcon", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "bounce"
    })
    .from("#manIcon", {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "bounce"
    }, ">");

const tlAboutList = gsap.timeline({
    scrollTrigger: {
        trigger: "#listAbout",
        start: "top 90%",
        end: "top 60%",
        scrub: 2
    }
})

tlAboutList
    .from(listSplitAbout.lines, {
        x: "200%",
        opacity: 0,
        stagger: 0.3,
        duration: 2,
        ease: "power3.out",
    })
    .from("#fireIcon", {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "bounce"
    }, ">");

document.fonts.ready.then(() => {
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
