'use strict';
/************************************************************************** Defaul values *****************************************************************************/
const bookingsArray = [];
/**
 * Store bookings in an array.
 * @param {string} flightNum number of the flight
 * @param {number} numPassengers number of passengers, default value 1
 * @param {number} price of the flight, default value 199 * number of passengers
 */
function createBooking(flightNum, numPassengers = 1, price = 199 * numPassengers)
{
    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookingsArray.push(booking);
};
createBooking("A920");
createBooking("A230", 2);
createBooking("A340", 2, 500);
createBooking("A340", undefined, 270); // skip the second parameter, leaving it blank
