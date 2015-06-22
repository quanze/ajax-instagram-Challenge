var queryUrl = 'https://api.instagram.com/v1/media/popular';

$.ajax({
    url: queryUrl,
    type: 'GET',
    data:  {client_id: '61f8b631abd34732a3bcd8c73d0d73a9'},
    dataType: 'jsonp',
    success: function(arr) {printImages(arr);
       
    },
    error: function() {}

});



var printImages = function printimg(arr) {
    for (var i = 0; i < 10; i++) {

        $('.listy').append("<li><img src=" + arr.data[i].images.standard_resolution.url + "></li>");
        $('.listy').append("<li>"+i+"</li>");
    }
}
