var scan = require('./scan');

var requestData = {
    "user_info": {
        "first_name": "Igor",
        "last_name": "Petrov"
    },
    "ic_image_uri": "https://www.aph.com/community/wp-content/uploads/2014/10/cut.jpg"
}

scan(requestData)
    .then((res) => { console.log('Is valid?', res.data.is_valid); })
    .catch(e => console.error(e));
