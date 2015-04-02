"use strict";angular.module("campaignWebsiteApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/partials/splash.html",controller:"SplashCtrl",activeTab:"splash"}).otherwise({redirectTo:"/"})}]),angular.module("campaignWebsiteApp").controller("MainCtrl",["$rootScope","$scope","$route",function(a,b,c){var d=0,e=["video/MVI_4038.mp4","video/MVI_4039.mp4","video/MVI_4040.mp4"],f=e.length,g=document.getElementById("video-player");g.src=e[d],g.addEventListener("ended",function(){d++,this.src=e[d%f],this.play()},!1),a.activeTab=c.current.activeTab}]).directive("resizemain",["$window",function(){return function(){setTimeout(function(){$("main.main").height($(window).height()-$("header").height());var a=.5*$("main.main video").height();$("main.main video").css("margin-top","-"+a+"px")},500),$(window).resize(function(){$("main.main").height($(window).height()-$("header").height());var a=.5*$("main.main video").height();$("main.main video").css("margin-top","-"+a+"px")}),setTimeout(function(){$("main.main div.banner").fadeIn(2e3)},1200)}}]),angular.module("campaignWebsiteApp").controller("AboutCtrl",["$rootScope","$scope","$route",function(a,b,c){b.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.activeTab=c.current.activeTab}]),angular.module("campaignWebsiteApp").controller("EndorsementsCtrl",["$rootScope","$scope","$route",function(a,b,c){a.activeTab=c.current.activeTab;var d=$("main.endorsements ul.js-masonry");$(window).resize(function(){d.imagesLoaded(function(){var a=(d.width()-15)/4;$("li.endorsement").height(a),$("li.highlight").height(2*a+5-94),d.masonry({columnWidth:a,itemSelector:".block",gutter:5,isAnimated:!0})})}).resize(),b.blocks=[{className:"endorsement",firstName:"Patrick",lastName:"Franks",position:"President, Robotics Club",image:"https://unsplash.it/500/500?image=646"},{className:"endorsement",firstName:"Jon",lastName:"Rovira",position:"Ex-CEO, AirHop",image:"https://unsplash.it/500/500?image=550"},{className:"endorsement",firstName:"Cody",lastName:"Schiffer",position:"President, Bitch Club",image:"https://unsplash.it/500/500?image=633"},{className:"endorsement",firstName:"Chris",lastName:"Dayal",position:"President, Carib Nation",image:"https://unsplash.it/500/500?image=634"},{className:"endorsement",firstName:"Bryan",lastName:"Berger",position:"President, Points for a Purpose",image:"https://unsplash.it/500/500?image=635"},{className:"endorsement",firstName:"Chris",lastName:"Howard",position:"Vice President, ODB",image:"https://unsplash.it/500/500?image=636"},{className:"endorsement",firstName:"Christina",lastName:"Kim",position:"Vice President, ASG",image:"https://unsplash.it/500/500?image=637"},{className:"endorsement",firstName:"Noah",lastName:"Star",position:"President, ASG",image:"https://unsplash.it/500/500?image=638"},{className:"highlight",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."},{className:"endorsement",firstName:"Bryan",lastName:"Berger",position:"President, Points for a Purpose",image:"https://unsplash.it/500/500?image=635"},{className:"endorsement",firstName:"Chris",lastName:"Howard",position:"Vice President, ODB",image:"https://unsplash.it/500/500?image=636"},{className:"endorsement",firstName:"Christina",lastName:"Kim",position:"Vice President, ASG",image:"https://unsplash.it/500/500?image=637"},{className:"endorsement",firstName:"Noah",lastName:"Star",position:"President, ASG",image:"https://unsplash.it/500/500?image=638"},{className:"endorsement",firstName:"Bryan",lastName:"Berger",position:"President, Points for a Purpose",image:"https://unsplash.it/500/500?image=635"},{className:"endorsement",firstName:"Chris",lastName:"Howard",position:"Vice President, ODB",image:"https://unsplash.it/500/500?image=636"},{className:"endorsement",firstName:"Christina",lastName:"Kim",position:"Vice President, ASG",image:"https://unsplash.it/500/500?image=637"},{className:"endorsement",firstName:"Noah",lastName:"Star",position:"President, ASG",image:"https://unsplash.it/500/500?image=638"},{className:"endorsement",firstName:"Bryan",lastName:"Berger",position:"President, Points for a Purpose",image:"https://unsplash.it/500/500?image=635"},{className:"endorsement",firstName:"Chris",lastName:"Howard",position:"Vice President, ODB",image:"https://unsplash.it/500/500?image=636"},{className:"endorsement",firstName:"Christina",lastName:"Kim",position:"Vice President, ASG",image:"https://unsplash.it/500/500?image=637"},{className:"endorsement",firstName:"Noah",lastName:"Star",position:"President, ASG",image:"https://unsplash.it/500/500?image=638"},{className:"highlight",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."},{className:"endorsement",firstName:"Bryan",lastName:"Berger",position:"President, Points for a Purpose",image:"https://unsplash.it/500/500?image=200"},{className:"endorsement",firstName:"Chris",lastName:"Howard",position:"Vice President, ODB",image:"https://unsplash.it/500/500?image=201"},{className:"endorsement",firstName:"Christina",lastName:"Kim",position:"Vice President, ASG",image:"https://unsplash.it/500/500?image=202"},{className:"endorsement",firstName:"Noah",lastName:"Star",position:"President, ASG",image:"https://unsplash.it/500/500?image=203"}]}]),angular.module("campaignWebsiteApp").controller("JoinCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("campaignWebsiteApp").controller("MediaGalleryCtrl",["$rootScope","$scope","$route","$http","$sce",function(a,b,c,d){a.activeTab=c.current.activeTab,d.get("https://afternoon-atoll-8482.herokuapp.com/instagram").success(function(a){b.instas=a}),d.get("https://afternoon-atoll-8482.herokuapp.com/twitter").success(function(a){b.tweets=a}),setTimeout(function(){var a=$("ul.instagram-feed");a.imagesLoaded(function(){a.masonry({columnWidth:320,itemSelector:".insta-item",gutter:10,isAnimated:!0})})},500)}]),angular.module("campaignWebsiteApp").controller("TeamCtrl",["$rootScope","$scope","$route",function(a,b,c){b.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.activeTab=c.current.activeTab;var d=$("main.team ul.js-masonry");$(window).resize(function(){d.imagesLoaded(function(){var a=(d.width()-15)/4;d.height(a*$("li.member")),$("li.member").height(a),d.masonry({columnWidth:a,itemSelector:".block",gutter:5,isAnimated:!0})})}).resize(),b.blocks=[{firstName:"AJ",lastName:"Vielma",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/AJVielma.jpg"},{firstName:"Alex",lastName:"Cohen",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/AlexCohen.jpg"},{firstName:"Andrew",lastName:"Green",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/AndrewGreen.jpg"},{firstName:"Archit",lastName:"Baskaran",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ArchitBaskaran.jpg"},{firstName:"Ariel",lastName:"Roitman",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ArielRoitman.jpg"},{firstName:"Ben",lastName:"Zimmerman",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/BenZimmerman.jpg"},{firstName:"Conor",lastName:"Hanon",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ConorHanon.jpg"},{firstName:"Elayna",lastName:"Shanker",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ElaynaShanker.jpg"},{firstName:"Emily",lastName:"Shanker",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/EmilyShanker.jpg"},{firstName:"Eric",lastName:"Oringer",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/EricOringer.jpg"},{firstName:"Erik",lastName:"Baker",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/ErikBaker.jpg"},{firstName:"Iwani",lastName:"Wilson",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/IwaniWilson.jpg"},{firstName:"Jacob",lastName:"Swan",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JacobSwan.jpg"},{firstName:"Jake",lastName:"Kruk",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JakeKruk.jpg"},{firstName:"Jared",lastName:"Schifrien",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JaredSchifrien.jpg"},{firstName:"Jennifer",lastName:"Li",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JenniferLi.jpg"},{firstName:"Jenny",lastName:"Hendrix",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JennyHendrix.jpg"},{firstName:"Joji",lastName:"Syed",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JojiSyed.jpg"},{firstName:"Jon",lastName:"Rovira",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JonRovira.jpg"},{firstName:"Jonny",lastName:"McBride",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JonathanMcBride.jpg"},{firstName:"Josh",lastName:"O'Neil",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JoshONeil.jpg"},{firstName:"Joris",lastName:"Cyizere",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JorisCyizere.jpg"},{firstName:"Julian",lastName:"Gerez",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/JulianGerez.jpg"},{firstName:"Katherine",lastName:"Ericson",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/KatherineEricson.jpg"},{firstName:"Kevin",lastName:"Corkran",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/KevinCorkran.jpg"},{firstName:"Leo",lastName:"Zhu",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/LeoZhu.jpg"},{firstName:"Leona",lastName:"Maliakal",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/LeonaMaliakal.jpg"},{firstName:"Lisa",lastName:"Grewe",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/LisaGrewe.jpg"},{firstName:"Liz",lastName:"Deadrick",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/LizDeadrick.jpg"},{firstName:"Maroua",lastName:"Sallami",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MarouaSallami.jpg"},{firstName:"Mary",lastName:"Felder",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MaryFelder.jpg"},{firstName:"Matthew",lastName:"Clarkston",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MatthewClarkston.jpg"},{firstName:"Maya",lastName:"Hurley-Wales",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MayaHurley-Wales.jpg"},{firstName:"Mayank",lastName:"Parikh",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MayankParikh.jpg"},{firstName:"McKenzie",lastName:"Maxson",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/McKenzieMaxson.jpg"},{firstName:"Megan",lastName:"McDowell",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MeganMcDowell.jpg"},{firstName:"Melody",lastName:"Song",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MelodySong.jpg"},{firstName:"Michael",lastName:"Graf",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/MichaelGraf.jpg"},{firstName:"Neil",lastName:"Dalvie",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/NeilDalvie.jpg"},{firstName:"Nevil",lastName:"George",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/NevilGeorge.jpg"},{firstName:"Nicholas",lastName:"McCombe",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/NicholasMcCombe.jpg"},{firstName:"Noah",lastName:"Whinston",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/NoahWhinston.jpg"},{firstName:"Philip",lastName:"Lan",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/PhilipLan.jpg"},{firstName:"Ronak",lastName:"Patel",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/RonakPatel.jpg"},{firstName:"Ross",lastName:"Krasner",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/RossKrasner.jpg"},{firstName:"Vicky",lastName:"Ho",image:"https://s3-us-west-2.amazonaws.com/campaignwebsite/team/VickyHo.jpg"}]}]),angular.module("campaignWebsiteApp").controller("VisionCtrl",["$rootScope","$scope","$route",function(a,b,c){b.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.activeTab=c.current.activeTab}]),angular.module("campaignWebsiteApp").controller("navPanelCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]).directive("resizenavpanel",["$window",function(){return function(){var a=$(window).height()-$("header").height();$("section.nav-panel").height(a),$(window).resize(function(){var a=$(window).height()-$("header").height();$("section.nav-panel").height(a)})}}]),angular.module("campaignWebsiteApp").controller("headerCtrl",["$scope","$http",function(a,b){a.joinClicked=!1,a.sayClicked=!1,a.joinClick=function(b){var c=b.target.className;if(!(c.indexOf("click-action")<=-1))switch(a.sayClicked=!1,$("header ul.controls li.say").removeClass("active"),a.joinClicked){case!1:$("header ul.controls li.join").addClass("active"),a.joinClicked=!0;break;case!0:$("header ul.controls li.join").removeClass("active"),a.joinClicked=!1}},a.sayClick=function(b){var c=b.target.className;if(!(c.indexOf("click-action")<=-1))switch(a.joinClicked=!1,$("header ul.controls li.join").removeClass("active"),a.sayClicked){case!1:$("header ul.controls li.say").addClass("active"),a.sayClicked=!0;break;case!0:$("header ul.controls li.say").removeClass("active"),a.sayClicked=!1}},a.sendEmail=function(a,c,d,e){if("undefined"!=typeof d){var f={name:a+" "+c,from:d,text:e};b.post("https://afternoon-atoll-8482.herokuapp.com/feedback",f).success(function(a){var b=$("div.signed button");a?(b.html("Thank you"),b.css("background-color","#2F9849"),b.css("border-color","#2FB149")):(b.html("Uh oh. Something went wrong."),b.css("background-color","#BD493E"),b.css("border-color","#FF6354"))}).error(function(a){console.log("Error occurred "+a)})}}}]),angular.module("campaignWebsiteApp").controller("SplashCtrl",["$rootScope","$scope","$route",function(){$("main.splash").height($(window).height());var a=document.getElementById("audio-player");setTimeout(function(){a.src="audio/jubel.mp3"},500)}]).directive("resizemain",["$window",function(){return function(){setTimeout(function(){$(window).resize(function(){$("main.splash").height($(window).height());var a=.5*$("main.splash video").height();$("main.splash div.filter").css("margin-top","-"+a+"px")}).resize()},300)}}]),angular.module("campaignWebsiteApp").controller("LoaderCtrl",["$rootScope","$scope","$route",function(){console.log("Showing loader!")}]),angular.module("campaignWebsiteApp").directive("loader",function(){return{restrict:"EA",link:function(a,b){a.$watch("$viewContentLoaded",function(){b.children().css("opacity","0.0","visibility","visible");var a='<div class="loader-container"><div class="loader"></div></div>';b.prepend(a),$(window).resize(function(){var a=$(window).height(),b=$("header").height();$("div.loader-container").height(a-b),$("div.loader-container div.loader").css("top",(a-b)/2)}).resize(),b.imagesLoaded(function(){setTimeout(function(){$("div.loader-container").remove(),b.children().animate({opacity:"1.0"},400)},500)})})}}});