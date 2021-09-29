const profileSection = document.querySelector('.section-content');
const projectSection = document.querySelector('.project-section');

const isNavClosing = (bool) => {
    const navbar = document.querySelector('.navbar');
    const navLists = document.querySelectorAll('.nav-list');

    const crossIcon = document.querySelector('.close');
    const menuIcon = document.querySelector('.menu');

    if (bool) {
        // IS THE NAV CLOSING?
        navbar.style.height = '0px';
        setTimeout(() => {
            crossIcon.style.opacity = '0';
            profileSection.style.display = 'block';
            projectSection.style.display = 'block';
            menuIcon.style.display = 'block';
            navLists.forEach(item => {
                item.style.transform = 'translateX(-768px)';
            })
        }, 500);
        setTimeout(() => {
            navbar.style.display = 'none';
            menuIcon.style.opacity = '1';
            profileSection.style.transform = 'translateX(0px)';
            projectSection.style.transform = 'translateX(0px)';
        }, 1500);
    } else {
        // THE NAV IS OPENING!
        profileSection.style.transform = 'translateX(-768px)';
        projectSection.style.transform = 'translateX(-768px)';
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
            profileSection.style.display = 'none';
            projectSection.style.display = 'none';
            navLists.forEach(item => {
                item.style.transform = 'translateX(0px)';
            })
            menuIcon.style.display = 'none';
        }, 500);
    }
}

const switchSection = (value) => {
    const mainNav = document.querySelectorAll('.nav-item');


    if (!mainNav[value].classList.contains('active')) {
        if (mainNav[value - 1] === undefined) {
            mainNav[value].classList.add('active');
            mainNav[value + 1].classList.remove('active');
        } else if (mainNav[value + 1] === undefined) {
            mainNav[value].classList.add('active');
            mainNav[value - 1].classList.remove('active');
        }
    }
}