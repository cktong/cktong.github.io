'use strict';

angular.module('cktonggithubioApp')
    .controller('TravelCtrl', function ($scope) {
        $scope.BackgroundClass = '';
        var r;

        d3.select(window)
            .on('mousemove', mousemove)
            .on('mouseup', mouseup);

        var width = screen.width / 2,
            height = screen.height - 175;

        var proj = d3.geo.orthographic()
            .translate([width / 2, height / 2])
            .clipAngle(90)
            .scale(height / 3);

        var sky = d3.geo.orthographic()
            .translate([width / 2, height / 2])
            .clipAngle(90)
            .scale(4 * height / 10);

        var path = d3.geo.path().projection(proj).pointRadius(4);

        var swoosh = d3.svg.line()
            .x(function (d) {
                return d[0];
            })
            .y(function (d) {
                return d[1];
            })
            .interpolate('cardinal')
            .tension(.0);

        var links = [],
            arcLines = [];

        var svg = d3.select('body').append('svg')
            .attr('width', width)
            .attr('height', height)
            .on('mousedown', mousedown);

        queue()
            .defer(d3.json, '../world-110m.json')
            .defer(d3.json, '../places.json')
            .await(ready);

        function ready(error, world, places) {

            svg.append('path')
                .datum(topojson.object(world, world.objects.land))
                .attr('class', 'land')
                .attr('d', path);

            // spawn links between cities as source/target coord pairs
            places.features.forEach(function (a) {
                places.features.forEach(function (b) {
                    if (a !== b) {
                        links.push({
                            source: a.geometry.coordinates,
                            target: b.geometry.coordinates
                        });
                    }
                });
            });

            // build geoJSON features from links array
            links.forEach(function (e, i, a) {
                var feature = {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [e.source, e.target]
                    }
                };
                arcLines.push(feature);
            });

            svg.append('g').attr('class', 'arcs')
                .selectAll('path').data(arcLines)
                .enter().append('path')
                .attr('class', 'arc')
                .attr('d', path);

            svg.append('g').attr('class', 'flyers')
                .selectAll('path').data(links)
                .enter().append('path')
                .attr('class', 'flyer')
                .attr('d', function (d) {
                    return swoosh(flying_arc(d));
                });

            svg.append('g').attr('class', 'points')
                .selectAll('text').data(places.features)
                .enter().append('path')
                .attr('class', 'point')
                .attr('d', path)
                .on('mouseover', function (d) {

                    // console.log(d3.select(this).attr('d'));
                    console.log(proj(d.geometry.coordinates)[0]);

                    d3.select('#tooltip')
                        .style('left', width + proj(d.geometry.coordinates)[0] + 'px')
                        .style('top', proj(d.geometry.coordinates)[1] + 'px')
                        .select('#city')
                        .text(d.properties.NAME);

                    d3.select('#tooltip').classed('hidden', false);
                })
                .on('mouseout', function (d) {
                    d3.select('#tooltip').classed('hidden', true);
                });


            refresh();
        }

        function flying_arc(pts) {
            var source = pts.source,
                target = pts.target;

            var mid = location_along_arc(source, target, .5);
            var result = [proj(source),
                sky(mid),
                proj(target)
            ];
            return result;
        }



        function refresh() {
            svg.selectAll('.land').attr('d', path);
            svg.selectAll('.point').attr('d', path);

            svg.selectAll('.arc').attr('d', path)
                .attr('opacity', function (d) {
                    return fade_at_edge(d);
                });

            svg.selectAll('.flyer')
                .attr('d', function (d) {
                    return swoosh(flying_arc(d));
                })
                .attr('opacity', function (d) {
                    return fade_at_edge(d);
                });
        }

        function fade_at_edge(d) {
            var centerPos = proj.invert([width / 2, height / 2]),
                arc = d3.geo.greatArc(),
                start, end;
            // function is called on 2 different data structures..
            if (d.source) {
                start = d.source,
                end = d.target;
            } else {
                start = d.geometry.coordinates[0];
                end = d.geometry.coordinates[1];
            }

            var start_dist = 1.57 - arc.distance({
                source: start,
                target: centerPos
            }),
                end_dist = 1.57 - arc.distance({
                    source: end,
                    target: centerPos
                });

            var fade = d3.scale.linear().domain([-.1, 0]).range([0, .1]);
            var dist = start_dist < end_dist ? start_dist : end_dist;

            return fade(dist);
        }

        function location_along_arc(start, end, loc) {
            var interpolator = d3.geo.interpolate(start, end);
            return interpolator(loc);
        }

        // modified from http://bl.ocks.org/1392560
        var m0, o0;

        function mousedown() {
            m0 = [d3.event.pageX, d3.event.pageY];
            o0 = proj.rotate();
            d3.event.preventDefault();
        }

        function mousemove() {
            if (m0) {
                var m1 = [d3.event.pageX, d3.event.pageY],
                    o1 = [o0[0] + (m1[0] - m0[0]) / 6, o0[1] + (m0[1] - m1[1]) / 6];
                o1[1] = o1[1] > 30 ? 30 :
                    o1[1] < -30 ? -30 :
                    o1[1];
                proj.rotate(o1);
                sky.rotate(o1);
                refresh();
            }
        }

        function mouseup() {
            if (m0) {
                mousemove();
                m0 = null;
            }
        }

    });