$(function(){
    
    //SLIDER MOSAICO
    
    var indiceAtual = 0;
    var indiceMaximo = $('.single img').length;
    var delay = 3000;

    initSlider();
    function initSlider(){
        $('.single img').eq(0).fadeIn()
        setInterval(function(){
            alternarSlider();
        },delay);
        }

    function alternarSlider(){
        $('.single img').eq(indiceAtual).fadeOut(2000);
        indiceAtual+=1
        if(indiceAtual == indiceMaximo)
            indiceAtual = 0;
        $('.single img').eq(indiceAtual).fadeIn(2000)
    }    




    //SLICK SLIDER
    $('.exames .container').slick({
        centerMode:false,
			slidesToShow:3,
			arrows:false,
			infinite:false,
			responsive:[

				{
					breakpoint:768,
					settings:{
						arrows:false,
						dots:true,
						infinite:false,
						centerMode:false,
						slidesToShow:2
					}
				},
				{
					breakpoint:480,
					settings:{
						arrows:false,
						dots:true,
						infinite:false,
						centerMode:false,
						slidesToShow:1
					}
				}

			]
	});

    $('.cirurgias .container').slick({
            centerMode:false,
			slidesToShow:3,
			arrows:false,
			infinite:false,
			responsive:[

				{
					breakpoint:768,
					settings:{
						arrows:false,
						dots:true,
						infinite:false,
						centerMode:false,
						slidesToShow:2
					}
				},
				{
					breakpoint:480,
					settings:{
						arrows:false,
						dots:true,
						infinite:false,
						centerMode:false,
						slidesToShow:1
					}
				}

			]
	});

    $('.depoimentos .container').slick({
        centerMode:false,
        slidesToShow:1,
        arrows:false,
        dots:true,
        infinite:false,
});


})