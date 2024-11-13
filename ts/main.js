var pages = [
    {
        title: "The Basic Styleguide",
        description: "This guide helps you get started with essential design principles and guidelines for clean, effective web design.",
        link: { text: "Check this out!", url: "./the-basic-styleguide/Design/index.html" },
        image: { alt: "Design Thumbnail", url: "./the-basic-styleguide/images/photo-1726853546098-380e29da9e31.avif" }
    },
    {
        title: "Lijcoesh",
        description: "Een website zo mooi dat Van Gogh het niet eens zou kunnen maken als die nu zou leven",
        link: { text: "Kijk hiernaar!", url: "./Tanis/index.html" },
        image: { alt: "Design Thumbnail", url: "./the-basic-styleguide/images/photo-1726853546098-380e29da9e31.avif" }
    },
    {
        title: "StardropMeadow",
        description: "Colorpalette",
        link: { text: "StardropMeadow", url: "./StardropMeadow/index.html" },
        image: { alt: "Thumbnail", url: "./StardropMeadow/Images/stardrop.jpg" }
    },
    {
        title: "je ne sais pas",
        description: "ぐずぐず煮え切らない。甘い迷い。僕は優柔不断な男だろうか、それすらも決められない。",
        link: { text: "look away!", url: "./優柔不断/index.html" },
        image: { alt: "Cool pic", url: "./the-basic-styleguide/images/wallpaper2.jpg" }
    },
    {
        title: "The Parkinson Styleguide",
        description: "This guide helps you get started with parkinson",
        link: { text: "Check this out!", url: "./the-parkinson-styleguide/index.html" },
        image: { alt: "Design Thumbnail", url: "./the-parkinson-styleguide/images/old-man-symptoms-parkinson-disease_24911-63254.avif" }
    }
];
var webpages_list = document.querySelector("#webpages-list");
if (webpages_list != null) {
    pages.forEach(function (page) {
        var div_card_content = document.createElement('div');
        div_card_content.className = "card-content";
        var h3 = document.createElement('h3');
        h3.innerText = page.title;
        var p = document.createElement('p');
        p.innerText = page.description;
        var a = document.createElement('a');
        a.href = page.link.url;
        a.innerText = page.link.text;
        div_card_content.append(h3, p, a);
        var img = document.createElement('img');
        img.src = page.image.url;
        img.alt = page.image.alt;
        var div_card = document.createElement('div');
        div_card.className = "card";
        div_card.append(img, div_card_content);
        var list_item = document.createElement('li');
        list_item.append(div_card);
        webpages_list.append(list_item);
    });
}
