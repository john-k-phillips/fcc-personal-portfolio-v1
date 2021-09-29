const isNavClosing = (bool) => {
    const navbar = document.querySelector('.navbar');
    const navLists = document.querySelectorAll('.nav-list');

    const crossIcon = document.querySelector('.close');
    const menuIcon = document.querySelector('.menu');

    const sectionContent = document.querySelector('.section-content');

    if (bool) {
        // IS THE NAV CLOSING?
        navbar.style.height = '0px';
        setTimeout(() => {
            crossIcon.style.opacity = '0';
            sectionContent.style.display = 'block';
            menuIcon.style.display = 'block';
            navLists.forEach(item => {
                item.style.transform = 'translateX(-768px)';
            })
        }, 500);
        setTimeout(() => {
            navbar.style.display = 'none';
            menuIcon.style.opacity = '1';
            sectionContent.style.transform = 'translateX(0px)';
        }, 1500);
    } else {
        // THE NAV IS OPENING!
        sectionContent.style.transform = 'translateX(-768px)';
        menuIcon.style.opacity = '0';
        navLists.forEach(item => {
            item.style.display = 'flex';
        })
        navbar.style.display = 'flex';
        setTimeout(() => {
            navbar.style.height = '100vh'

        }, 10);
        setTimeout(() => {
            crossIcon.style.opacity = '1';
            sectionContent.style.display = 'none';
            navLists.forEach(item => {
                item.style.transform = 'translateX(0px)';
            })
            menuIcon.style.display = 'none';
        }, 500);
    }
}