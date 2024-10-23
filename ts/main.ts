import './sampe-project/index.html';

type Link = {
    url: string
    text: string
}

type Image = {
    url: string
    alt: string
}

type WebPage = {
    title: string
    description: string
    link: Link
    image: Image
}

const pages: WebPage[] = [
    {
        title: "The Basic Styleguide",
        description: "This guide helps you get started with essential design principles and guidelines for clean, effective web design.",
        link: { text: "Check this out!", url: "./the-basic-styleguide/index.html" },
        image: { alt: "Design Thumbnail", url: "./the-basic-styleguide/images/photo-1726853546098-380e29da9e31.avif" }
    }
]

const webpages_list = document.querySelector("#webpages-list")

if (webpages_list != null) {
    pages.forEach(page => {
        const div_card_content = document.createElement('div')
        div_card_content.className = "card-content"

        const h3 = document.createElement('h3')
        h3.innerText = page.title

        const p = document.createElement('p')
        p.innerText = page.description

        const a = document.createElement('a')
        a.href = page.link.url
        a.innerText = page.link.text

        div_card_content.append(h3, p, a)

        const img = document.createElement('img')
        img.src = page.image.url
        img.alt = page.image.alt

        const div_card = document.createElement('div')
        div_card.className = "card"
        div_card.append(img, div_card_content)

        const list_item = document.createElement('li')
        list_item.append(div_card)

        webpages_list.append(list_item)
    })
}
