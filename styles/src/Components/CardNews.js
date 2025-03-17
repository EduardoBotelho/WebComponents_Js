class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "By Anonimo");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.setAttribute("href", this.getAttribute("link-url"));

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        //image
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/pngtree-vader-clipart-darth-vader-vector-png-image_6828071.png";
        newsImage.setAttribute("alt", this.getAttribute("image-alt") || "Imagem de Noticia");
        cardRight.appendChild(newsImage);

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("description");
        cardRight.appendChild(newsContent);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }
    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 720px;
                border: 1px solid gray;
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            
                display: flex;
                flex-direction: row;
                justify-content: space-between;}

                .card-left, .card-right {
                    border: 1px solid blue;
                    padding: 10px;
                }
                .card-left{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 10px;
                }
                    .card-left > span{
                        font-weight: 400;
                    }
                    .card-left > h1{
                        margin-top: 15px;
                        font-size: 25px;
                    }
                    .card-left > p{
                        color: rgb(70,70,70);
                    }
                    .card-right{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        padding: 10px;
                        }
 `;
        return style;
    } 
}


customElements.define("card-news", CardNews);