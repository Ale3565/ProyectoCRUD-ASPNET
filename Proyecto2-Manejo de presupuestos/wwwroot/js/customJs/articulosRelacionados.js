$(document).ready(function() {

function get_information(link, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", link, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}


if (window.location.href.indexOf("/en") > -1) {
var target="https://www.paycomet.com/news/en/";

}else{
    
var target="https://www.paycomet.com/news"; 

}

get_information(target, function(text) {

    if(text!== undefined & text!== ""){
        for (var i = 0; i < 3; i++) {

            var link = $(text).find(".gridblog .card__image:eq("+i+") a").attr("href");
            var image = $(text).find(".gridblog .card__image:eq("+i+") a picture img").attr("src");
            var title = $(text).find(".gridblog .card__title:eq("+i+")").text();
            var date = $(text).find(".gridblog .card__date:eq("+i+")").text();
            var content = $(text).find(".gridblog .card__excerpt:eq("+i+") p").text();
            var categoriesTitle1 = $(text).find(".gridblog .card__categories:eq("+i+") a:eq(0)").text();
            var categoriesLink1 = $(text).find(".gridblog .card__categories:eq("+i+") a:eq(0)").attr("href");
            var categoriesTitle2 = $(text).find(".gridblog .card__categories:eq("+i+") a:eq(1)").text();
            var categoriesLink2 = $(text).find(".gridblog .card__categories:eq("+i+") a:eq(1)").attr("href");
            var categoriesTitle3 = $(text).find(".gridblog .card__categories:eq("+i+") a:eq(2)").text();
            var categoriesLink3 = $(text).find(".gridblog .card__categories:eq("+i+") a:eq(2)").attr("href");

            if(link!== undefined & image!== undefined & title!== undefined & date!== undefined & content!== undefined){
                
                var show = true;  
                $(".article"+i+" .articleLink").attr("href", link);
                $(".article"+i+" img").attr("src", image);
                $(".article"+i+" .cards__date").text(date);
                $(".article"+i+" .cards__title").text(title);
                $(".article"+i+" .cards__content").text(content);

                if((categoriesTitle1!== undefined) & (categoriesLink1!== undefined) ){
                    if((categoriesTitle2!== undefined) & (categoriesLink2!== undefined) ){
                        $(".article"+i+" .cards__categories").append( "<a class='categoryIcon' target='_blank' href='"+categoriesLink1+"' title='"+categoriesTitle1+"'>"+categoriesTitle1+"</a>" );
                    }else{
                        $(".article"+i+" .cards__categories").append( "<a target='_blank' href='"+categoriesLink1+"' title='"+categoriesTitle1+"'>"+categoriesTitle1+"</a>" );
                    }  
                }
                if((categoriesTitle2!== undefined) & (categoriesLink2!== undefined) ){
                    if((categoriesTitle3!== undefined) & (categoriesLink3!== undefined) ){
                        $(".article"+i+" .cards__categories").append( "<a class='categoryIcon' target='_blank' href='"+categoriesLink2+"' title='"+categoriesTitle2+"'>"+categoriesTitle2+"</a>" );
                    }else{
                        $(".article"+i+" .cards__categories").append( "<a target='_blank' href='"+categoriesLink2+"' title='"+categoriesTitle2+"'>"+categoriesTitle2+"</a>" );
                    }
                }
                if((categoriesTitle3!== undefined) & (categoriesLink3!== undefined) ){
                    $(".article"+i+" .cards__categories").append( "<a class='categoryIcon' target='_blank' href='"+categoriesLink3+"' title='"+categoriesTitle3+"'>"+categoriesTitle3+"</a>" );
                }
            }else{
                var show = false;
            }
        }
        if(show == true){
            $(".articulos-solutions-container").css("display","block");
        }
    }

});



});