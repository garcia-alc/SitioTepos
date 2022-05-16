(function (){
    const sliders = [...document.querySelectorAll('.anuncios_body')];

    
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;
    
    buttonNext.addEventListener('click' , ()=>{
        changePosition(1);
    })

    buttonBefore.addEventListener('click' , ()=>{
        changePosition(-1);
    })

    const changePosition = (add) =>{
        const currentAnuncios = document.querySelector('.anuncios_body--show').dataset.id;

        value = Number(currentAnuncios);
        value+= add;

        sliders[Number(currentAnuncios)-1].classList.remove('anuncios_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length :1;
        }
        sliders[value-1].classList.add('anuncios_body--show');
    }


})();