const modalC = document.querySelector(".modal-container");
const modal =document.querySelector(".modal")

const fotos = ["img/1.png","img/2.png","img/3.png","img/4.png"];

const createIMGSelector = img =>{
        const selector = document.createElement("DIV");
        selector.setAttribute("data-img",img);
        selector.setAttribute("id",img);
        selector.classList.add("img-selector")
        selector.addEventListener("click",()=>{
            inicializarSelectores();
            document.getElementById("foto").setAttribute("src",img);
            document.getElementById(img).classList.add("active");
        })
        return selector;
}

const inicializarSelectores = ()=>{
        const fragment = document.createDocumentFragment();
        for (i = 0; i < fotos.length; i++) {
                let selector = createIMGSelector(fotos[i]);
                fragment.appendChild(selector);
        }
        document.querySelector(".img-selectors").innerHTML = "";
        document.querySelector(".img-selectors").appendChild(fragment);
}
inicializarSelectores();



document.querySelector(".open_modal").addEventListener("click",()=>{
        modalC.style.display = "flex";
        modal.style.animation = "aparecer 1s forwards";
});

document.querySelector(".close-m").addEventListener("click",()=>{
        modal.style.animation = "desaparecer 0.3s forwards"
        setTimeout(()=>{
            modalC.style.display = "none";
        },300)
})

document.querySelectorAll (".img-selector")[0].classList.add("active")