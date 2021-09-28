const isNavClosing = (bool) => {
    const navbar = document.querySelector('.navbar');
    const crossIcon = document.querySelector('.close');
    const menuIcon = document.querySelector('.menu');
    const navLists = document.querySelectorAll('.nav-list');
    const sectionContent = document.querySelector('.section-content');

    if (bool) {
        navbar.style.height = '0px';

        navLists.forEach(element => {
            element.style.transform = 'translateX(-768px)';
        });

        setTimeout(() => {
            crossIcon.style.opacity = '0'
            menuIcon.style.display = 'block';
            setTimeout(() => {
                crossIcon.style.display = 'none';
                menuIcon.style.opacity = '1'

            }, 700)
        }, 500)
        sectionContent.style.display = 'block';
    } else {
        sectionContent.style.transform = 'translateX(-768px)';
        navbar.style.height = '100vh';

        setTimeout(() => {
            menuIcon.style.opacity = '0';
        }, 200)
        setTimeout(() => {
            sectionContent.style.display = 'none';
            setTimeout(() => {
                menuIcon.style.display = 'none';
                crossIcon.style.display = 'block';
                crossIcon.style.opacity = '1';
                navLists.forEach(element => {
                    element.style.transform = 'translateX(0px)';
                });
            }, 700)
        }, 500)
    }
}