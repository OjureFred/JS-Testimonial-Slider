const testimonials = [
    {
        name: "Samantha Miller",
        photoUrl: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZCUyMHNob3R8ZW58MHx8MHx8fDA%3D",
        text: "I am extremely satisfied with the tablets from Apple. The sleek design and powerful performance exceeded my expectations. I highly recommend Apple for anyone looking for top-notch technology."
    },
    {
        name: "Tom Bryson",
        photoUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I am amazed by the sleek design and powerful performance of Apple's tablets. The seamless user experience and cutting-edge technology make it a must-have device for anyone on the go.",
    },
    {
        name: "Chidi Agozie",
        photoUrl: "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I am beyond impressed with the quality of tablets that Apple offers. Their sleek design and user-friendly interface make them a must-have for anyone looking for a reliable device. I highly recommend Apple to all tech-savvy individuals!",
    }
]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username")

let idx = 0;
updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
idx++;
if(idx === testimonials.length){
    idx = 0;
}
setTimeout(()=> {
    updateTestimonial()
}, 2000)

}
