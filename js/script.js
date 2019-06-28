// console.log("hello");
var placesCards = document.getElementById("placeDetails") ;
console.log(placesCards);

var allPlaces = [
  {
    type: "hotel",
    places: [
      {
        id: 1,
        name: "QT Hotel Wellington",
        stars: 4,
        description: "Opposite the Museum of New Zealand Te Papa Tongarewa," + " this quirky boutique hotel is 6.1 km from Wellington International Airport." + " This smoke-free hotel features a restaurant, an indoor pool, and 2 bars/lounges. WiFi in public areas is free. " + " Additionally, a fitness center,  a coffee shop/café, and a spa tub are onsite." + " All 65 rooms feature thoughtful touches like espresso makers and pillow menus," + " plus free WiFi and LCD TVs with cable channels." + " Other amenities available to guests include 24-hour room service, refrigerators, and minibars.",
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
        name: "Copthorne Hotel Wellington Oriental Bay",
        stars: 4,
        description: "Across the street from Wellington Harbour," + " this refined hotel is a 6-minute walk from the Museum of New Zealand Te Papa Tongarewa and 3 km from Wellington Botanic Garden." + " Refined rooms offer balconies, free Wi-Fi, flat-screen TVs and minibars, plus tea and coffeemaking facilities." + " Upgraded rooms add harbour views. Suites include dining tables and separate living areas." + " Room service is available. There's a bar/restaurant offering panoramic views of the city. " + "Other amenities include meeting and event space. " + "Breakfast (surcharge) and parking are available.",
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
       stars: 4,
       description: "Across the street from Wellington Harbour," + " this refined hotel is a 6-minute walk from the Museum of New Zealand Te Papa Tongarewa and 3 km from Wellington Botanic Garden." + " Refined rooms offer balconies, free Wi-Fi, flat-screen TVs and minibars, plus tea and coffeemaking facilities." + " Upgraded rooms add harbour views. Suites include dining tables and separate living areas." + " Room service is available. There's a bar/restaurant offering panoramic views of the city. " + "Other amenities include meeting and event space. " + "Breakfast (surcharge) and parking are available.",
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
       stars: 4,
       description: "A restaurant, a 24-hour fitness center," + " and a bar/lounge are available at this smoke-free hotel." + " WiFi in public areas is free. Additionally, a coffee shop/café," + " a 24-hour business center, and a conference center are onsite." + " All 267 rooms provide conveniences like refrigerators and coffee makers," + " plus free WiFi and 24-hour room service." + " Guests will also find LCD TVs, minibars, and premium bedding.",
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
      stars: 4,
      description: "A restaurant, a 24-hour fitness center," + " and a bar/lounge are available at this smoke-free hotel." + " WiFi in public areas is free. Additionally, a coffee shop/café," + " a 24-hour business center, and a conference center are onsite." + " All 267 rooms provide conveniences like refrigerators and coffee makers," + " plus free WiFi and 24-hour room service." + " Guests will also find LCD TVs, minibars, and premium bedding.",
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
      stars: 3,
      description: "Along with a restaurant, this smoke-free hotel has an outdoor pool and a bar/lounge." + " WiFi in public areas is free. Other amenities include a sauna, a rooftop terrace, and self parking." + " All 165 rooms provide conveniences like refrigerators and coffee makers, plus 24-hour room service and plasma TVs." + " Free newspapers, in-room massages, and hair dryers are among the other amenities that guests will find.",
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
        stars: 4,
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
        stars: 4,
        description: "Just 5 minutes' walk from Cuba Street's bars and restaurants," + " Capital View Motor Inn offers self-contained apartments with views of the harbor and Wellington city. " + "Guests enjoy free onsite parking and unlimited free WiFi." + " All accommodation offers a kitchen with a microwave, a hotplate and a refrigerator." + " Each apartment is equipped with heating, electric blankets and flat-screen satellite TV." + " Wellington Capital View Motor Inn is 15 minutes' from Lambton Quay. " + "It is a 5-minute drive from Basin Reserve Stadium and an 8-minute drive from Te Papa Museum.",
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
        stars: 4,
        description: "The Balcony Suite is a true home away from home." + " It comes equipped with two bedrooms: one with a queen sized four poster bed, the other with a queen sized bed and a single bed. " + "There is a separate modern bathroom that also contains laundry facilities. " + "The Balcony Suite has a fully equipped modern kitchen with dishwasher, oven, hob, full sized fridge and microwave. " + "There is a separate living/dining area and a further conservatory in which to relax and take in the views." + " The conservatory opens out to a large deck overlooking the harbour." + " The Westpac stadium, the central city and the hill suburbs beyond." + " A cot and highchair are available on request. Sumptuous linen and quality towels are provided.",
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
        stars: 5,
        description: "Close to town in a sunny suburb with off street parking and close to bus stop." + " Cable car near by as is the university and Zealandia. " + "Easy access to motorway and ferry." + " Spoilt for choice with the number of native bush reserves and Botanic Garden near by." + " Iconic Kelburn village 10 minutes walk away with restaurants and bars." + " Quiet, established neighbourhood." + " Living room offers high stud, with open fire and heat pump" + " - open living with dining table and modern kitchen.",
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
          stars: 4,
          description: "Set in the inner-city Te Aro district," + " this modern youth hostel is a 5-minute walk from the Museum of New Zealand Te Papa Tongarewa and a 14-minute walk from the National War Memorial." + " Bright rooms offer free Wi-Fi; most provide en suite bathrooms. " + "Mixed and single-sex dorms add bunk beds and sleep up to 8 guests. " + "Amenities include 2 communal kitchens and dining areas," + " as well as private lockers, a pool table, and a TV lounge with a projector and movie rentals. There's also an espresso bar.",
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
        stars: 4,
        description: "Hotel Waterloo & Backpackers offers budget accommodation in the centre of Wellington. " + "It features a 24-hour guest kitchen, self-service laundry facilities and a games room with pool tables." + " Guests receive 1GB of free WiFi per 24 hours. " + "Formerly the historic Hotel Waterloo, which hosted Queen Elizabeth II’s entourage on her 1953 Coronation Tour," + " the hostel features elegant staircases, high ceilings and a café in the old ballroom." + " Wellington Railway Station is only 200 m from Wellington Hotel Waterloo & Backpackers." + " It is an 8-minute walk to TSB Arena and a 12-minute walk to Westpac Stadium." + " Private and shared rooms are available. " + "All rooms include heating and bed linen is provided. " + "Each private room has a work desk and cable TV. Secure lockers are provided for all guests.",
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

var city, travellers, days;

$(document).ready(function(){

  $('.auckland').click(function(){
    city = "auckland";
    console.log(city);
  });

  $('.wellington').click(function(){
    city = "wellington";
    console.log(city);
  });
  $('.queenstown').click(function(){
    city = "queenstown";
    console.log(city);
  });

  $('.trv1').click(function(){
    travellers = 1;
    console.log(travellers);
  });
  $('.trv2').click(function(){
    travellers = 2;
    console.log(travellers);
  });
  $('.trv3').click(function(){
    travellers = 3;
    console.log(travellers);
  });
  $('.trv4').click(function(){
    travellers = 4;
    console.log(travellers);
  });


  function dateDiff() {

    var start = $('#datePicker1').datepicker('getDate');
    var end = $('#datePicker2').datepicker('getDate');
    days   = (end - start)/1000/60/60/24;
    // alert(days);
    // document.getElementById("noDays").value = days ;
    return days;
  }
  $('#search').click(function(){
    dateDiff();
    getPlaces(travellers, days, city);
    // console.log("hi");
    // console.log(days);
  });
//
function getPlaces(t, d, c){

placesCards.innerHTML =' ';
var i, j;
for (i = 0 ; i < allPlaces.length ; i ++) {
  for (j = 0 ; j < allPlaces[i].places.length ; j ++) {

if (( t >= allPlaces[i].places[j].sleeps.minPeople) && ( t <= allPlaces[i].places[j].sleeps.maxPeople)) {



placesCards.innerHTML += ' <div class="col-md-3">' +
			'<div class="card">' +
          '<div class="card-header bg-primary">' + allPlaces[i].places[j].name + '</div>' +

          '<div class="card-body"> description : ' +  allPlaces[i].places[j].description + '<br>amenities:'+allPlaces[i].places[j].amenities +
            '<br> '+ allPlaces[i].places[j].address +'</div> '+

          '<div class="card-footer">'+allPlaces[i].places[j].price+' per night</div></div> </div>';
}
}//loop j fin
}//loop i
//
}
//
//
});
//
//
// 	function placeFilter(prop, placeSelected){
//
//
// 		placesCards.innerHTML =' ';
//
// 		document.getElementById('placeDetails').innerHTML = ' <h3>  Place ' + prop + ":" +placeSelected + '</h3>  <br>';
//
// 	    for (i = 0 ; i < allPlaces.length ; i ++) {
// 	    	if (prop == 'name') {
// 	    		allPlaces[i].prop = allPlaces[i].name;
// 	    	} else if (prop == 'description'){
// 	    		allPlaces[i].prop = allPlaces[i].description;
// 	    	}
//
// 			if (allPlaces[i].prop == placeSelected) {
//
// 				placeCards.innerHTML += '  <div class="col-lg-3 place">' +
// 					'<div class="card">' +
// 		          '<div class="card-header bg-primary">' + allPlaces[i].name +'</div>' +
//
// 		          '<div class="card-footer">Price: '+allPlaces[i].price+'</div></div> </div>';
// 		    } //if
// 	    } //for
//
    // }



// var hotel = [
//
//   {
//     id: 3,
//     name: "ibis Wellington",
//     stars: "3stars.png",
//     description: "This contemporary hotel is a 7-minute walk from the Wellington City Libraries, " + "8 minutes on foot from City Gallery Wellington and 1 km from the Museum of New Zealand Te Papa Tongarewa. " + "Streamlined rooms feature free Wi-Fi, flat-screen TVs, and tea and coffeemaking facilities, and sleep up to 4 guests." + " Upgraded rooms include breakfast. A breakfast buffet (fee) is served in a casual restaurant." + " There's also a lobby bar featuring a whimsical, black-and-white design scheme. " + "Additional amenities include a fitness centre and limited indoor parking (surcharge)." + "This contemporary hotel is a 7-minute walk from the Wellington City Libraries," + " 8 minutes on foot from City Gallery Wellington and 1 km from the Museum of New Zealand Te Papa Tongarewa." + " Streamlined rooms feature free Wi-Fi, flat-screen TVs, and tea and coffeemaking facilities, and sleep up to 4 guests." + " Upgraded rooms include breakfast. A breakfast buffet (fee) is served in a casual restaurant." + " There's also a lobby bar featuring a whimsical, black-and-white design scheme." + " Additional amenities include a fitness centre and limited indoor parking (surcharge).",
//     sleeps: "1-2 people <br> min stay 1 night, max stay 5 nights",
//     amenities: "Extra Beds/Cribs, Air Conditioning, Restaurant," + " Breakfast Available, Business Services, Parking Available, " + "Bar, Laundry, 24/7 Front Desk",
//     location: "Wellington",
//     address: "153 Featherston Street, Wellington 6011",
//     nearby: "Lambton Quay <br> 2 min walk  <br> " + "TSB Bank Arena <br> 5 min walk <br> Wellington Cable Car " + "(Lambton Quay Station) <br> 7 min walk <br> Wellington " + "(WLG-Wellington Intl.) <br> 17 min drive",
//     price: 157,
//     thumbnail: "ibisExterior-Wellington.jpg",
//     photo: "ibisRoom-Wellington.jpg"
//   },
//
//   {
//     id: 6,
//     name: "Skycity Hotel Auckland",
//     stars: "4stars.png",
//     description: "Along with 15 restaurants, this smoke-free hotel has a full-service spa and a casino." + " WiFi in public areas is free. Other amenities include 8 bars/lounges, a fitness center, and 2 coffee shops/cafés." + " All 323 rooms offer free WiFi and free wired Internet, plus iPod docks and flat-screen TVs with cable channels." + " Guests will also find 24-hour room service, refrigerators, and minibars.",
//     sleeps: "1-2 people <br> min stay 1 night, max stay 5 nights",
//     amenities: "Free WiFi, Air Conditioning, Spa," + " Restaurant, Gym, Breakfast Available, " + "Business Services, Parking Available, Bar," + " Laundry, Room Service, Housekeeping, 24/7 Front Desk",
//     location: "Auckland",
//     address: "Corner Victoria and Federal Streets, Auckland",
//     nearby: "Sky Tower <br> 1 min walk, " + "<br> SkyCity Casino <br> 1 min walk, " + "<br>Queen Street Shopping District <br>" + " 4 min walk, Auckland (AKL-Auckland Intl.) <br> 26 min drive",
//     price: 157,
//     thumbnail: "SKYCITYHotelAucklandExterior.jpg",
//     photo: "SKYCITYHotelAucklandRoom.jpg"
//   },
//
//   {
//     id: 9,
//     name: "Novotel Queenstown Lakeside",
//     stars: "4stars.png",
//     description: "A restaurant, a fitness center, and a bar/lounge are available at this hotel. " + "WiFi in public areas is free. Other amenities include a spa tub, valet parking, and 24-hour room service. " + "All 273 rooms offer WiFi, balconies or patios, and LCD TVs with satellite channels. " + "Other amenities available to guests include 24-hour room service, wired Internet, and minibars.",
//     sleeps: "1-2 people <br> min stay 1 night, max stay 5 nights",
//     amenities: "Free WiFi, Air Conditioning, Restaurant," + " Gym, Breakfast Available, Parking Available," + " Bar, Laundry, Room Service, Housekeeping," + " 24/7 Front Desk, Hot Tub",
//     location: "Queenstown",
//     address: "Corner of Earl and Marine Parade, Queenstown",
//     nearby: "Queenstown Mall <br> 3 min walk <br>" + " Skycity Queenstown Casino <br> 4 min walk <br> " + "Queenstown Beach <br> 4 min walk <br>" + " Queenstown (ZQN-Queenstown Intl.) <br> 9 min drive",
//     price: 157,
//     // thumbnail:,
//     // photo:
//   }
// ]
//
// var motel = [
//

// {
//   id: 12,
//   name: "Marksman Motor Inn",
//   stars: "4stars.png",
//   description: "Just 3 minutes’ walk from Government House Wellington, " + "Marksman Motor Inn offers accommodation with flat-screen satellite TV and a microwave." + " The property features Wi-Fi internet access and free parking." + " Marksman Inn is located in the heart of Wellington, 10 minutes’ walk from the Courtenay Place entertainment district." + " Wellington International Airport is a 10-minute drive away. All units are heated, and include a refrigerator, toaster and tea and coffee making facilities. " + "Each unit has a spacious seating area and a private bathroom with guest toiletries.",
//   sleeps: "2-4 people <br> min stay 3 nights, max stay 10 nights",
//   amenities: "Free parking,  Free WiFi, " + " Family rooms,  Non-smoking rooms",
//   location: "Wellington",
//   address: "40-44 Sussex Street, 6021 Wellington",
//   nearby: "Government House Wellington <br> 3min <br> Courtenay Place <br> 10 min ",
//   price: 90,
//   thumbnail: "marksmenMotorInnExterior-Wellington.jpg",
//   photo: "marksmenMotorInnRoom-Wellington.jpg"
// },
// {
//   id: 13,
//   name: "Greenlane Motel",
//   stars: "3stars.png",
//   description: "Along with a restaurant, this motel has a coffee shop/café and laundry facilities." + " Free continental breakfast, free WiFi in public areas, and free self parking are also provided. " + "Additionally, express check-in, a front-desk safe, and a banquet hall are onsite. " + "All 8 rooms provide conveniences like refrigerators and microwaves, plus free WiFi and TVs with cable channels. " + "Other amenities available to guests include coffee makers, desks, and free toiletries.",
//   sleeps: "2-4 people <br> min stay 3 nights, max stay 10 nights",
//   amenities: "Free WiFi, Free Breakfast, Free Parking," + " Restaurant, Laundry, Housekeeping",
//   location: "Auckland",
//   address: "453 Great South Road Penrose, Auckland",
//   nearby:"ASB Showgrounds <br> 4 min drive,  <br>  Mt. Smart Stadium <br> " + "4 min drive,  <br> Auckland (AKL-Auckland Intl.) <br> 15 min drive, " + " <br> One Tree Hill Domain <br> 16 min drive",
//   price: 90,
//   thumbnail: "GreenLaneMotelExterior-Auckland.jpg",
//   photo: "GreenLaneMoteRoom-Auckland.jpg"
// },
// {
//   id: 14,
//   name: "Tudor Court Motor Lodge",
//   stars: "4stars.jpg",
//   description: "Laundry facilities, express check-out, " + "and multilingual staff are available at this smoke-free motel." + " Free WiFi in public areas and free self parking are also provided. Other amenities include a garden." + " All 18 rooms provide conveniences like refrigerators and coffee makers, plus free WiFi and LED TVs with satellite channels." + " Other amenities available to guests include premium bedding, hair dryers, and phones.",
//   sleeps: "2-4 people <br> min stay 3 nights, max stay 10 nights",
//   amenities: "Free WiFi, Free Breakfast, Free Parking, Laundry, Housekeeping",
//   location: "Auckland",
//   address: "108 Great South Road, Epsom, Auckland",
//   nearby: "Alexandra Park <br> 3 min drive " + "<br> ASB Showgrounds <br> 4 min drive  <br> Mt. Eden Domain  " + "<br> 8 min drive  <br>  Auckland (AKL-Auckland Intl.) " + " <br> 16 min drive",
//   price: 90,
//   thumbnail: "TudorCourtMotorLodgeExterior-Auckland.jpg",
//   photo: "TudorCourtMotorLodgeRoom-Auckland.jpg"
// },
// {
//   id: 17,
//   name: "New Haven Motel",
//   stars: "4stars.png",
//   description: "This smoke-free motel features an outdoor pool, a fitness center, and a spa tub. " + "Free WiFi in public areas and free self parking are also provided. " + "Other amenities include a sauna, dry cleaning, and laundry facilities." + " All 15 rooms provide conveniences like refrigerators and microwaves, plus free WiFi and flat-screen TVs. " + "Stovetops, room service, and hair dryers are among the other amenities available to guests.",
//   sleeps: "2-4 people <br> min stay 3 nights, max stay 10 nights",
//   amenities: "Pool, Free WiFi, Free Parking," + " Spa, Gym, Breakfast Available, Laundry," + " Room Service, 24/7 Front Desk, Hot Tub",
//   location: "Auckland",
//   address: "3162 Great North Road, Kelston, New Lynn, Auckland",
//   nearby: "Auckland Zoo <br> 9 min drive " + "<br> Eden Park <br> 11 min drive <br>" + " Western Springs Stadium <br> 14 min drive <br> " + "Auckland (AKL-Auckland Intl.) <br> 28 min drive",
//   price: 90,
//   thumbnail: "NewHavenMotelExterior-Auckland.jpg",
//   photo: "NewHavenMotelRoom-Auckland.jpg"
// },
// {
//   id: 16,
//   name: "Autoline Motel",
//   stars: "4stars.png",
//   description: "A perfect getaway for skiers, Autoline Motel offers conveniences such as laundry facilities," + " tour/ticket assistance, and free self parking. All 13 rooms provide conveniences like kitchenettes and coffee makers, " + "plus free WiFi and flat-screen TVs with satellite channels. " + "Other amenities available to guests include balconies or patios, free local calls, and hair dryers.",
//   sleeps: "2-4 people <br> min stay 3 nights, max stay 10 nights",
//   amenities: "Free WiFi, Free Parking, " + "Air Conditioning, Laundry, Housekeeping",
//   location: "Queenstown",
//   address: "2-4 Dublin Street, Queenstown",
//   nearby: "Queenstown Beach <br> 7 min walk <br> " + "Queenstown Mall <br> 9 min walk <br> Queenstown Hill " + "<br> 11 min walk <br> Queenstown (ZQN-Queenstown Intl.) <br> 8 min drive",
//   price: 90
//   // thumbnail:,
//   // photo:
// },
// {
//   id: 17,
//   name: "Amber Lodge Motel",
//   stars: "3stars.png",
//   description: "A perfect getaway for skiers," + " Amber Lodge Motel offers conveniences such as laundry facilities," + " tour/ticket assistance, and free self parking." + " All 12 rooms feature kitchens with refrigerators and microwaves, plus free WiFi and TVs." + " Other amenities available to guests include electric kettles, showers, and phones.",
//   sleeps: "2-4 people <br> min stay 3 nights, max stay 10 nights",
//   amenities: "Free WiFi, Free Parking, Laundry, Housekeeping",
//   location: "Queenstown",
//   address: "1 Gorge Road, Queenstown",
//   nearby: "Skycity Queenstown Casino <br> 4 min walk " + "<br> Queenstown Mall <br> 4 min walk <br>" + " Fear Factory Queenstown <br> 5 min walk <br>" + " Queenstown (ZQN-Queenstown Intl.) <br> 9 min drive",
//   price: 90
//   // thumbnail:,
//   // photo:
// },
// {
//   id: 18,
//   name: "Colonial Village Motel",
//   stars: "3stars.png",
//   description: "Along with laundry facilities, this motel has tour/ticket assistance and a garden. " + "Free WiFi in public areas and free self parking are also provided. " + "Other amenities include a reception hall." + " All 12 rooms have TVs with Netflix and feature kitchens with refrigerators, stovetops, and microwaves." + " Other amenities available to guests include free WiFi, balconies, and room service.",
//   sleeps: "2-4 people <br> min stay 3 nights, max stay 10 nights",
//   amenities: "Free WiFi,Free Parking, Pet Friendly," + " Laundry, Room Service, Housekeeping",
//   location: "Queenstown",
//   address: "136 Frankton Road, Queenstown",
//   nearby: "Queenstown Beach <br> 14 min walk <br> " + "Queenstown Hill <br> 20 min walk <br> Queenstown (ZQN-Queenstown Intl.)" + " <br> 7 min drive <br> Queenstown Golf Club <br> 18 min drive",
//   price: 90
//   // thumbnail:,
//   // photo:
// }
// ]
//
// var house = [
//
// {
//   id: 21,
//   name: "Architecturally designed Studio apartment",
//   stars: "4stars.png",
//   description: "This iconic Roger Walker apartment block," + " sometimes known as Noddy town, is an integral feature in Wellington's architecturally designed buildings. " + "It's quirky turrets and private passageways make it quite unique to visit." + " The concrete block interior is both rustic and warm and the furnishings complement the architecture of the 70's. " + "Park Mews is situated mid way between the airport and town and has easy access to a number of facilities including Hataitai Village where most services can be found," + " The Aquatic Centre which has a pool, " + "gym etc and is within easy walking distance and also Kilbirnie township which provides and number of banks," + " Post Office, department store and supermarkets.",
//   sleeps: "1-4 people <br> min stay 2 nights, max stay 15 nights",
//   amenities: "Internet, Children Welcome",
//   location: "Wellington",
//   address: "Kilbirnie, Wellington",
//   nearby: "Kilbirnie township",
//   price: 240,
//   thumbnail: "parkMewsExterior-Wellington.jpg",
//   photo: "parkMewsRoom-Wellington.jpg"
// },
// {
//   id: 22,
//   name: "Juan's Place",
//   stars: "5stars.png",
//   description: "The room can fit two people comfortably and there is a Sofa Bed in the living room for a 3rd person. " + "The guests will have their own private bathroom. The apartment is on the 5th floor and there is access to an indoor pool and tennis court." + " The apartment is conveniently located right in the city centre therefore it is very easy to get around by foot and access public transport. NO CLEANING FEE.",
//   sleeps: "1-4 people <br> min stay 2 nights, max stay 15 nights",
//   amenities: "Lift, Kitchen, Cable TV, Free Wifi",
//   location: "Auckland",
//   address: "Queen St, Auckland",
//   nearby: "Britomart Train Station <br> ( Literally across the street )" + " <br> The Ferry Station <br> 7 min walk <br> Super Market <br>" + " 2 min walk <br> Sky Tower <br> 15 min walk <br> Vector Arena <br> 7 min walk <br> Auckland Domain Park" + " <br> 28 min walk <br> Aotea Square <br> 20 min walk <br> Art Gallery" + " <br> 14 min walk <br> Wynyard Quarter <br> 22 mins walk",
//   price: 240,
//   thumbnail: "JuanPlaceExterior-Auckland.jpg",
//   photo: "JuanPlaceRoom-Auckland.jpg"
// },
// {
//   id: 23,
//   name: "A double room and some luxurities in CBD area",
//   stars: "5stars.png",
//   description: "You will have our extra double room for yourself," + " in the central Auckland in a modern apartment building with a gym, a steam room, and a pool. " + "You'll have a beautiful view over the city from our balcony! You are welcome to use the kitchen. " + "We will give you an access to unlimited internet and use of a washing machine and a dryer.",
//   sleeps: "1-4 people <br> min stay 2 nights, max stay 15 nights",
//   amenities: "Lift, Gym, Kitchen, Wifi",
//   location: "Auckland",
//   address: "Auckland CBD",
//   nearby: "CBD <br> 5 min walk",
//   price: 240,
//   thumbnail: "HostedbyEveliinaExterior-Auckland.jpg",
//   photo: "HostedbyEveliinaRoom-Auckland.jpg"
// },
// {
//   id: 24,
//   name: "Sunny Townhouse Near Trendy K Road",
//   stars: "5stars.png",
//   description: "Share this light-filled home with Frank the dachshund and Indi the cat." + " Contemporary decor is pleasingly neutral with pops of summery colour – sip a coffee on the plant-peppered patio before heading out to discover the hipstery neighbourhood haunts.",
//   sleeps: "1-4 people <br> min stay 2 nights, max stay 15 nights",
//   amenities: "Full kitchen, Washer, Dryer, Dishwasher, " + "Wifi, TV, Bathroom essentials, Bedroom comforts, " + "Coffee maker, Hair dryer, Iron",
//   location: "Auckland",
//   address: "K Road, Auckland CBD, Auckland",
//   nearby: "Downtown Auckland <br> 10 min walk ",
//   price: 240,
//   thumbnail: "HostedbyEveliinaExterior-Auckland.jpg",
//   photo: "HostedbyEveliinaRoom-Auckland.jpg"
// },
// {
//   id: 25,
//   name: "Modern private room, stunning views from your bed!",
//   stars: "5stars.png",
//   description: "Wake up and look out to the stunning views of Lake Wakatipu" + " and the jagged peaks of The Remarkables from your bed! " + "Our guestroom is a private room in our warm and modern home." + " We offer a private bathroom, balcony and a separate entrance (self check-in). " + "We are 10mins drive from the airport and 5mins drive to Queenstown centre.",
//   sleeps: "1-4 people <br> min stay 2 nights, max stay 15 nights",
//   amenities: "Free parking on premises, Wifi, Air conditioning, Iron",
//   location: "Queenstown",
//   address: "Queenstown, Otago, New Zealand",
//   nearby: "Queenstown CBD <br> 25 min walk <br> Bus stop <br> 10 min walk",
//   price: 240
//   // thumbnail: "",
//   // photo: ""
// },
// {
//   id: 26,
//   name: "Queenstown home with a view",
//   stars: "4stars.png",
//   description: "Apartment is located in the heart of town surrounded by restaurants and shops opposite the lake. " + "It is easy access to anywhere, 2 mins walk to bus stop or to touch the lake water." + " You can view the lake from the apartment.",
//   sleeps: "1-4 people <br> min stay 2 nights, max stay 15 nights",
//   amenities: "Kitchen, Wifi, Iron, Shampoo",
//   location: "Queenstown",
//   address: "Queenstown, Otago, New Zealand",
//   nearby: "Queenstown CBD",
//   price: 240
//   // thumbnail: "",
//   // photo: "",
// },
// {
//   id: 27,
//   name: "Spacious bedroom/ensuite,balcony,breakfast,views.",
//   stars: "5stars.png",
//   description: "Spacious, sunny and warm room with great views of the mountains and lake, a peaceful haven to relax." + " Has own private entrance. Private upstairs level with comfy super king bed, bathroom with shower and bath, walk-in wardrobe, private balcony. " + "Including fridge, microwave, toaster, kettle, coffee plunger, we provide breakfast every morning. " + "Wonderfully placed: 5 minutes by car or 10 minutes by bus to the town center," + " 1 minute walk to the bus stop, 5 minutes walk to the ski-bus stop. Self check-in.",
//   sleeps: "1-4 people <br> min stay 2 nights, max stay 15 nights",
//   amenities: "Wifi, Breakfast, Iron, Shampoo",
//   location: "Queenstown",
//   address: "Fernhill, Queenstown 9300",
//   nearby: "bus stop <br> 1 min walk <br> skifield bus <br> " + "5 min walk <br> convenience store," + " local restaurant and fish&chips store <br> 3 min walk",
//   price: 240
//   // thumbnail: "",
//   // photo: ""
// }
// ]
//
// var hostel = [
//

// {
//   id: 30,
//   name: "Nomads Capital Backpackers",
//   stars: "5stars.png",
//   description: "Located in the heart of the city, " + "Nomads Capital Backpackers offers 5-star backpackers accommodation. " + " It is a 5-minute walk from Wellington's stunning waterfront." + " Guests enjoy free pancakes every morning and a free meal at the onsite bar each evening." + " Free tea and coffee is provided 24-hours a day. " + "There is a range of comfortable accommodation options, including private rooms with an en suite bathroom," + " as well as large dormitory rooms. There is a lounge and TV room," + " a courtyard with BBQ facilities, and a fully equipped communal kitchen. " + "There is an onsite travel agency, which provides information on tours and activities in the Wellington area," + " and broader New Zealand. Enjoy the relaxed atmosphere of Blend Bar, " + "which offers a range of drinks and dining deals, and regular live entertainment.",
//   sleeps: "1 person <br> min stay 1 night, max stay 10 nights",
//   amenities: "Non-smoking rooms, Facilities for disabled guests," + " Free WiFi, 24-hour front desk," + " Restaurant, Bar, Breakfast",
//   location: "Wellington",
//   address: "118 Wakefield Street, 6011 Wellington",
//   nearby: "Museum of New Zealand Te Papa Tongarewa <br> 5 min walk" + " <br> Courtney Place <br> 7min walk <br>" + " New World Metro <br> 4min walk",
//   price: 30,
//   thumbnail: "nomadsCapitalBackpackersExterior-Wellington.jpg",
//   photo: "nomadsCapitalBackpackersRoom-Wellington.jpg"
// },
// {
//   id: 31,
//   name: "Haka Lodge Auckland Hostel",
//   stars: "4stars.png",
//   description: "This smoke-free hostel features laundry facilities," + " tour/ticket assistance, and free WiFi in public areas. Rooms offer free WiFi and showers.",
//   sleeps: "1 person <br> min stay 1 night, max stay 10 nights",
//   amenities: "Free WiFi, Kitchen, Laundry",
//   location: "373 Karangahape Rd, Auckland",
//   nearby: "Auckland Town Hall <br> 12 min walk " + "<br> Sky Tower <br> 15 min walk <br> " + "Auckland City Hospital <br> 18 min walk" + " <br> Auckland (AKL-Auckland Intl.)  <br> 26 min drive",
//   price: 30,
//   thumbnail: "HakaLodgeAucklandExterior.jpg",
//   photo: "HakaLodgeAucklandRoom.jpg"
// },
// {
//   id: 32,
//   name: "YMCA Hostel Auckland",
//   stars: "3stars.png",
//   description: "Along with a fitness center, " + " this smoke-free hostel has WiFi in public areas and self parking. " + "Other amenities include laundry facilities, a 24-hour front desk, and tour/ticket assistance." + " All 122 rooms offer WiFi, refrigerators, and portable fans." + " Guests will also find showers and desks. Bathrooms are shared.",
//   sleeps: "1 person <br> min stay 1 night, max stay 10 nights",
//   amenities: "Kitchen, Gym, Breakfast Available, Parking Available",
//   location: "Auckland",
//   address: "20 Pitt Street, Auckland",
//   nearby: "Auckland Town Hall <br> 8 min walk" + " <br> Sky Tower <br> 10 min walk " + "<br> SkyCity Casino <br> 12 min walk " + "<br> Auckland (AKL-Auckland Intl.) <br> 25 min drive",
//   price: 30,
//   thumbnail: "ymcaExterior-Auckland.jpg",
//   photo: "ymcaRoom-Auckland.jpg"
// },
// {
//   id: 33,
//   name: "Queen Street Backpackers",
//   stars: "3stars.png",
//   description: "Along with a bar/lounge," + " this smoke-free hostel has coffee/tea in a common area and a microwave in a common area. " + "Free continental breakfast and free WiFi in public areas are also provided. " + "Other amenities include a refrigerator in a common area, laundry facilities, and a 24-hour front desk. " + "Rooms offer free WiFi and showers.",
//   sleeps: "1 person <br> min stay 1 night, max stay 10 nights",
//   amenities: "Free WiFi, Free Breakfast, Kitchen, Bar",
//   location: "Auckland",
//   address: "4 Fort Street, Auckland",
//   nearby: "Queen Street Shopping District <br> 1 min walk" + " <br> Auckland Ferry Terminal <br> 5 min walk " + "<br> SkyCity Casino <br> 8 min walk <br>" + " Auckland (AKL-Auckland Intl.)",
//   price: 30,
//   thumbnail: "QueenStreetBackpackersExterior - Auckland.jpg",
//   photo: "QueenStreetBackpackersRoom- Auckland.jpg"
// },
// {
//   id: 34,
//   name: "Nomads Queenstown Backpackers",
//   stars: "4stars.png",
//   description: "Cozy up to a roaring lobby fireplace at Nomads Queenstown Backpackers after an exciting day on the slopes. " + "Rooms offer WiFi and hair dryers.",
//   sleeps: "1 person <br> min stay 1 night, max stay 10 nights",
//   amenities: "Air Conditioning, Spa, Laundry, 24/7 Front Desk",
//   location: "Queenstown",
//   address: "5-11 Church Street, Queenstown",
//   nearby: "Queenstown Mall <br> 2 min walk <br>" + " Skycity Queenstown Casino <br> 4 min walk <br> Queenstown Beach" + " <br> 4 min walk <br> Queenstown (ZQN-Queenstown Intl.) <br> 9 min drive",
//   price: 30
//   // thumbnail: "",
//   // photo: ""
// },
// {
//   id: 35,
//   name: "YHA Queenstown Central Hostel",
//   stars: "4stars.png",
//   description: "Laundry facilities, a library, " + "and tour/ticket assistance are available at this hostel." + " WiFi in public areas is free. Other amenities include a vending machine." + " All 30 rooms offer free WiFi, coffee makers, and TVs. " + "Hair dryers and desks are also available to guests.",
//   sleeps: "1 person <br> min stay 1 night, max stay 10 nights",
//   amenities: "Free WiFi, Laundry, Housekeeping",
//   location: "Queenstown",
//   address: "48 Shotover Street, Queenstown",
//   nearby: "Fear Factory Queenstown <br> 1 min walk <br>" + " Skycity Queenstown Casino <br> 2 min walk <br>" + " TSS Earnslaw Steamship <br> 3 min walk <br>" + " Queenstown (ZQN-Queenstown Intl.) <br> 9 min drive",
//   price: 30
//   // thumbnail: "",
//   // photo: ""
// },
// {
//   id: 36,
//   name: "Base Queenstown Hostel",
//   stars: "3stars.png",
//   description: "This smoke-free hostel features a nightclub," + " a bar/lounge, and coffee/tea in a common area." + " WiFi in public areas is free. Additionally, laundry facilities, a 24-hour front desk, and free newspapers are onsite." + " Rooms offer free WiFi and showers.",
//   sleeps: "1 person <br> min stay 1 night, max stay 10 nights",
//   amenities: "Free WiFi, Bar, Laundry," + " Housekeeping, 24/7 Front Desk",
//   location: "Queenstown",
//   address: "47-49 Shotover Street, Queenstown",
//   nearby: "Fear Factory Queenstown <br> 1 min walk <br> " + "Skycity Queenstown Casino <br> 2 min walk <br> " + "TSS Earnslaw Steamship <br> 3 min walk <br>" + " Queenstown (ZQN-Queenstown Intl.) <br> 9 min drive",
//   price: 30
//   // thumbnail: "",
//   // photo: ""
// }
//
// ]



// MEAL OBJECT

var breakfast = [
  {
    name:  "Continential Breakfast",
    description: "Juice, coffee or tea with museli and toast",
  },
  {
    name: "Full Breakfast",
    description: "Fried or scrambled eggs with tomato, mushrooms, bacon, susage, spinach and toast"
  }
]

// DATE PICKER FUNCTION


$( function() {
  $( "#datePicker1" ).datepicker({
     // selectOtherMonths: true,
     // showOtherMonths: true
  });

} );


$( function() {
  $( "#datePicker2" ).datepicker({
     // selectOtherMonths: true,
     // showOtherMonths: true
  });
} );

// CHECKOUT FORM VALIDATION


    function emailCheck(){
        if($("#email").val()==""){
            $("#email").addClass('is-invalid');
            return false;
        }else{
            var regMail     =   /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
            if(regMail.test($("#email").val()) == false){
                $("#email").addClass('is-invalid');
                return false;
            }else{
                $("#email").removeClass('is-invalid');
                $('#next-form').collapse('show');
            }

        }
    }
    function validation(){
        if($("#name, #phone").val()==""){
            $("#name, #phone").addClass('is-invalid');
            return false;

        }else{
            $("#name, #phone").removeClass('is-invalid');
        }

    }
    $(document).ready(function() {
        $("#name").on("keyup",function(){
            if($("#name").val()==""){
                $("#name").addClass('is-invalid');
                return false;
            }else{
                $("#name").removeClass('is-invalid');
            }
        });
        $("#phone").on("keyup",function(){
            if($("#phone").val()==""){
                $("#phone").addClass('is-invalid');
                return false;
            }else{
                $("#phone").removeClass('is-invalid');
            }
        });

    });

    // DISPLAY

    // $(document).ready(function(){
    //
    //   $("#searchBar").ready(function(){
    //     $("#checkoutPage").hide();
    //     $("#confirmedPage").hide();
    //     $("#resultsPage").hide();
    //
    //     $("#search").click(function(){
    //       $("#resultsPage").show();
    //       $("#checkoutPage").hide();
    //       $("#confirmedPage").hide();
    //   });
    // });
    //   });
// checkoutPage
// confirmedPage
// resultsPage
// search
// home
// confirm
// open
// searchBar
