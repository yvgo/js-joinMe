/**
 * If the login menu has the class 'd-none', remove it. Otherwise, add it
 */
function subMenu() {
    let menu = document.getElementById('logMenue');
    
    if (menu.classList.contains('d-none')) {
        menu.classList.remove('d-none');
    } else {
        menu.classList.add('d-none');
    }
}

/**
 * The function redirects the user to a specified website URL.
 * @param siteURL - A string representing the URL of the website that the user wants to navigate to.
 */
function selectSite(siteURL) {
    window.location.href=siteURL;
}


