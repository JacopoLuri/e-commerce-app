// import { shopData } from '../../../../data/shopData';

// const fakeData = () => {

//     const result = shopData.map((el, idx) => {
//         let array = [];
//         el.shops.map((element, index) => {
//             array.push({
//                 'type': 'Feature',
//                 'geometry': {
//                     'type': 'Point',
//                     'coordinates': [
//                         element.LON,
//                         element.LAT
//                     ]
//                 },
//                 'properties': {
//                     'category': idx,
//                     'id': index,
//                     'name': element.name,
//                     'title': element.name,
//                     'description': element.email,
//                     'phone': element.phone,
//                     'address': element.address,
//                     'address2': element.address2,
//                     'address3': element.address3
//                 },
//             })
//         })
//         return array.flat();
//     });
//     return result;
// };

// export default fakeData;



export const stores = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.0719384,
                    51.5289945
                ]
            },
            "properties": {
                'category': 0,
                'id': 0,
                "name": "WeAreArrow Jewellery",
                "phone": "+442075890588",
                "email": "arrow@wearearrow.com",
                "country": "UK",
                "city": "London",
                "address": "118 Columbia Road ",
                "address2": "",
                "address3": "E2 7RG"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.1428859,
                    51.5539548
                ]
            },
            "properties": {
                'category': 0,
                'id': 1,
                "name": "Jessica de Lotz Jewellery",
                "phone": "+447958689591",
                "email": "jessica@jessicadelotz.co.uk",
                "country": "UK",
                "city": "London",
                "address": "49 Fortess Road ",
                "address2": "Kentish Town",
                "address3": "NW5"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.1422907,
                    51.5030739
                ]
            },
            "properties": {
                'category': 0,
                'id': 2,
                "name": "Tatty Devine",
                "phone": "+442078362685",
                "email": "care@tattydevine.com",
                "country": "UK",
                "city": "London",
                "address": "Unit 9, Hopewell Business Centre 105 ",
                "address2": "Hopewell Drive Kent",
                "address3": "ME5 7DX"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.07090288465645676,
                    51.52109869181407
                ]
            },
            "properties": {
                'category': 1,
                'id': 0,
                "name": "ATIKA",
                "phone": "+442073770730",
                "email": "hello@atikalondon.co.uk",
                "country": "UK",
                "city": "London",
                "address": "55-59 Hanbury St ",
                "address2": "",
                "address3": "E1 5JP"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.0804012,
                    51.5265515
                ]
            },
            "properties": {
                'category': 1,
                'id': 1,
                "name": "AIDA Schroditch",
                "phone": "+442077392811",
                "email": "aida@aidashoreditch.co.uk",
                "country": "UK",
                "city": "London",
                "address": "133 Shoreditch H. Street ",
                "address2": "Shoreditch",
                "address3": "E1 6JE"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.1374801,
                    51.5122446
                ]
            },
            "properties": {
                'category': 1,
                'id': 2,
                "name": "Alex Eagle",
                "phone": "+442075890588",
                "email": "info@alexeagle.co.uk",
                "country": "UK",
                "city": "London",
                "address": "6-10 Lexington Street ",
                "address2": "",
                "address3": "W1F 0LB"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.0719384,
                    51.5289945
                ]
            },
            "properties": {
                'category': 2,
                'id': 0,
                "name": "MJ ALL TEC LTD",
                "phone": "+4420 7580 2135",
                "email": "sales@mjalltec.com",
                "country": "UK",
                "city": "London",
                "address": "246 Tottenham Court Road ",
                "address2": "",
                "address3": "W1T 7QU"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    0.1773866,
                    51.4608057
                ]
            },
            "properties": {
                'category': 2,
                'id': 1,
                "name": "iFix Centre",
                "phone": "+442072281888",
                "email": "info@ifixcentre.co.uk",
                "country": "UK",
                "city": "London",
                "address": "86 Battersea Rise ",
                "address2": "",
                "address3": "SW11 1EJ"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    0.0650038,
                    51.5079507
                ]
            },
            "properties": {
                'category': 2,
                'id': 2,
                "name": "Power Buddy",
                "phone": "+448005677162",
                "email": "info@powerbuddy.co.uk",
                "country": "UK",
                "city": "London",
                "address": "8, 2 Pinchin St ",
                "address2": "Whitechapel",
                "address3": "E1 1SA"
            }
        }
    ]
};


