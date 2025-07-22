const aboutMe = document.getElementById("aboutme");
const services = document.getElementById("services");
const galleryId1 = document.getElementById("cardGallery-id1");
const galleryId2 = document.getElementById("cardGallery-id2");
const galleryId3 = document.getElementById("cardGallery-id3");
const galleryId4 = document.getElementById("cardGallery-id4");
const galleryId5 = document.getElementById("cardGallery-id5");
const galleryId6 = document.getElementById("cardGallery-id6");
const galleryId7 = document.getElementById("cardGallery-id7");
const galleryId8 = document.getElementById("cardGallery-id8");
const book = document.getElementById("book-img-id");
const book2 = document.getElementById("book-img2-id");
const contact = document.getElementById("img_contact_png_id");
const footer = document.getElementById("footer");


const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.35
}

const observer = new IntersectionObserver(callbackFuntion, options)

function callbackFuntion(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            //console.log(entry.target.id);
            if(entry.target.id === 'aboutme'){
                entry.target.classList.add('loaded')
            }

            if(entry.target.id === 'services'){
                entry.target.classList.add('fade-in')
            }

            if(entry.target.id === 'book-img-id'){
                entry.target.classList.add('animate2')
            }

            if(entry.target.id === 'book-img2-id'){
                entry.target.classList.add('animate2')
            }

            if(entry.target.id === 'img_contact_png_id'){
                entry.target.classList.add('scale')
            }

            if(entry.target.id === 'footer'){
                entry.target.classList.add('animate')
            }
            observer.unobserve(entry.target)
        }
    });

}

const options2 = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
}

const observer2 = new IntersectionObserver(callbackFuntion2, options2)

function callbackFuntion2(entries2){
    entries2.forEach(entry2 => {
        if(entry2.isIntersecting){

            if(entry2.target.id === 'cardGallery-id1'){
                entry2.target.classList.add('animate')
            }

            if(entry2.target.id === 'cardGallery-id2'){
                entry2.target.classList.add('animate')
            }

            if(entry2.target.id === 'cardGallery-id3'){
                entry2.target.classList.add('animate')
            }

            if(entry2.target.id === 'cardGallery-id4'){
                entry2.target.classList.add('animate')
            }

            if(entry2.target.id === 'cardGallery-id5'){
                entry2.target.classList.add('animate')
            }

            if(entry2.target.id === 'cardGallery-id6'){
                entry2.target.classList.add('animate')
            }

            if(entry2.target.id === 'cardGallery-id7'){
                entry2.target.classList.add('animate')
            }

            if(entry2.target.id === 'cardGallery-id8'){
                entry2.target.classList.add('animate')
            }
            observer2.unobserve(entry2.target)
        }
    });

}

observer.observe(aboutMe)
observer.observe(services)
observer2.observe(galleryId1)
observer2.observe(galleryId2)
observer2.observe(galleryId3)
observer2.observe(galleryId4)
observer2.observe(galleryId5)
observer2.observe(galleryId6)
observer2.observe(galleryId7)
observer2.observe(galleryId8)
observer.observe(book)
observer.observe(book2)
observer.observe(contact)
observer.observe(footer)
















// const images = document.querySelectorAll('.observer_pattern');

// function triggerAnimation(entries){
//     entries.forEach(entry =>{
//         const image = entry.target.querySelector('.observer_element');

        // const imageTarget = entry.target;
        // console.log(entry);

//         image.classList.toggle('unset', entry.isIntersecting);
//     });
// }

// const options ={
//     root: null,
//     rootMargin: "0px",
//     threshold: 1
// }

// const observer = new IntersectionObserver(triggerAnimation, options);

// images.forEach(image =>{
//     observer.observe(image);
// });
