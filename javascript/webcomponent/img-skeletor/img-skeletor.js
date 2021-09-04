class imgSkeltor extends HTMLElement {
    constructor () {
        super();
    }
    
    connectedCallback () {
        this.innerHTML = `
            <img class='skeleton' src=${this.getAttribute('src')}>
        ` ;
    }
}
customElements.define('img-skeletor', imgSkeltor);