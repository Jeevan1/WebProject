let packages = {
    data: [
        {
            packageName: "Kathmandu",
            place : "Pasupatinath Temple",
            cost : "$300",
            rating:"⭐⭐⭐⭐⭐",
            duration: "2 days",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/ktm/3.jpg",
        },
        {
            packageName: "Pokhara",
            place : "Phewa tal",
            cost : "$500",
            duration: "1Week",
            rating:"⭐⭐⭐⭐⭐",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/pkh/2.jpg",
        },
        {
            packageName: "Kathmandu",
            place : "Sivapuri National Park",
            cost : "$300",
            rating:"⭐⭐⭐⭐⭐",
            duration: "2 days",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/ktm/7.png",
        },
        {
            packageName: "Rasuwa",
            place : "Gosainkunda",
            cost : "$500",
            duration: "1Week",
            rating:"⭐⭐⭐⭐⭐",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/rwa/2.jpg",
        },
        {
            packageName: "Pokhara",
            place : "Mahendra cave",
            cost : "$500",
            duration: "1Week",
            rating:"⭐⭐⭐⭐⭐",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/pkh/4.jpg",
        },
        {
            packageName: "Pokhara",
            place : "Gupteshwor Mahadev Cave",
            cost : "$500",
            duration: "1Week",
            rating:"⭐⭐⭐⭐⭐",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/pkh/5.jpg",
        },
        {
            packageName: "Rasuwa",
            place : "Deurali Dada",
            cost : "$500",
            duration: "1Week",
            rating:"⭐⭐⭐⭐⭐",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/rwa/3.jpg",
        },
        {
            packageName: "Pokhara",
            place : "Dhandruk",
            cost : "$500",
            duration: "1Week",
            rating:"⭐⭐⭐⭐⭐",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/rwa/4.jpg",
        },
        {
            packageName: "Kathmandu",
            place : "Baudhanath Stupa",
            cost : "$300",
            rating:"⭐⭐⭐⭐⭐",
            duration: "2 days",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/ktm/4.jpg",
        },
        {
            packageName: "Pokhara",
            place : "Pokhara",
            cost : "$500",
            duration: "1Week",
            rating:"⭐⭐⭐⭐⭐",
            book_link: "#",
            chart_link: "#",
            image: "photos/pkh/3.jfif",
        },
        {
            packageName: "Pokhara",
            place : "phewa tal",
            cost : "$5000",
            duration: "2 Weeks",
            rating:"⭐⭐⭐⭐⭐",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/pkh/1.jpg",
        },
        {
            packageName: "Bhaktapur",
            place : "Bhaktapur Darbar Square",
            cost : "$5600",
            rating:"⭐⭐⭐⭐⭐",
            duration: "2 days",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/bkt/1.jpg",
        },
        {
            packageName: "Rasuwa",
            place : "Langtang National Park",
            cost : "$5100",
            rating:"⭐⭐⭐⭐⭐",
            duration: "1Week",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/rwa/1.jpg",
        },
        {
            packageName: "Bhaktapur",
            place : "Siddha Pokhari",
            cost : "$200",
            rating:"⭐⭐⭐⭐⭐",
            duration: "2 days",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/bkt/3.webp",
        },
        {
            packageName: "Bhaktapur",
            place : "Changu Narayan",
            cost : "$500",
            rating:"⭐⭐⭐⭐⭐",
            duration: "2 days",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/bkt/4.jpg",
        },
        {
            packageName: "Kathmandu",
            place : "Kathmandu Durbar Square",
            cost : "$300",
            rating:"⭐⭐⭐⭐⭐",
            duration: "2 days",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/ktm/2.jpeg",
        },
        {
            packageName: "Bhaktapur",
            place : "Nyatapola Temple",
            cost : "$300",
            rating:"⭐⭐⭐⭐⭐",
            duration: "2 days",
            book_link: "/booknow",
            chart_link: "#",
            image: "photos/bkt/5.jpg",
        },
        
    ],
};

for(let i of packages.data){
    //create Card
    let card = document.createElement("div");
    //Card should have packageName and should stay hidden
    card.classList.add("card",i.packageName,"hide");

    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //Container
    let container = document.createElement("div");
    container.classList.add("container");

    //Places name
    let name = document.createElement("h4");
    name.classList.add("places-name");
    name.innerText = i.place.toUpperCase();
    container.appendChild(name);

    //duration
    let time = document.createElement("p");
    time.classList.add("duration");
    time.innerText = "Duration: "+ i.duration.toUpperCase();
    container.appendChild(time);

    //Cost
    let cost = document.createElement("h5");
    cost.classList.add("cost");
    cost.innerText = "Cost: "+ i.cost.toUpperCase();
    container.appendChild(cost);

    //Rating
    let rate = document.createElement("p");
    rate.classList.add("rating");
    rate.innerText = "Rating: "+i.rating;
    container.appendChild(rate);

    //Book-now
    let book = document.createElement("button");
    book.classList.add("button");
    let links = document.createElement("a");
    links.setAttribute("href",i.book_link);
    links.classList.add('link');
    links.innerText = "Book Now";
    book.innerText = "";
    book.appendChild(links);
    container.appendChild(book);

    //Add to chart
    let chart = document.createElement("button");
    chart.classList.add("button");
    let link2 = document.createElement("a");
    link2.setAttribute('href',i.chart_link);
    link2.classList.add("link");
    link2.innerText = "Add to chart";
    chart.innerText = "";
    chart.appendChild(link2);
    container.appendChild(chart);

    card.appendChild(container);
    document.getElementById("packages").appendChild(card);
}


//Parameter passed from buttons
function  filterPackage(value){
    //Buttons class Code
    let buttons = document.querySelectorAll('.button-value');
    
    buttons.forEach((button) =>{
        //check id the value equal to innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
            button.style.color="red";
            
        }
        if(value.toUpperCase()== ''){
          button.classList.add('empty');
        }
        else{
            button.classList.remove("active");
           
        }
        
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if(value == "all"){
            element.classList.remove("hide");
        }else{
            //check if elements contain category class
            if(element.classList.contains(value)){
                //display element basd on category
                element.classList.remove("hide");
            }else{
                //hide other elements
                element.classList.add("hide");
            }
        }
    })
}

//Search button click
document.getElementById("search").addEventListener('click',() =>{
    //Initialization
    let searchInput = document.getElementById("search-place").value;
    let elements = document.querySelectorAll(".places-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elemrnts
    elements.forEach((element,index) =>{
        //check if text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching card
            cards[index].classList.remove('hide');
        }
        if(element==null){
            
        }
        else{
            //hide others
            cards[index].classList.add("hide");
            
        }
    });
});

//Initally display all products.
window.onload = ()=>{
    filterPackage('all');
}

