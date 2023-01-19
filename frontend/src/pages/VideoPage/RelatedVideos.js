import axios from "axios";
import React, { useState, useEffect } from 'react';
import { KEY } from "../../localKey";
import { useNavigate, Link } from "react-router-dom";
import { DATA } from "../../localData"
import VidMapper from "../../components/VidMapper";

const RelatedVideos = (props) => {

    const [searchResults, setSearchResults] = useState([
        {
            "kind": "youtube#searchResult",
            "etag": "7cPRrt_6YM9jGChF9DXaLzEtsjk",
            "id": {
                "kind": "youtube#video",
                "videoId": "FpFJv3LeXTs"
            },
            "snippet": {
                "publishedAt": "2021-04-06T06:19:24Z",
                "channelId": "UCvlE5gTbOvjiolFlEm-c_Ow",
                "title": "Niki play with Hot Wheels cars and playsets - Collection video with Toy cars",
                "description": "#ad\nChildren's stories about toy cars. Children play with Hot Wheels cars and build a city from play sets.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/FpFJv3LeXTs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/FpFJv3LeXTs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/FpFJv3LeXTs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/FpFJv3LeXTs/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/FpFJv3LeXTs/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Vlad and Niki",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-06T06:19:24Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "u1DNNqAx4Au0HYoeaLe-lU-aJO8",
            "id": {
                "kind": "youtube#video",
                "videoId": "ZWMPa1MP7dg"
            },
            "snippet": {
                "publishedAt": "2021-04-01T16:06:12Z",
                "channelId": "UCvlE5gTbOvjiolFlEm-c_Ow",
                "title": "Vlad and Niki play with toy cars - Collection car videos for kids",
                "description": "Vlad and Niki play with toy cars - Collection video for kids\n\nPlease Subscribe!\n\nVlad and Niki Merch https://vladandniki.com/\n\nDownload Vlad and Niki app:\nhttps://play.google.com/store/apps/details?id=me.apptivise.vladnikita\nhttps://apps.apple.com/ru/app/vlad-niki/id1497525407\n\nVLAD Instagram - https://www.instagram.com/Vlad.super.Vlad/\nNIKITA Instagram - https://www.instagram.com/nikitoys_official/",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ZWMPa1MP7dg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ZWMPa1MP7dg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ZWMPa1MP7dg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/ZWMPa1MP7dg/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/ZWMPa1MP7dg/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Vlad and Niki",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-01T16:06:12Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "2ncixgRaHeDaSuWL-WM4tyBPIgM",
            "id": {
                "kind": "youtube#video",
                "videoId": "FOVe6CUi9QQ"
            },
            "snippet": {
                "publishedAt": "2020-12-14T12:54:47Z",
                "channelId": "UCx790OVgpTC1UVBQIqu3gnQ",
                "title": "Roma Diana and their sweetest stories for children",
                "description": "Roma and Diana pretend to play with sweets. The sweetest stories for children from Diana and Roma\nRoma's Instagram: https://www.instagram.com/kidsromashow/\r\nSubscribe to Kids Roma Show - http://bit.ly/2kj62uh #romaanddiana #roma #kidsromashow #kidsvideo Facebook https://www.facebook.com/KidsRomaShow",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/FOVe6CUi9QQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/FOVe6CUi9QQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/FOVe6CUi9QQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/FOVe6CUi9QQ/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/FOVe6CUi9QQ/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "★ Kids Roma Show",
                "liveBroadcastContent": "none",
                "publishTime": "2020-12-14T12:54:47Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "5Vn8bPIOhfK5_wGRbIPMRT6utuc",
            "id": {
                "kind": "youtube#video",
                "videoId": "6JGVus2zR6o"
            },
            "snippet": {
                "publishedAt": "2022-07-14T18:30:43Z",
                "channelId": "UCVEDZVtA5NUtjxSXHjtvkag",
                "title": "The Kids Play with Real Vehicles like Fire Trucks",
                "description": "In this compilation, children experience different stories with vehicles like fire trucks, police cars, airplanes and more.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/6JGVus2zR6o/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/6JGVus2zR6o/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/6JGVus2zR6o/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/6JGVus2zR6o/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/6JGVus2zR6o/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Kinder Spielzeug Kanal",
                "liveBroadcastContent": "none",
                "publishTime": "2022-07-14T18:30:43Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "1tDUZV-QbV4Ksb1GWnYtqN9-r2I",
            "id": {
                "kind": "youtube#video",
                "videoId": "nmBpl0rU8DI"
            },
            "snippet": {
                "publishedAt": "2017-11-28T09:56:45Z",
                "channelId": "UC-PrBbBlScO9CmH_51fXqhQ",
                "title": "Christmas with Car City! Carl Super Truck, Car Patrol Police Car & Fire Truck and Tom the Tow Truck",
                "description": "Get Car City World, the ultimate app for Car City little fans! Play games, learn through educational activities, watch episodes of Car City:\nhttp://smarturl.it/CarCityApps\n\nDownload Car City apps and get tons of Car City videos, games and preschool lessons (iOS & Android):\nhttps://mini-mango.com/\nGet Car City World, the ultimate app for Car City little fans! Play games, learn through educational activities, watch episodes of Car City:\nhttp://smarturl.it/CarCityApps\n  \nDownload Car City apps and get tons of Car City videos, games and preschool lessons (iOS & Android):\nhttps://mini-mango.com/\n \nChristmas with Car City! Carl Super Truck, Car Patrol Police Car & Fire Truck and Tom the Tow Truck\n\nDownload the Kids Flix app here and watch your favorite videos without ads ! \nAndroid: http://smarturl.it/KidsFlix_Android\nAmazon: http://smarturl.it/KidsFlix_Amazon\niOS: http://smarturl.it/KidsFlix_iOS\n\nChrsitmas with Car City! Carl Super Truck, Car Patrol Police Car & Fire Truck and Tom the Tow Truck\nIn this cartoon for kids, Carl the super truck transforms into Supertruck the Giant Sledge . When a vehicle is in need, Carl comes to the rescue, today Carl the super truck transforms into Supertruck the Giant Sledge  to help his friend. Carl the super truck can transform into anything he wants: Bulldozer, tractor, monster truck and Supertruck the Giant Sledge . In this episode, discover Carl’s new transformation: Supertruck the Giant Sledge \n\nWach the latest episode of Car City here:\n➢ https://goo.gl/SAfWUo\n\nCarl the Super Truck is a construction cartoon for children. Transformer Carl is an amazing truck, he can transform into any vehicle:  fire truck, police car, ambulance, garbage truck, bus, any construction truck like bulldozer, tractor, excavator, monster truck and any kind of transport, even a train! This cartoon for children about trucks is ideal for boys and girls who are interested in cars!  \n\n➢ Subscribe for more trucks cartoons for children:\nhttps://www.youtube.com/channel/UC-PrBbBlScO9CmH_51fXqhQ?sub_confirmation=1\n\nWelcome to Car City, where cars and trucks live happily together. Follow the adventures of Tom the Tow Truck, always ready to help his friends, Mat the Police Car and Franck the Fire Truck the fearless Car Patrol detectives, Troy the fastest Train and Carl the Super Truck & many other friends in their incredible adventures. \n\n🚒 🚛 🚓 🚚 🚑 🚗💨\nWatch the latest episodes of the adventures of Car City:\nhttps://www.youtube.com/playlist?list=PLgFmDqLEBH62y4o62-6Dv-qoghdOEJJYn\n\n➢ Tom The Tow Truck in Car City\nhttps://www.youtube.com/playlist?list=PLTnm-YYb9N8i2WUBCX-ce8yx8SHvHvGKx\n\n➢ Tom the Tow Truck's Paint Shop in Car City\nhttps://www.youtube.com/playlist?list=PLTnm-YYb9N8hU2pGt7wodRtWolQyPPKkX\n\n➢ Tom the Tow Truck's car Wash in Car City\nhttps://www.youtube.com/playlist?list=PLTnm-YYb9N8gDrOD8o5CdQHAOGo0pPbls\n\n➢ Troy the Train in Car City\nhttps://www.youtube.com/playlist?list=PLA5WxhnkgnM-RkZAw4W-kOybE7hBD6Y50\n\n➢ Carl the Transformer Truck in Car City\nhttps://www.youtube.com/playlist?list=PLgFmDqLEBH611J6tTAqG5AwtyS3cQDqJo\n\n➢ Car Patrol in Car City\nhttps://www.youtube.com/playlist?list=PLgFmDqLEBH62MWEziBcTAVhlDOHGVxuet\n\n➢ Construction Squad in Car City \nhttps://www.youtube.com/playlist?list=PLgFmDqLEBH63gRl3QLhfk8seKCAmGRL0Z\n\n➢ Amber the Ambulance in Car City\nhttps://www.youtube.com/playlist?list=PLgFmDqLEBH639yFYw2r5c1hsKnWRhusHE\n\n➢ Babies Trucks in Car City\nhttps://www.youtube.com/playlist?list=PLgFmDqLEBH62HZ9A7nU57SFAJHRygrOi9\n\n➢ Car City : All the Trucks, Trains, Cars and Construction vehicles cartoon for kids\nhttps://www.youtube.com/watch?v=9vkAcR8Xmic&list=PLgFmDqLEBH60iNuD8Vyp80Ekf0mTawAjI\n\n➢ Discover Learn TV and Learn Shapes, Learn Colors, Learn Numbers with Ethan the Truck, Dino the Dinosaur, Tiny Trucks and Ted the Train\nhttps://www.youtube.com/playlist?list=PLbRaexnJ5JCpqLOuumZT_BstcqlLfGDBo\n\nCOLORS FOR CHILDREN WITH BABY DINO & FUN LEARNING COLORS\nhttps://www.youtube.com/playlist?list=PLZrLV7bQqF7WgGPYwX6Yn7GxnqZ57dZLx\n\nLearn with Trucks & Toys for Kids\nhttps://www.youtube.com/playlist?list=PLbBa72b2PxCkJP-Y6WMumqFTkZo1v6oPz",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/nmBpl0rU8DI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/nmBpl0rU8DI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/nmBpl0rU8DI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/nmBpl0rU8DI/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/nmBpl0rU8DI/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Super Truck - Car City Universe",
                "liveBroadcastContent": "none",
                "publishTime": "2017-11-28T09:56:45Z"
            }
        }
    ])

    
    useEffect(() => { 
        getRelatedVideos();
        // console.log(props.videoId)
    }, [props.videoId])
    

    const getRelatedVideos = async () => {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=${KEY}&maxResults=5&part=snippet`
                );
                setSearchResults(response.data)
                // console.log(relatedVideos)
                
            } catch (error) {
                console.log(error.message)
            }
        }; 

    return (
        <div>
        <VidMapper searchResults={searchResults} key={searchResults.etag}/>
    </div>
      );
}
 
export default RelatedVideos;