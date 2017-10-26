import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.mainHeaderTop = $('.main-header__top');
        this.hamburger = $('.main-header__toogle');
        this.mainNav = $('.main-nav');
        this.userNav = $('.user-nav');
        this.menuLinks = $('.main-nav__link');
        this.events();
        if(this.mainHeaderTop.removeClass('.no-js')) {
            alert('HEllo!!');
        }
    }
    events() {
        this.hamburger.on('click', ()=> {
                this.toggleMenu();
        })
        this.menuLinks.on('click', ()=> {
            this.toggleMenu();
        })
        this.hamburger.on("tap", () => {
            this.toggleMenu();
        });

        this.menuLinks.on("tap", () => {
            this.toggleMenu();
        });
    }
    toggleMenu() {
        this.hamburger.toggleClass('.main-header__toggle--closed');
        this.mainNav.toggleClass('.main-nav--closed');
        this.userNav.toggleClass('.user-nav--closed');
        
    }
}
export default MobileMenu;