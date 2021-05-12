const styles = {
    default: [],
    nightmode: [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#212121"
            }]
        },
        {
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }]
        },
        {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "on"
            }]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#757575"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#bdbdbd"
            }]
        },
        {
            "featureType": "administrative.neighborhood",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#181818"
            }]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#1b1b1b"
            }]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#2c2c2c"
            }]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#8a8a8a"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#373737"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#3c3c3c"
            }]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [{
                "color": "#4e4e4e"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        },
        {
            "featureType": "transit",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#3d3d3d"
            }]
        }
    ],
    moonlight: [{
            "featureType": "all",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        },
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [{
                    "visibility": "off"
                },
                {
                    "saturation": "-100"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                    "visibility": "off"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#4d6059"
            }]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#4d6059"
            }]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#4d6059"
            }]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "lightness": 21
            }]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#4d6059"
            }]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#4d6059"
            }]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                    "visibility": "on"
                },
                {
                    "color": "#7f8d89"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#7f8d89"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                    "color": "#7f8d89"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                    "color": "#7f8d89"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#7f8d89"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#7f8d89"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#7f8d89"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#7f8d89"
            }]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                    "color": "#2b3638"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#2b3638"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#24282b"
            }]
        },
        {
            "featureType": "water",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#24282b"
            }]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "water",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }
    ]
};