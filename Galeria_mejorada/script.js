const modalC = document.querySelector(".modal-container");
const modal =document.querySelector(".modal")

 
const fotos = ["img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png","img/7.png","img/8.png","img/9.png","img/10.png","img/11.png","img/12.png","img/13.png","img/14.png","img/15.png"];

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


document.querySelector(".close-m").addEventListener("click",()=>{
        modal.style.animation = "desaparecer 0.3s forwards"
        setTimeout(()=>{
            modalC.style.display = "none";
        },300)
})

const imagenes = document.createDocumentFragment();

for (let i = 0;i < fotos.length; i++) {
        let img = document.createElement("IMG");
        img.classList.add("grid-item");
        img.setAttribute("src",fotos[i]);
        img.addEventListener("click",()=>{
        modalC.style.display = "flex";
        modal.style.animation = "aparecer 1s forwards";
        document.getElementById("foto").setAttribute("src",fotos[i]);
        scrollTo(0,0)
        inicializarSelectores()
        document.getElementById(fotos[i]).classList.add("active")
});
        imagenes.appendChild(img)
}

document.querySelector(".grid-gallery").appendChild(imagenes)

