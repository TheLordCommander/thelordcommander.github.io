class imgSkeltor extends HTMLElement {
    constructor () {
        super();
    }
    
    connectedCallback () {
        const shadow = this.attachShadow({ mode : 'open' });
        shadow.innerHTML = `
        <style>
            img{
                width: 100%;
            }
            .skeleton {
                animation: skeleton-loading 1s linear infinite alternate;
            }
            @keyframes skeleton-loading {
                0% {
                    background-color: hsl(200, 20%, 70%);
                }
                100% {
                    background-color: hsl(200, 20%, 95%);
                }
            }
        </style>
            <img class='skeleton' src=${this.getAttribute('src')}>
        ` ;
    }
}
customElements.define('img-skeletor', imgSkeltor);