let onPageLoad = () => {
    addNav();
    setIFrameURL('bio');
}
let addNav = () => {
    $.ajax('./assets/navData.json', navData => {
        let ulPlaceholder = document.querySelector('.navLinks ul');
        navData.forEach((link)=>{
            let anchor = document.createElement('a'),
                li = document.createElement('li');
            anchor.setAttribute('href', '#');
            anchor.setAttribute('nav', link.page);
            anchor.text = link.display;
            li.appendChild(anchor);
            ulPlaceholder.appendChild(li);
        });
        addNavigationListener();
    });
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

onPageLoad();