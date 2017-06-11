"use strict";
angular.module("cktonggithubioApp", ["ngCookies", "ngResource", "ngSanitize", "ngRoute"]).config(["$routeProvider", function(a) {
    a.when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl"
    }).when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutCtrl"
    }).when("/travel", {
        templateUrl: "views/travel.html",
        controller: "TravelCtrl"
    }).when("/projects", {
        templateUrl: "views/projects.html",
        controller: "ProjectsCtrl"
    }).otherwise({
        redirectTo: "/"
    })
}]), 


angular.module("cktonggithubioApp").controller("MainCtrl", ["$scope", "$interval", function(a, b) {
    function c() {
        e - 1 > f ? f++ : f >= e - 1 && (f = 0), a.BackgroundClass = d[f]
    }
    a.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"];
    var d = ["lights"],
        e = d.length,
        f = Math.floor(Math.random() * e);
    // a.BackgroundClass = d[f], b(c, 5e3)
    a.BackgroundClass = d[f]
}]), 


angular.module("cktonggithubioApp").controller("AboutCtrl", ["$scope", function(a) {
    a.BackgroundClass = "palace"
}]), 


angular.module("cktonggithubioApp").controller("TravelCtrl", ["$scope", function(a) {
    function b(a, b, e) {
        r.append("path").datum(topojson.object(b, b.objects.land)).attr("class", "land").attr("d", n), e.features.forEach(function(a) {
            e.features.forEach(function(b) {
                a !== b && p.push({
                    source: a.geometry.coordinates,
                    target: b.geometry.coordinates
                })
            })
        }), p.forEach(function(a) {
            var b = {
                type: "Feature",
                geometry: {
                    type: "LineString",
                    coordinates: [a.source, a.target]
                }
            };
            q.push(b)
        }), r.append("g").attr("class", "arcs").selectAll("path").data(q).enter().append("path").attr("class", "arc").attr("d", n), r.append("g").attr("class", "flyers").selectAll("path").data(p).enter().append("path").attr("class", "flyer").attr("d", function(a) {
            return o(c(a))
        }), r.append("g").attr("class", "points").selectAll("text").data(e.features).enter().append("path").attr("class", "point").attr("d", n).on("mouseover", function(a) {
            console.log(l(a.geometry.coordinates)[0]), d3.select("#tooltip").style("left", j + l(a.geometry.coordinates)[0] + "px").style("top", l(a.geometry.coordinates)[1] + "px").select("#city").text(a.properties.NAME), d3.select("#tooltip").classed("hidden", !1)
        }).on("mouseout", function() {
            d3.select("#tooltip").classed("hidden", !0)
        }), d()
    }

    function c(a) {
        var b = a.source,
            c = a.target,
            d = f(b, c, .5),
            e = [l(b), m(d), l(c)];
        return e
    }

    function d() {
        r.selectAll(".land").attr("d", n), r.selectAll(".point").attr("d", n), r.selectAll(".arc").attr("d", n).attr("opacity", function(a) {
            return e(a)
        }), r.selectAll(".flyer").attr("d", function(a) {
            return o(c(a))
        }).attr("opacity", function(a) {
            return e(a)
        })
    }

    function e(a) {
        var b, c, d = l.invert([j / 2, k / 2]),
            e = d3.geo.greatArc();
        a.source ? (b = a.source, c = a.target) : (b = a.geometry.coordinates[0], c = a.geometry.coordinates[1]);
        var f = 1.57 - e.distance({
                source: b,
                target: d
            }),
            g = 1.57 - e.distance({
                source: c,
                target: d
            }),
            h = d3.scale.linear().domain([-.1, 0]).range([0, .1]),
            i = g > f ? f : g;
        return h(i)
    }

    function f(a, b, c) {
        var d = d3.geo.interpolate(a, b);
        return d(c)
    }

    function g() {
        s = [d3.event.pageX, d3.event.pageY], t = l.rotate(), d3.event.preventDefault()
    }

    function h() {
        if (s) {
            var a = [d3.event.pageX, d3.event.pageY],
                b = [t[0] + (a[0] - s[0]) / 6, t[1] + (s[1] - a[1]) / 6];
            b[1] = b[1] > 30 ? 30 : b[1] < -30 ? -30 : b[1], l.rotate(b), m.rotate(b), d()
        }
    }

    function i() {
        s && (h(), s = null)
    }
    a.BackgroundClass = "", d3.select(window).on("mousemove", h).on("mouseup", i);
    var j = window.innerWidth / 2,
        k = window.innerHeight - 175,
        l = d3.geo.orthographic().translate([j / 2, k / 2]).clipAngle(90).scale(k / 3),
        m = d3.geo.orthographic().translate([j / 2, k / 2]).clipAngle(90).scale(4 * k / 10),
        n = d3.geo.path().projection(l).pointRadius(4),
        o = d3.svg.line().x(function(a) {
            return a[0]
        }).y(function(a) {
            return a[1]
        }).interpolate("cardinal").tension(0),
        p = [],
        q = [],
        r = d3.select("body").append("svg").attr("width", j).attr("height", k).on("mousedown", g);
    queue().defer(d3.json, "../world-110m.json").defer(d3.json, "../places.json").await(b);
    var s, t
}]), 

angular.module("cktonggithubioApp").controller("ProjectsCtrl", ["$scope", function(a) {
    a.BackgroundClass = "amsterdam"
}]);