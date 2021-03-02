function tabs(tabsWrapperSelector, tabSelector, contentSelector, activeClass) {  
    const wrapper = document.querySelector(tabsWrapperSelector);
    const tabs = wrapper.querySelectorAll(tabSelector);
    const contentList = document.querySelectorAll(contentSelector);

    function showTab(i = 0) {        
        contentList[i].style.display = 'block';  
        tabs[i].classList.add(activeClass);
    }

    function hideTabs() {
        contentList.forEach( (item) => {
            item.style.display = 'none';
        });
        tabs.forEach( (item) => {
            item.classList.remove(activeClass);
        });
    }

    function initTabs() {
        hideTabs();
        showTab();

        wrapper.addEventListener('click', (evt) => {            
            const target = evt.target;            
            evt.preventDefault();            

            if (target &&
                    (target.classList.contains(tabSelector.slice(1)) ||
                    target.parentElement.classList.contains(tabSelector.slice(1)))) {
                hideTabs();  
                    
                tabs.forEach( (item, i) => {
                    if (item === target || item === target.parentElement) {                        
                        showTab(i);                        
                    }                    
                });
            }

        });
    }

    initTabs();
   
}

export default tabs;