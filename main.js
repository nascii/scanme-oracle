var scan = require('./scan');

var requestData = {
    "user_info": {
        "first_name": "Lauren",
        "last_name": "EIREANNACH"
    },
    "ic_image_uri": "https://www.aph.com/community/wp-content/uploads/2014/10/cut.jpg"
}

var requestData = {
    "user_info": {
        "first_name": "Dilip",
        "last_name": "Doshi"
    },
    "ic_image_uri": "http://ptshamrock.com/images/other/czech_passport_mrz.jpg"
}

var requestData = {
    "user_info": {
        "first_name": "Vzor",
        "last_name": "Specimen"
    },
    "ic_image_uri": "https://exchangeshare.files.wordpress.com/2008/08/image1.png"
}

scan(requestData)
    .then((res) => { console.log('Is valid?', res.data.is_valid); })
    .catch(e => console.error(e));
