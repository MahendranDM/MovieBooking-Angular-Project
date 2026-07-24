var app = angular.module("MovieBooking", []);

app.controller("bookingController", function ($scope) {

    $scope.appName = "🎬 Cinema Talkies";

    $scope.welcomeMessage = "Welcome to Movie Seat Booking";

    $scope.description = "Book your favorite movie tickets quickly and easily.";

    $scope.dashboard = [

        {
            title: "Featured Movies",
            value: "5 Movies Available"
        },

        {
            title: "Available Shows",
            value: "12 Shows Today"
        },

        {
            title: "Ticket Price",
            value: "₹250"
        },

        {
            title: "Booking Instructions",
            value: "Select Movie → Choose Seat → Book Ticket"
        }

    ];


    $scope.movies = [

{
name:"Leo",
genre:"Action",
language:"Tamil",
duration:"2h 45m",
show:"10:00 AM",
price:250
},

{
name:"Avengers Endgame",
genre:"Action",
language:"English",
duration:"3h",
show:"1:30 PM",
price:350
},

{

name:"Premalu",
genre:"Romance",
language:"Malayalam",
duration:"2h 20m",
show:"4:00 PM",
price:200
},

{
name:"KGF Chapter 2",
genre:"Action",
language:"Kannada",
duration:"2h 50m",
show:"7:00 PM",
price:300
},

{

name:"Interstellar",
genre:"Sci-Fi",
language:"English",
duration:"2h 49m",
show:"9:30 PM",
price:400
}

];


$scope.selectedMovie = null;

$scope.selectMovie = function(movie) {

    $scope.selectedMovie = movie;

};





});