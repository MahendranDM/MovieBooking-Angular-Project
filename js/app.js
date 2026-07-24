var app = angular.module("MovieBooking", []);

app.controller("bookingController", function ($scope) {

    $scope.appName = "🎬 Cinema Talkies";

    $scope.welcomeMessage = "Welcome to Movie Seat Booking";

    $scope.description = "Book your favorite movie tickets quickly and easily.";

});