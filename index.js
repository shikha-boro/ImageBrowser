let  images = [];
let img = null;
function init() {

    fetch("/image-viewer/image.json").then(responseReceived)
   
}
    function responseReceived(response)
    {
        console.log(response);
        response.json().then(responseBody);
    }
     function responseBody(body)
    {
     images=body.images;
     img = document.querySelector("#orchidImage");
     img.setAttribute('src', images[0]);
    }

   





window.addEventListener('load', init);

let nextButton = document.querySelector("#next");
nextButton.addEventListener('click', toggleImage);
let prevButton = document.querySelector("#previous");
prevButton.addEventListener('click', toggleImage)

function toggleImage(event) {
    if (event.target.id == "next") {
        changeImage();
    }
    else if (event.target.id == "previous") {
        changePreviousImage();
    }
}
let count = 1;
function changeImage() {
    if (count < images.length - 1) {
        let x=++count
        let imagePath = images[x];//images[0,1,2,3]
        img.setAttribute('src', imagePath);
     
    }

}
function changePreviousImage() {
    if (count > 0) {
        img.setAttribute('src', images[--count]);
    }
}






