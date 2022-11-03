// ----------- Navigation Toggle ----------- //
var navigation = document.getElementById("navigation");
var navbar = document.getElementById("navbar");
function navOpen() {
  if (navbar.style.display == "") {
    navigation.style.visibility = "visible";
    navbar.style.display = "flex";
  } else {
    navigation.style.visibility = "hidden";
    navbar.style.display = "none";
  }
}
function navClose() {
  if (navbar.style.display == "flex") {
    navbar.style.display = "";
    navigation.style.visibility = "hidden";
  }
}

// ----------- Sticky SearchBar ----------- //
window.onscroll = function () {
  scrollDown();
};
// Get the SearchBar
searchBar = document.getElementById("search-bar");
let scrolltop = document.getElementById('scroll-top');

// Get the offset of searchBar
sticky = searchBar.offsetTop;
function scrollDown() {
  if (window.pageYOffset >= sticky) {
    searchBar.classList.add("sticky");
    searchBar.children[0].style.width = "70%";
    scrolltop.style.display = "block";
  } else {
    searchBar.children[0].style.width = "";
    searchBar.classList.remove("sticky");
    scrolltop.style.display = "none";
  }
}

// -------- Categories --------
categories = ["life", "love", "attitude", "business", "programming", "sports", "motivational", "relationship", "philosophy", "spirituality", "friendship", "travel", "family", "wedding", "psychology", "universe"]

// ----------- Menu Section ----------- //
menubar = document.getElementById('menubar')
for (let i = 1; i < categories.length + 1; i++) {
  // Create Elements
  li = document.createElement('li')
  a = document.createElement('a')
  // Set values of a
  a.setAttribute('class', 'nav-link')
  a.setAttribute('href', "#")
  // a.setAttribute('href', `/quotes/${categories[i]}`)
  a.innerText = categories[i]
  a.style.textTransform = "capitalize"
  // Append a to li
  li.appendChild(a)
  menubar.appendChild(li)
}


// --------  Authors -------- 
authors = [
 "Buddha",
 "Sandeep Maheswari",
 "Dr.Vivek Bindra",
 "Sadhguru",
 "Mahatma Gandhi",
 "Dr.B.R Ambedkar",
 "Jawaharlal Nehru",
 "Indira Gandhi",
 "Mother Teresa",
 "Sri Aurobindo",
 "Lal Bahadur Shastri",
 "Dr APJ Abdul Kalam",
 "Homi J. Bhabha",
 "Valabhbhai Patel",
 "Rabindranath Tagore",
 "Kalpana Chawla",
 "Ratan Tata",
 "Mary Kom",
 "Kapil Dev",
 "Sachin Tendulkar",
 "Azim Premji",
 "Mukesh Ambani",
 "Smriti Irani",
 "Aamir Khan",
 "M.S Dhoni",
 "Virat Kolhi",
 "Aacharya Chanakya",
 "Aryabhatta",
 "Sonu Sharma",
 "Narendra Modi",
 "Bhagat Singh",
 "Swami Vivekananda",
 "Ramanuja",
 "Srinivasa Ramanujan"
]
authors.sort()