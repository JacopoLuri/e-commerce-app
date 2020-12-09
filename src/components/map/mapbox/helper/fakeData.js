import { shopData } from '../../../../data/shopData';

const fakeData = () => {

    const result = shopData.map((el, idx) => {
        let array = [];
        el.shops.map((element, index) => {
            array.push({
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [
                        element.LON,
                        element.LAT
                    ]
                },
                'properties': {
                    'id': index,
                    'name': element.name,
                    'title': element.name,
                    'description': element.email,
                    'phone': element.phone,
                    'address': element.address,
                    'address2': element.address2,
                    'address3': element.address3
                },
            })
        })
        return array.flat();
    });
    return result;
};

export default fakeData;