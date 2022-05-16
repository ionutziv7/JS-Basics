
const address = {
    street: "Road xyz",
    city: "Los Angeles",
    zipcode: 123456
};

function showAddress(address) {

    for(let key in address)
        console.log(key, address[key]);
}

showAddress(address);