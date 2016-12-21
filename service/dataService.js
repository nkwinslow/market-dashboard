var app = angular.module('hoist');

app.service('dataService', ['$http', function($http) {

    this.getData = function() {
        return appMarket;
    };

    this.getSubs = function() {
        return subscriptions;
    };

    this.getSoon = function() {
        return comingSoon;
    };

    this.getApp = function(id) {
        for(var i of appMarket) {
            if(i.id == id) {
                return i;
            }
        }
    };


    this.getBraintreePlans = function(){
        return $http({
            method: "GET",
            url: "http://ava.techego.com/api/v2/hoist_tree",
            headers: {
                'Accept': 'application/json',
                'X-DreamFactory-Api-Key': '',
                'X-DreamFactory-Session-Token': ''
            }
        }).then(function(response){
            if(response.status != 200) {
                return 'Error';
            }

            return response.data;
        })
    }




    var appMarket = [
        {
            "id": 01,
            "appName": "AVA",
            "path": "../assets/images/ava-logo2.png",
            "url": "www.google.com"
        },
        {
            "id": 02,
            "appName": "APT",
            "path": "",
            "url": "www.apple.com"
        },
        {
            "id": 03,
            "appName": "Sync",
            "path": "",
            "url": "sync.thatapp.io"
        },
        {
            "id": 04,
            "appName": "Google",
            "path": "",
            "url": "www.maps.google.com"
        },
        {
            "id": 05,
            "appName": "Youtube",
            "path": "",
            "url": "www.youtube.com"
        },
        {
            "id": 06,
            "appName": "Audit",
            "path": "",
            "url": "www.microsoft.com"
        },
        {
            "id": 07,
            "appName": "Sheets",
            "path": "",
            "url": "www.sheets.google.com"
        },
    ]

    var subscriptions = [
        {
            "id": 01,
            "appName": "AVA",
            "path": "",
            "url": "www.microsoft.com"
        },
        {
            "id": 07,
            "appName": "Sheets",
            "path": "../assets/images/ava-logo2.png",
            "url": "www.sheets.google.com"
        },
    ]

    var comingSoon = [
        {
            "id": 11,
            "appName": "AC/DC",
            "path": "",
            "url": "www.maps.google.com"
        },
    ]

}]); //end dataService
