const promoBar = document.createElement('div');
promoBar.className = 'promo-bar';
const promoText = `<div class="promo-bar__text">
        <div class="promo-bar__icon">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.07299 23L9.39416 14.2153L1.92701 18.9271L0 15.5729L7.86861 11.5L0 7.42708L1.92701 4.07292L9.39416 8.78472L9.07299 0H12.927L12.6058 8.78472L20.073 4.07292L22 7.42708L14.1314 11.5L22 15.5729L20.073 18.9271L12.6058 14.2153L12.927 23H9.07299Z" fill="white" />
            </svg>
        </div>
        Юридическая оценка участка в подарок 
        <div class="promo-bar__icon">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.07299 23L9.39416 14.2153L1.92701 18.9271L0 15.5729L7.86861 11.5L0 7.42708L1.92701 4.07292L9.39416 8.78472L9.07299 0H12.927L12.6058 8.78472L20.073 4.07292L22 7.42708L14.1314 11.5L22 15.5729L20.073 18.9271L12.6058 14.2153L12.927 23H9.07299Z" fill="white" />
            </svg>
        </div>
        при записи и посещения офиса компании Кейстрой до 30.04.2024
    </div>`;

promoBar.innerHTML = promoText.repeat(4);

document.body.appendChild(promoBar);
document.body.style.paddingBottom = promoBar.offsetHeight + 'px';
