let onPageLoad = () => {
  addNav();
  setIFrameURL(`./pages/bio.html`);
};
let addNav = () => {
  $.ajax("./assets/navData.json").done((navData) => {
    let ulPlaceholder = document.querySelector(".navLinks ul");
    navData.forEach((link) => {
      ulPlaceholder.appendChild(createAndAddAnchor(link)); 
    });
    addNavigationListener();
  });
};
let createAndAddAnchor = (link) => {
  let anchor = document.createElement("a"),
    li = document.createElement("li");
  anchor.setAttribute("href", "#");
  anchor.setAttribute("nav", link.page);
  if (link.external) {
    anchor.setAttribute("external", link.external);
  }
  anchor.text = link.display;
  li.appendChild(anchor);
  if (link.children && link.children.length > 0) {
      let ul = document.createElement('ul');
      link.children.forEach((child) => {
          ul.appendChild(createAndAddAnchor(child));
      });
      li.appendChild(ul);
  }
  return li;
};
let addNavigationListener = () => {
  //TODO : Read up on arrow fuctions
  let allNavLinks = document.querySelectorAll(".navLinks ul a"); //TODO : Read up on queryselector
  allNavLinks.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let externalURL = anchor.getAttribute("external"),
      page = externalURL
      ? anchor.getAttribute("nav")
      : `./pages/${anchor.getAttribute("nav")}.html`;
      setIFrameURL(page);
    });
  });
};
let setIFrameURL = (page) => {
    let iframeInstance = document.querySelector(".detail iframe");
    iframeInstance.setAttribute("src", page);
};

onPageLoad();
