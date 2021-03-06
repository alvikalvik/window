function images() {
    const imgWrapper = document.querySelector('.works .row');
    const imgPopup = document.createElement('div');
    const bigImg = document.createElement('img');

    function initImages() {
        imgPopup.classList.add('popup');
        imgPopup.style.display = 'none';
        imgPopup.style.justifyContent = 'center';
        imgPopup.style.alignItems = 'center';

        bigImg.style.maxWidth = '98vw';
        bigImg.style.maxHeight = '98vh';

        imgPopup.append(bigImg);
        imgWrapper.append(imgPopup);

        imgWrapper.addEventListener('click', (evt) => {
            const target = evt.target;
            if (target) {
                evt.preventDefault();
            }

            if (target && target.matches('.preview')) {
                showBigImg(target.parentElement.getAttribute('href'));
            }

            if (target && target === imgPopup) {
                hideBigImg();
            }
        });
    }

    function showBigImg(src) {
        bigImg.setAttribute('src', src);
        imgPopup.style.display = 'flex';
    }

    function hideBigImg() {
        imgPopup.style.display = 'none';
    }

    initImages();
}

export default images;