var app = angular.module("MovieBooking", []);

app.controller("bookingController", function ($scope) {
    $scope.movies = [
        {
            name: "LEO",
            genre: "Action",
            language: "Tamil",
            duration: "2h 45m",
            price: 250,
            image: "images/leo.jpg",
            shows: ["10:00 AM", "1:30 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "PREMALU",
            genre: "Romance",
            language: "Malayalam",
            duration: "2h 20m",
            price: 200,
            image: "images/premalu2.jpg",
            shows: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"]
        },
        {
            name: "AVENGERS ENDGAME",
            genre: "Action",
            language: "English",
            duration: "3h",
            price: 350,
            image: "images/Endgame.jpg",
            shows: ["10:00 AM", "2:00 PM", "6:00 PM", "9:00 PM"]
        },
        {
            name: "INTERSTELLAR",
            genre: "Sci-Fi",
            language: "English",
            duration: "2h 49m",
            price: 300,
            image: "images/interstellar.jpg",
            shows: ["11:00 AM", "2:30 PM", "5:30 PM", "8:30 PM"]
        },
        {
            name: "KGF CHAPTER 2",
            genre: "Action",
            language: "Kannada",
            duration: "2h 50m",
            price: 280,
            image: "images/kgf2.jpg",
            shows: ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"]
        },
        {
            name: "PUSHPA 2",
            genre: "Action",
            language: "Telugu",
            duration: "3h 10m",
            price: 320,
            image: "images/pushpa2.jpg",
            shows: ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"]
        }
    ];

    $scope.selectedMovie = null;
    $scope.selectedShow = null;
    $scope.selectedSeats = [];
    $scope.seatRows = [];
    $scope.showSeatSelection = false;

    $scope.selectMovie = function(movie) {
        // save selection and navigate to details page
        try { localStorage.setItem('selectedMovie', JSON.stringify(movie)); } catch (e) {}
        window.location = 'booking-details.html';
    };

    $scope.selectShow = function(show) {
        $scope.selectedShow = show;
        $scope.showSeatSelection = true;
        $scope.selectedSeats = [];
        $scope.seatRows = $scope.generateSeatLayout();
    };

    $scope.generateSeatLayout = function() {
        var rows = ["A", "B", "C", "D", "E"];
        var layout = [];
        rows.forEach(function(letter) {
            var row = [];
            for (var i = 1; i <= 8; i++) {
                row.push({ label: letter + i, selected: false, booked: false });
            }
            layout.push(row);
        });
        return layout;
    };

    $scope.toggleSeat = function(seat) {
        if (seat.booked) return;
        seat.selected = !seat.selected;
        var index = $scope.selectedSeats.indexOf(seat.label);
        if (seat.selected && index === -1) {
            $scope.selectedSeats.push(seat.label);
        }
        if (!seat.selected && index > -1) {
            $scope.selectedSeats.splice(index, 1);
        }
    };

    $scope.getSeatTotal = function() {
        return $scope.selectedSeats.length * ($scope.selectedMovie ? $scope.selectedMovie.price : 0);
    };

    $scope.confirmBooking = function() {
        if (!$scope.selectedMovie || !$scope.selectedShow || !$scope.selectedSeats.length) return;
        var booking = {
            movie: $scope.selectedMovie,
            show: $scope.selectedShow,
            seats: $scope.selectedSeats,
            total: $scope.getSeatTotal(),
            bookedAt: new Date().toLocaleString()
        };
        localStorage.setItem('bookingInfo', JSON.stringify(booking));
        try { localStorage.removeItem('selectedMovie'); } catch(e) {}
        window.location = 'ticket.html';
    };
});

app.controller("detailsController", function ($scope) {
    $scope.movies = [
        {
            name: "LEO",
            genre: "Action",
            language: "Tamil",
            duration: "2h 45m",
            price: 250,
            image: "images/leo.jpg",
            shows: ["10:00 AM", "1:30 PM", "4:00 PM", "7:00 PM"]
        },
        {
            name: "PREMALU",
            genre: "Romance",
            language: "Malayalam",
            duration: "2h 20m",
            price: 200,
            image: "images/premalu2.jpg",
            shows: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"]
        },
        {
            name: "AVENGERS ENDGAME",
            genre: "Action",
            language: "English",
            duration: "3h",
            price: 350,
            image: "images/Endgame.jpg",
            shows: ["10:00 AM", "2:00 PM", "6:00 PM", "9:00 PM"]
        },
        {
            name: "INTERSTELLAR",
            genre: "Sci-Fi",
            language: "English",
            duration: "2h 49m",
            price: 300,
            image: "images/interstellar.jpg",
            shows: ["11:00 AM", "2:30 PM", "5:30 PM", "8:30 PM"]
        },
        {
            name: "KGF CHAPTER 2",
            genre: "Action",
            language: "Kannada",
            duration: "2h 50m",
            price: 280,
            image: "images/kgf2.jpg",
            shows: ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"]
        },
        {
            name: "PUSHPA 2",
            genre: "Action",
            language: "Telugu",
            duration: "3h 10m",
            price: 320,
            image: "images/pushpa2.jpg",
            shows: ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"]
        }
    ];

    $scope.selectedMovie = null;
    $scope.selectedShow = null;
    $scope.selectedSeats = [];
    $scope.seatRows = [];
    $scope.showSeatSelection = false;

    // load selected movie if it was set on booking page
    var sel = localStorage.getItem('selectedMovie');
    if (sel) {
        try { $scope.selectedMovie = JSON.parse(sel); } catch(e) { $scope.selectedMovie = null; }
    }

    $scope.selectMovie = function(movie) {
        $scope.selectedMovie = movie;
        $scope.selectedShow = null;
        $scope.selectedSeats = [];
        $scope.showSeatSelection = false;
        $scope.seatRows = [];
    };

    $scope.selectShow = function(show) {
        $scope.selectedShow = show;
        $scope.showSeatSelection = true;
        $scope.selectedSeats = [];
        $scope.seatRows = $scope.generateSeatLayout();
    };

    $scope.generateSeatLayout = function() {
        var rows = ["A", "B", "C", "D", "E"];
        var layout = [];
        rows.forEach(function(letter) {
            var row = [];
            for (var i = 1; i <= 8; i++) {
                row.push({ label: letter + i, selected: false, booked: false });
            }
            layout.push(row);
        });
        return layout;
    };

    $scope.toggleSeat = function(seat) {
        if (seat.booked) return;
        seat.selected = !seat.selected;
        var index = $scope.selectedSeats.indexOf(seat.label);
        if (seat.selected && index === -1) {
            $scope.selectedSeats.push(seat.label);
        }
        if (!seat.selected && index > -1) {
            $scope.selectedSeats.splice(index, 1);
        }
    };

    $scope.getSeatTotal = function() {
        return $scope.selectedSeats.length * ($scope.selectedMovie ? $scope.selectedMovie.price : 0);
    };

    $scope.confirmBooking = function() {
        if (!$scope.selectedMovie || !$scope.selectedShow || !$scope.selectedSeats.length) return;
        var booking = {
            movie: $scope.selectedMovie,
            show: $scope.selectedShow,
            seats: $scope.selectedSeats,
            total: $scope.getSeatTotal(),
            bookedAt: new Date().toLocaleString()
        };
        localStorage.setItem('bookingInfo', JSON.stringify(booking));
        window.location = 'ticket.html';
    };

    $scope.clearSelection = function() {
        $scope.selectedMovie = null;
        $scope.selectedShow = null;
        $scope.selectedSeats = [];
        $scope.seatRows = [];
        $scope.showSeatSelection = false;
        try { localStorage.removeItem('selectedMovie'); } catch(e) {}
    };
});

app.controller("ticketController", function ($scope) {
    var bookingInfo = localStorage.getItem('bookingInfo');
    $scope.ticket = bookingInfo ? JSON.parse(bookingInfo) : null;

    $scope.printTicket = function() {
        window.print();
    };
});