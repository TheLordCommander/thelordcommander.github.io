document.addEventListener('DOMContentLoaded', (event)=>{
    let seperatorEl = document.querySelector('.seperator');
    let bodyEl = document.getElementsByTagName('body')[0];
    let drawerEl = document.querySelector('.drawer'),
        drawerInitialWidth = drawerEl.clientWidth;
    let detailEl = document.querySelector('.detail'),
        detailInitialWidth = detailEl.clientWidth;
    let resizing = false;

    seperatorEl.addEventListener('mousedown', (e)=>{
        resizing = true;
    });
    bodyEl.addEventListener('mousemove', (e)=>{
        e.preventDefault();
        if (resizing) {
            let mouseX = e.x;
            if (mouseX > drawerInitialWidth)
                return;
            else {
                let temp = (drawerInitialWidth - mouseX)/mouseX;
                drawerEl.style.flex = 1- temp;
                drawerEl.style.width = mouseX + 'px';
                if (mouseX <165)
                    drawerEl.classList.add('sidebar');
                else
                    drawerEl.classList.remove('sidebar');  
            }
        }
    });
    bodyEl.addEventListener('mouseup', (e)=>{
        resizing = false;
    });
    seperatorEl.addEventListener('mouseup', (e)=>{
        resizing = false;
    });
   
});