
// let address = createAddress('a', 'b', 'c');

// console.log(address);

// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let address = new CreateAddress('a', 'b', 'c');
console.log(address);

// Constructor Function
function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}