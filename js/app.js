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

});