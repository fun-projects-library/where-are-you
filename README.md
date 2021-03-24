# where-are-you
 
WHERE AM I

In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Please sign in and take an API key for this project. Look at the Geocodeapi documentation.

Here are your tasks:

PART 1
1.
Create a function 'whereAmI' which takes two parameters as inputs; a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).

2.
You will do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name.

Use this API to do reverse geocoding, assign it to a variable url:
“https://app.geocodeapi.io/api/v1/reverse?apikey= “

The AJAX call will be done to a URL with this format:
“https://app.geocodeapi.io/api/v1/reverse?apikey=YOUR-API-KEY&point.lat=52.508&point.lon=13.381”

52.508 is Latitude and 13.381 is Longitude. You can make a string concatenation to create a format like this.

Use the fetch API and promises (use .then() methods) to get the data. 😉

3.
Call your function with coordinates and once you have the data, read and parse the data using .json() .

4.
Take a look at it in the console to see all the attributes that you recieved about the provided location. 
Then, using this data, log a messsage like this to the console: 'You are in Berlin, country of Germany'

5.
Chain a .catch() method to the end of the promise chain and log errors to the console

6.
This API allows you to make only 2 requests per second. If you reload fast or if you pass wrong API key; you will get error with code 403. If your coordinates are not true, you will get error with code 400.

In your first .then() method; create and throw an error (if there is no response) to reject the promise yourself, with a meaningful error message. If you got stuck you can look at the hint at the end of the page.


PART 2

7.
Now it's time to use DOM to take coordinates. Make an “click” event handler to the “Where Am I” button. Call the displaycountry function (it is on ./helper.js)
Give coordinates from DOM and see the result on console again.

8.
Lets do some magic now. Use the received data to render a country.

To do that, take the relevant attribute from the API result, and (in your second .then()) plug it into the countries API that we have been using previous Project (Country Search). 
(Hint: use fetch again)

9.
Take the response and render the country and also catch any errors, just like we have done before. Before sending data to renderCountry, please print the data and see on console. 
You can find renderCountry and displayCountry functions in .helper.js


TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 49.037, -123.140
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀


HINT:
if (!res.ok) throw new Error(“meaningful error message”)
