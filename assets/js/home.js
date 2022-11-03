// ----------- Authors Section ----------- //
authorsList = document.getElementById('authorsList')
for (let i = 0; i < authors.length; i++) {
  // Create Elements
  div = document.createElement('div')
  a = document.createElement('a')
  // Set values of a
  a.setAttribute('class', 'a-link')
  // Create name for url
  author = authors[i].replace(/\./g, "-").replace(/\ /g, "-")
//   a.setAttribute('href', `/author/${author.toLowerCase()}`)
  a.setAttribute('href', "#")
  a.innerText = "- " + authors[i]
  a.style.textTransform = "capitalize"
  // Append a to li
  div.appendChild(a)
  authorsList.appendChild(div)
}

// ----------- Categories Section ----------- //
section = document.getElementById('categories')
// Loop through all categories and display them
for (let i = 1; i < categories.length + 1; i++) {
    // Create Elements
    figure = document.createElement('figure')
    img = document.createElement('img')
    caption = document.createElement('figcaption')
    a = document.createElement('a')

    // Add class to figure
    figure.setAttribute("class", `gallery__item gallery__item--${i}`)
    // Configure image
    img.setAttribute("src", "/assets/images/category/quotes-category-" + categories[i - 1] + ".webp")
    img.setAttribute("alt", "Quotes on " + categories[i - 1] + " by indian author")
    img.setAttribute("class", "gallery__img")
    // Append image to figure
    figure.appendChild(img)
    // Add class to figure caption
    caption.setAttribute("class", "box-desc")
    // Append caption to figure
    figure.appendChild(caption)
    // Configure a
    a.setAttribute("href", "#")
    // a.setAttribute("href", `/quotes/${categories[i - 1]}`)
    a.setAttribute("class", "d-flex")
    a.innerText = categories[i - 1]
    a.style.textTransform = "capitalize"
    // Append a to figure caption
    caption.appendChild(a)
    // Append figure to section
    section.appendChild(figure)
}