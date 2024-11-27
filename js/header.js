window.addEventListener('DOMContentLoaded', function() {
    var container = document.createElement('div');
    container.className = 'container';

    var headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';

    var img = document.createElement('img');
    img.src = '/img/pfp.png';
    img.className = 'rounded';
    img.style.height = '100px';
    //img.style.paddingRight = '24px';

    var h1 = document.createElement('h1');
    h1.textContent = "Bearison's Page";

    headerContainer.appendChild(img);
    headerContainer.appendChild(h1);

    var hr = document.createElement('hr');
    hr.className = 'seperator';

    var navLinks = document.createElement('div');
    navLinks.innerHTML = '<a href="/">home</a>';

    container.appendChild(headerContainer);
    container.appendChild(hr);
    container.appendChild(navLinks);

    document.body.insertBefore(container, document.body.firstChild);
})