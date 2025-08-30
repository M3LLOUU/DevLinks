function toggleMode(){
    const htmlElement = document.documentElement;

    if (htmlElement.classList.contains('Light')) {
        htmlElement.classList.remove('Light');
    } else {
        htmlElement.classList.add('Light');
    }

    const img = document.querySelector('#profile img');

    if (htmlElement.classList.contains('Light')) {
        img.setAttribute('src', './assets/avatar-Light.png');

    } else {
        img.setAttribute('src', './assets/avatar-Dark.png');
    }

}