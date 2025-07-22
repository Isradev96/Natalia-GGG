window.addEventListener("load", () => {
    const loader = document.querySelector(".loader_bg");

    loader.classList.add("loader_bg--hidden");

    loader.addEventListener("transitioned", () =>{
        document.body.removeChild(loader);

    });

});