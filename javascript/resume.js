let onPageLoad = () => {
    addNavigationListener();
    setIFrameURL('bio');
}
let addNavigationListener = () => { //TODO : Read up on arrow fuctions
    let allNavLinks = document.querySelectorAll('.navLinks ul a'); //TODO : Read up on queryselector
    allNavLinks.forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            setIFrameURL(anchor.getAttribute('nav'));
        })
    });
}
let setIFrameURL = (page) => {
    let iframeInstance = document.querySelector('.detail iframe');
    iframeInstance.setAttribute('src', `./pages/${page}.html`);
}

onPageLoad()