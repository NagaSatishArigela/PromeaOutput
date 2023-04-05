/*
Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]
Facebook:
https://www.facebook.com/sharer.php?u=[post-url]
WhatsApp:
https://api.whatsapp.com/send?text=[post-title] [post-url]
Linkedin:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
    // const shareImg = document.querySelector(".shareImg");
    let postUrl = encodeURI(document.location.href);
    console.log(postUrl);
    let postTitle = encodeURI(document.title);
    let hashtags = "PromeaLtd"
    // let postImg = encodeURI(shareImg.src);

    facebookBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postUrl}`)
    whatsappBtn.setAttribute("href", `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`)
    twitterBtn.setAttribute("href", `https://twitter.com/share?url=${postUrl}&text=${postTitle}&via=[via]&hashtags=${hashtags}`)
}

init();