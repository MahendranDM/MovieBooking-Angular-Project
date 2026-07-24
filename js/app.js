var app = angular.module("MovieBooking", []);

app.controller("bookingController", function ($scope) {

    $scope.movies = [

        {
            name: "LEO",
            genre: "Action",
            language: "Tamil",
            duration: "2h 45m",
            price: 250,
            shows: ["10:00 AM", "1:30 PM", "4:00 PM", "7:00 PM"]
        },

        {
            name: "PREMALU",
            genre: "Romance",
            language: "Malayalam",
            duration: "2h 20m",
            price: 200,
            shows: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"]
        },

        {
            name: "AVENGERS ENDGAME",
            genre: "Action",
            language: "English",
            duration: "3h",
            price: 350,
            shows: ["10:00 AM", "2:00 PM", "6:00 PM", "9:00 PM"]
        },

        {
            name: "INTERSTELLAR",
            genre: "Sci-Fi",
            language: "English",
            duration: "2h 49m",
            price: 300,
            shows: ["11:00 AM", "2:30 PM", "5:30 PM", "8:30 PM"]
        },

        {
            name: "KGF CHAPTER 2",
            genre: "Action",
            language: "Kannada",
            duration: "2h 50m",
            price: 280,
            shows: ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"]
        },

        {
            name: "PUSHPA 2",
            genre: "Action",
            language: "Telugu",
            duration: "3h 10m",
            price: 320,
            shows: ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"]
        }

    ];

$scope.selectedMovie = null;

$scope.showShowSelection = false;

$scope.selectMovie = function(movie){

    $scope.selectedMovie = movie;

    $scope.showShowSelection = false;

};

$scope.selectedShow = null;

$scope.showSeatSelection = false;

$scope.selectShow = function (show) {

    $scope.selectedShow = show;

    $scope.showSeatSelection = true;

    loadSeats(show);

};







});