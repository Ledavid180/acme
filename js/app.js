class Card {
    constructor() {
        this.newsletterArr = [];
        this.form = document.getElementById('form');
        this.newsletterUsername = document.getElementById('userName');
        this.newsletterEmail = document.getElementById('userEmail');


        //object to hold card/card info
        this.cards = {
            card1: {
                id: 1,
                img: './media/card1.png',
                alt: 'anvil 1',
                name: 'our guarantee',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestiae, qui ipsum maiores illo perferendis id dignissimos animi odio dolorum harum!',
                class: ''
            },
            card2: {
                id: 2,
                img: './media/card2.png',
                alt: 'anvil 2',
                name: 'our promise',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestiae, qui ipsum maiores illo perferendis id dignissimos animi odio dolorum harum!',
                class: 'd-none d-md-block'
            },
            card3: {
                id: 3,
                img: './media/card3.png',
                alt: 'anvil 3',
                name: 'our assurance',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestiae, qui ipsum maiores illo perferendis id dignissimos animi odio dolorum harum!',
                class: 'd-none d-md-block'
            }

        }

        this.carouselTestimonials = {
            slide1: {
                id: 1,
                testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem
                nulla sit amet, nisi nobis minus, perspiciatis. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Culpa delectus nulla unde, quasi?`,
                user: 'Jenny Doe',
                userJob: 'Lead Hammerer',
                class: 'carousel-item  active'
            },
            slide2: {
                id: 2,
                testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem
                nulla sit amet, nisi nobis minus, perspiciatis. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Culpa delectus nulla unde, quasi?`,
                user: 'John Doe',
                userJob: 'Sub Hammerer',
                class: 'carousel-item '
            },
            slide3: {
                id: 3,
                testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem
                nulla sit amet, nisi nobis minus, perspiciatis. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Culpa delectus nulla unde, quasi?`,
                user: 'JR Doe',
                userJob: 'Junior Hammerer',
                class: 'carousel-item '
            }
        }
    }

    init() {
        this.loadCards();
        this.loadCarousel();
        this.formSubmit();//starts program, nothing actually happens, but now is listening for submit
    }

    loadCards() {
        let cardSection = document.getElementById('cardSection');

        for (const key in this.cards) {
            const item = this.cards[key];
            const product = document.createElement('div');
            product.className = 'col-md-4 product';
            product.innerHTML = `
            <div class="${item.class}">
                <div class="card cardStyling">
                    <img src="${item.img}" class="card-img img-fluid" alt="${item.alt}">
                        <h3 class="card-img-overlay text-uppercase text-white d-flex flex-column justify-content-end card-h3">${item.name}</h3>
                </div>
                <p class="card-text py-3 content">${item.content}</p>
                <a href="#link" class="btn text-capitalize text-align-left learn-more">learn more</a>
                </div>
            `

            cardSection.append(product);
        }

    }

    loadCarousel() {
        let carouselSection = document.getElementById('carouselSection');

        for (const key in this.carouselTestimonials) {
            const item = this.carouselTestimonials[key];
            // console.log(item);
            const product = document.createElement('div');
            product.className = item.class
            product.innerHTML = `
                    <p class="testimony">${item.testimony}</p>
                    <p class="user">${item.user}</p>
                    <p class="user-job">${item.userJob}</p>
            `

            carouselSection.append(product);
        }
    }
    

    formSubmit() {
        this.form.addEventListener('submit', (e)=>{
            e.preventDefault();
            this.addData();
        } ) 
    }

    addData() {
            console.log(this.newsletterUsername.value);
            console.log(this.newsletterEmail.value);
            this.newsletterArr.push([this.newsletterUsername.value, this.newsletterEmail.value]);
            this.newsletterUsername.value = '';
            this.newsletterEmail.value = '';
            console.log(this.newsletterArr);
        }
    }

let action = new Card();
action.init();



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerToggle() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


