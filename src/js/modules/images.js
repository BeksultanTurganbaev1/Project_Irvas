const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');
    let time;
    
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        imgPopup.classList.add('popup');
        document.body.style.overflow = 'hidden';

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            time = setTimeout(openModalForm, 6000);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            imgPopup.classList.toggle('popup');
            clearInterval(time);
        }
    });

    function openModalForm() {
        imgPopup.classList.toggle('popup');
        document.querySelector('.popup').style.display = 'block';
    }
};

export default images;