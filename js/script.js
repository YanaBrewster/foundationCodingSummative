var placesCards = document.getElementById("placeDetails") ;
var breakfastCards = document.getElementById("mealOption") ;
var totalCost = document.getElementById("cost") ;

// DATABASE/OBJECT

var allPlaces = [
  {
    type: "hotel",
    places: [
      {
        id: 1,
        name: "QT Hotel Wellington",
        stars: "4stars.png",
        description: "Opposite the Museum of New Zealand Te Papa Tongarewa," + " this quirky boutique hotel is 6.1 km from Wellington International Airport." + " This smoke-free hotel features a restaurant, an indoor pool, and 2 bars/lounges. WiFi in public areas is free.",
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Pool", "Free Wifi", "Air Conditioning", "Spa", "Restaurant", "Gym"],
        location: "Wellington",
        address: "90 Cable Street, Te Aro, Wellington, 6011",
        nearby:[
          {
            place: "Te Papa",
            walk: 3
          },
          {
            place: "Courtenay Place",
            walk: 4
          },
          {
            place: "Michael Fowler Centre",
            walk: 6
          }
        ],
        price: 157,
        thumbnail: "QTExterior-Wellington.jpg",
        photo: "QTRoom-Wellington.jpg"
      },
      {
        id: 2,
        name: "Copthorne Hotel Wellington",
        stars: "4stars.png",
        description: "Across the street from Wellington Harbour," + " this refined hotel is a 6-minute walk from the Museum of New Zealand Te Papa Tongarewa and 3 km from Wellington Botanic Garden." + " Refined rooms offer balconies, free Wi-Fi, flat-screen TVs and minibars, plus tea and coffeemaking facilities." ,
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Soundproof Rooms", "Free Wifi", "Restaurant", "Breakfast Available", "Business Services", "Parking Available"],
        location: "Wellington",
        address: "100 Oriental Parade, Oriental Bay, Wellington 6011",
        nearby:[
          {
            place: "Te Papa",
            walk: 8
          },
          {
            place: "Courtenay Place",
            walk: 8
          },
          {
            place: "Mount Victoria Lookout",
            walk: 18
          }
        ],
        price: 157,
        thumbnail: "corpthorneExterior-Wellington.jpg",
        photo: "corpthorneRoom-Wellington.jpg"
      },
      {
        id: 4,
        name: "Copthorne Auckland",
        stars: "4stars.png",
        description: "A restaurant, a bar/lounge, and self parking are available at this smoke-free hotel. WiFi in public areas is free. Other amenities include 24-hour room service, concierge services, and dry cleaning.",
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Soundproof Rooms", "Free Wifi", "Restaurant", "Breakfast Available", "Business Services", "Parking Available"],
        location: "Auckland",
        address: "150 Anzac Avenue, Auckland",
        nearby:[
          {
            place: "University of Auckland",
            walk: 5
          },
          {
            place: "Spark Arena",
            walk: 9
          },
          {
            place: "Queen Street Shopping District",
            walk: 11
          }
        ],
        price: 157,
        thumbnail: "CopthorneHotelExterior-Auckland.jpg",
        photo: "CopthorneHotelRoom-Auckland.jpg"
      },
      {
        id: 5,
        name: "Rydges Auckland",
        stars: "4stars.png",
        description: "A restaurant, a 24-hour fitness center," + " and a bar/lounge are available at this smoke-free hotel." + " WiFi in public areas is free. Additionally, a coffee shop/café,",
        sleeps: "1-2 people <br> min stay 1 night, max stay 5 nights",
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Air Conditioning", "Free Wifi", "Restaurant", "Breakfast Available", "Business Services", "Parking Available"],
        location: "Auckland",
        address: "59 Federal St, Auckland, 1010",
        nearby:[
          {
            place: "SkyCity Casino",
            walk: 2
          },
          {
            place: "Sky Tower",
            walk: 2
          },
          {
            place: "Queen Street Shopping District",
            walk: 3
          }
        ],
        price: 157,
        thumbnail: "rydgesExterior-Auckland.jpg",
        photo: "rydgesRoom-Auckland.jpg"
      },
      {
        id: 7,
        name: "Heartland Hotel Queenstown",
        stars: "4stars.png",
        description: "Along with a restaurant, this smoke-free hotel has a bar/lounge and a coffee shop/café. Free WiFi in public areas and free self parking are also provided",
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Free Parking", "Free Wifi", "Restaurant", "Breakfast Available", "Bar", "Room Service"],
        location: "Queenstown",
        address: "27 Stanley Street, Queenstown",
        nearby:[
          {
            place: "Queenstown Mall",
            walk: 4
          },
          {
            place: "Queenstown Beach",
            walk: 5
          },
          {
            place: "Skycity Queenstown Casino",
            walk: 6
          }
        ],
        price: 157,
        thumbnail: "HeartlandHotelQueenstownExterior.jpg",
        photo: "HeartlandHotelQueenstownRoom.jpg"
      },
      {
        id: 8,
        name: "Rydges Lakeland Resort Queenstown",
        stars: "3stars.png",
        description: "Along with a restaurant, this smoke-free hotel has an outdoor pool and a bar/lounge." + " WiFi in public areas is free. Other amenities include a sauna, a rooftop terrace, and self parking.",
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Pool", "Free Wifi", "Restaurant", "Breakfast Available", "Bar", "Spa"],
        location: "Queenstown",
        address: "38-54 Lake Esplanade, Queenstown",
        nearby:[
          {
            place: "Steamer Wharf",
            walk: 6
          },
          {
            place: "TSS Earnslaw Steamship",
            walk: 7
          },
          {
            place: "Fear Factory Queenstown",
            walk: 8
          }
        ],
        price: 157,
        thumbnail: "RydgesLakelandResortQueenstownExterior.jpg",
        photo: "RydgesLakelandResortQueenstownRoom.jpg"
      },
    ]
  },
  {
    type: "motel",
    places: [
      {
        id: 10,
        name: "Apollo Lodge Motel",
        stars: "4stars.png",
        description: "This laid-back motel is a 9-minute walk" + " from Museum of New Zealand Te Papa Tongarewa and 4 km from the Wellington Zoo. " + "It's 7 km from tours at The Weta Cave.",
        sleeps: {
          minLength: 3,
          maxLength: 10,
          minPeople: 2,
          maxPeople: 4
        },
        amenities: ["Free Wi-Fi", "Parking — Free", "Airport shuttle", "Good for kids"],
        location: "Wellington",
        address: "49 Majoribanks St, Mount Victoria, Wellington 6011",
        nearby: [
          {
            place: "Te Papa",
            walk: 9
          },
          {
            place: "Courtenay Place",
            walk: 1
          },
          {
            place: "New World Supermarket",
            walk: 5
          }
        ],
        price: 90,
        thumbnail: "apolloMotelExterior-Wellington.jpg",
        photo: "apolloMotelRoom-Wellington.jpg"
      },
      {
        id: 11,
        name: "Capital View Motor Inn",
        stars: "4stars.png",
        description: "Just 5 minutes' walk from Cuba Street's bars and restaurants," + " Capital View Motor Inn offers self-contained apartments with views of the harbor and Wellington city. " + "Guests enjoy free onsite parking and unlimited free WiFi." ,
        sleeps: {
          minLength: 3,
          maxLength: 10,
          minPeople: 2,
          maxPeople: 4
        },
        amenities: ["Free Wi-Fi", "Parking — Free", "Airport shuttle", "Good for kids", "Non-smoking rooms" ],
        location: "Wellington",
        address: "12 Thompson Street, 6011 Wellington",
        nearby: [
          {
            place: "Cuba Street",
            walk: 5
          },
          {
            place: "Courtenay Place",
            walk: 10
          }
        ],
        price: 90,
        thumbnail: "capitalViewMotorInnExterior-Wellington.jpg",
        photo: "capitalViewMotorInnRoom-Wellington.jpg"
      }

    ]
  },
  {
    type:"house",
    places: [
      {
        id: 19,
        name: "The Balcony Suite",
        stars: "4stars.png",
        description: "The Balcony Suite is a true home away from home." + " It comes equipped with two bedrooms: one with a queen sized four poster bed, the other with a queen sized bed and a single bed. " + "There is a separate modern bathroom that also contains laundry facilities.",
        sleeps: {
          minLength: 2,
          maxLength: 15,
          minPeople: 1,
          maxPeople: 4
        },
        amenities: ["Free Wi-fi", "Air Conditioning", "TV", "Washer & Dryer", "Children Welcome"],
        location: "Wellington",
        address: "Thorndon, Wellington City, Wellington, New Zealand",
        nearby: [
          {
            place: "Bus Stop",
            walk: 1
          },
          {
            place: "CBD",
            walk: 20
          },
          {
            place: "Westpac Stadium",
            walk: 15
          }
        ],
        price: 240,
        thumbnail: "balconySuiteExterior-Wellington.jpg",
        photo: "balconySuiteRoom-Wellington.jpg"
      },
      {
        id: 20,
        name: "Stunning contemporary city fringe town house",
        stars: "5stars.png",
        description: "Close to town in a sunny suburb with off street parking and close to bus stop." + " Cable car near by as is the university and Zealandia. " + "Easy access to motorway and ferry.",
        sleeps: {
          minLength: 2,
          maxLength: 15,
          minPeople: 1,
          maxPeople: 4
        },
        amenities: ["Free-Wifi", "Air Conditioning", "No Smoking", "Children Welcome"],
        location: "Wellington",
        address: "Northland, Wellington City, Wellington, New Zealand",
        nearby: [
          {
            place: "Iconic Kelburn village",
            walk: 10
          },
          {
            place: "Botanic Gardens",
            walk: 10
          }
        ],
        price: 240,
        thumbnail: "cityfringetownhouseExterior-Wellington.jpg",
        photo: "cityfringetownhouseRoom-Wellington.jpg"
      }
    ]
  },
  {
    type:"hostel",
    places: [
      {
        id: 28,
        name: "YHA Wellington Backpacker Hostel",
        stars: "4stars.png",
        description: "Set in the inner-city Te Aro district," + " this modern youth hostel is a 5-minute walk from the Museum of New Zealand Te Papa Tongarewa and a 14-minute walk from the National War Memorial." + " Bright rooms offer free Wi-Fi; most provide en suite bathrooms. ",
        sleeps: {
          minLength: 1,
          maxLength: 10,
          minPeople: 1,
          maxPeople: 1
        },
        amenities: ["Wifi", "Laundry service", "Smoke-free property", "Child care"],
        location: "Wellington",
        address: "292 Wakefield St, Te Aro, Wellington 6011",
        nearby: [
          {
            place: "Te Papa",
            walk: 5
          },
          {
            place: "Courtenay Place",
            walk: 2
          },
          {
            place: "New World Supermarket",
            walk: 1
          }
        ],
        price: 30,
        thumbnail: "yhaExterior-Wellington.jpg",
        photo: "yhaRoom-Wellington.jpg"
      },

      {
        id: 29,
        name: "Hotel Waterloo & Backpackers",
        stars: "4stars.png",
        description: "Hotel Waterloo & Backpackers offers budget accommodation in the centre of Wellington. " + "It features a 24-hour guest kitchen, self-service laundry facilities and a games room with pool tables." + " Guests receive 1GB of free WiFi per 24 hours. ",
        sleeps: {
          minLength: 1,
          maxLength: 10,
          minPeople: 1,
          maxPeople: 1
        },
        amenities: ["Free-Wifi", "Family Rooms", "24-hour front desk", "Restaurant"],
        location: "Wellington",
        address: "1 Bunny Street, 6011 Wellington",
        nearby: [
          {
            place: "Wellington Train Station",
            walk: 1
          },
          {
            place: "New World Metro",
            walk: 2
          },
        ],
        price: 30,
        thumbnail: "HotelWaterlooBackpackersExterior-Wellington.jpg",
        photo: "HotelWaterlooBackpackersRoom-Wellington.jpg"
      }
    ]
  }
]

// FILTER SEARCH BAR IN JQUERY

var city, travellers, days;

$(document).ready(function(){

  $(".auckland").click(function(){
    city = "auckland";
    console.log(city);
  });

  $(".wellington").click(function(){
    city = "wellington";
    console.log(city);
  });
  $(".queenstown").click(function(){
    city = "queenstown";
    console.log(city);
  });

  $(".trv1").click(function(){
    travellers = 1;
    console.log(travellers);
  });
  $(".trv2").click(function(){
    travellers = 2;
    console.log(travellers);
  });
  $(".trv3").click(function(){
    travellers = 3;
    console.log(travellers);
  });
  $(".trv4").click(function(){
    travellers = 4;
    console.log(travellers);
  });

  function dateDiff() {

    var start = $("#datePicker1").datepicker("getDate");
    var end = $("#datePicker2").datepicker("getDate");
    days  = (end - start)/1000/60/60/24;
    console.log(days);
    return days;
  }

  $("#search").click(function(){
    var city = document.getElementById("city").value ;
    var travellers = document.getElementById("travellers").value ;

    dateDiff();

    getPlaces(travellers, days, city);

  });

  // FILTER/VALIDATION FUNCTION IN JS

  function getPlaces(t, d, c){

    placesCards.innerHTML =" ";
    var i, j;
    for (i = 0 ; i < allPlaces.length ; i ++) {
      for (j = 0 ; j < allPlaces[i].places.length ; j ++) {

        if (( t >= allPlaces[i].places[j].sleeps.minPeople) && ( t <= allPlaces[i].places[j].sleeps.maxPeople)) {
          if (( d >= allPlaces[i].places[j].sleeps.minLength) && ( d <= allPlaces[i].places[j].sleeps.maxLength)) {
            if ( c == allPlaces[i].places[j].location) {


              // SUCCESSFUL VALIDATION

              placesCards.innerHTML += "<div class=\"col-12 col-lg-6 col-sm-12 col-md-6 mb-2 mt-4\">" +
              "<div class=\"border-primary card h-100\">" +
              "<div class=\"accomm-thumb h-100\" data-id=\"" + allPlaces[i].places[j].id +"\">" +
              "<img src=\"css/images/" + allPlaces[i].places[j].thumbnail + "\"class=\"card-img-top\" alt=\"accommodation exterior\">" + "<div class=\"card-body\"><h4>" + allPlaces[i].places[j].name + "</h4><img src=\"css/images/" + allPlaces[i].places[j].stars + "\"><div class=\"pt-4 d-block\">" +  allPlaces[i].places[j].description + "</div><div class=\"pt-2 d-block\"><br><h4>Amenities</h4>" +  allPlaces[i].places[j].amenities + "</div><br><h4>Address</h4>" +  allPlaces[i].places[j].address + "<h4 class=\"text-center mt-4\">$" + allPlaces[i].places[j].price + " per night </h4></div><div class=\"text-center mt-2\"><a class=\" btn btn-primary text-white show-more mb-4\" id ='getQuote" +i.toString()+j.toString()+"'>Reserve</a></div></div>";
              // "<br><h4>Nearby</h4><ul><li class=\"list-inline-item\">" +  allPlaces[i].places[j].nearby + "</li><ul></div><div class=\"pt-2 d-block\"><div class=\"text-secondary mt-2 mb-2 text-center\">

              // CALCULATE COSTS AND DISPLAY IN JS
              var total = d * allPlaces[i].places[j].price ;

              document.getElementById('cost').innerHTML = "<p>The total cost for your stay is <b>$" + total + "</b> for " + d + " day/s. <br><br> <h4> Special Offer </h4> Choose one free breakfast option for your stay</p>"

            }
          } else {
            // FAILED VALIDATION IN JQUERY
            $("#searchResults").html("<div class=\"col-12 text-center mt-4\"><h4>Search was unsuccessful, we could not find accommodation that matches your search requirements.</h4></div>");
          }
        }
      }//loop j fin
    }//loop i
  }
});

function getQuote(t,d,c){

  var i, j;
  for (i = 0 ; i < allPlaces.length ; i ++) {
    for (j = 0 ; j < allPlaces[i].places.length ; j ++) {
      if (( t >= allPlaces[i].places[j].sleeps.minPeople) && ( t <= allPlaces[i].places[j].sleeps.maxPeople)) {
        if (( d >= allPlaces[i].places[j].sleeps.minLength) && ( d <= allPlaces[i].places[j].sleeps.maxLength)) {
          if ( c == allPlaces[i].places[j].location) {

            var total = d * allPlaces[i].places[j].price ;

          }
        }
      }

    }
  }

}


// MEAL DATA/OBJECT IN JS

var breakfast = [
  {
    name:  "Continential Breakfast",
    description: "Juice, coffee or tea with museli and toast",
    image: "continentialbreakfast.jpg"
  },
  {
    name: "Full Breakfast",
    description: "Eggs with tomato, bacon, sausage, and toast",
    image: "bigbreakfast.jpg"
  }
]

// SHOW MEAL OPTIONS IN JQUERY/JS

$(document).ready(function(){

  breakfastCards.innerHTML = " ";
  var x;
  for (x = 0 ; x < breakfast.length ; x ++) {


    breakfastCards.innerHTML += "<div class=\"col-12 col-sm-6 col-md-3 mb-3 mt-4\">" +
    "<div class=\"border-primary card h-100\">" + "<div class=\"h-100\"><img src=\"css/images/" + breakfast[x].image + "\"class=\"card-img-top mb-2\" \"alt=\"breakfast option\">" + "<div class=\"card-body px-2\"><h4>" + breakfast[x].name + "</h4><br><p>" + breakfast[x].description + "</p> <div class=\" float-right form-check\"><input class=\"form-check-input breakfast\" type=\"radio\" name=\"breakfast\" value=\"option\"><label class=\"form-check-label\" for=\"breakfast\"></label></div></div>";
  }
});


// DATE PICKER FUNCTION IN JQUERY WITH JQUERY UI


$("#datePicker1").datepicker({
  dateFormat: "yy-mm-dd",
  changeMonth: true,
  minDate: new Date(),
  maxDate: "+1Y",
  onSelect: function(date){

    var selectedDate = new Date(date);
    var msecsInADay = 86400000;
    var stDate = new Date(selectedDate.getTime() + msecsInADay);
    console.log(stDate);


    $("#datePicker2").datepicker( "option", "minDate", stDate );
    var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);

    $("#datePicker2").datepicker( "option", "maxDate", enDate );

  }
});

$("#datePicker2").datepicker({
  dateFormat: "yy-mm-dd",
  changeMonth: true,
  // minDate: 0
});

// CHECKOUT FORM VALIDATION IN JQUERY

function emailCheck(){
  if($("#email").val()==""){
    $("#email").addClass("is-invalid");
    return false;
  }else{
    var regMail     =   /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
    if(regMail.test($("#email").val()) == false){
      $("#email").addClass("is-invalid");
      return false;
    }else{
      $("#email").removeClass("is-invalid");
      $("#next-form").collapse("show");
    }

  }
}
function validation(){
  if($("#fullName, #phone").val()==""){
    $("#fullName, #phone").addClass("is-invalid");
    return false;

  }else{
    $("#fullName, #phone").removeClass("is-invalid");
  }

}
$(document).ready(function() {
  $("#fullName").on("keyup",function(){
    if($("#fullName").val()==""){
      $("#fullName").addClass("is-invalid");
      return false;
    }else{
      $("#fullName").removeClass("is-invalid");
    }
  });
  $("#phone").on("keyup",function(){
    if($("#phone").val()==""){
      $("#phone").addClass("is-invalid");
      return false;
    }else{
      $("#phone").removeClass("is-invalid");
    }
  });

});

// DISPLAY PAGES IN JQUERY

$(document).ready(function(){

  $("#searchBar").ready(function(){
    $("#checkoutPage").hide();
    $("#confirmedPage").hide();
    $("#resultsPage").hide();

    $("#search").click(function(){
      $("#resultsPage").show();
      $("#checkoutPage").hide();
      $("#confirmedPage").hide();

      $(".show-more").click(function(){
        $("#resultsPage").hide();
        $("#checkoutPage").show();
        $("#confirmedPage").hide();
        $("#searchBar").hide();
        $("#slideshow").hide();
      });
      $("#confirm").click(function(){
        $("#resultsPage").hide();
        $("#checkoutPage").hide();
        $("#confirmedPage").show();
        $("#searchBar").hide();
        $("#slideshow").hide();
      });
      $("#home").click(function(){
        $("#searchBar").show();
        $("#slideshow").show();
        $("#resultsPage").hide();
        $("#checkoutPage").hide();
        $("#confirmedPage").hide();
      });
    });
  });
});

// 3RD PARTY PLUGIN IN JQUERY

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  items:1,
  margin:10,
  autoHeight:false,
  animateOut: "fadeOut"
});
