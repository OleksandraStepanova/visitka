        const cssClasses = {
            burgerButton: 'burger-menu',
            modal: 'modal-window',
            closeButton: 'modal-menu-close-btn',
            toggleClass: 'is-open',
            menuButtons: 'modal-menu-link',
        };

        const burgerMenu = document.querySelector(".mobile-menu-btn");
        const modal = document.querySelector(".mobile-menu-wrapper");
        const closeButton = document.querySelector(".mobile-menu-close-btn");
        const menuButtons = document.querySelectorAll(".menu-item-mobile");

        const toggle = event => {
            event.preventDefault();
            modal.classList.toggle(cssClasses.toggleClass);
        };

        burgerMenu.addEventListener('click', toggleMobile);
        closeButton.addEventListener('click', toggleMobile);
        function toggleMobile(event) {
                event.preventDefault();
                modal.classList.toggle(cssClasses.toggleClass);
            };


        menuButtons.forEach(button => button.addEventListener('click', toggleMenu));

        function toggleMenu(){          
            
            modal.classList.toggle(cssClasses.toggleClass);
            
        }