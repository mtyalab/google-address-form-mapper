## Angular Google Maps Example
This is an example Angular application that demonstrates how to use Google Maps API to display a map and implement address autocomplete functionality.

## Prerequisites
Before running this application, you need to have the following installed on your machine:

Node.js (v14.x or higher)
Angular CLI (v12.x or higher)


## Getting Started
Follow the steps below to run this application locally:

1. Clone the repository to your local machine:

`git clone https://github.com/your-username/angular-google-maps-example.git`

2. Change to the project directory:

`cd angular-google-maps-example`

3. Install dependencies:

`npm install`

4. Replace the Google Maps API key in the src/index.html file with your own API key. You can obtain an API key by following the instructions in the Google Maps JavaScript API documentation.

5. Start the development server:

6. Open a web browser and navigate to `http://localhost:4200` to view the application.

## Features
This example Angular application includes the following features:

- Displaying a Google Map using the @agm/core library, which provides Angular components for Google Maps.
- Implementing an address autocomplete feature using the Google Places Autocomplete API.
- Extracting address components (e.g., country, region, district, road, etc.) from the selected place and populating a form using Angular's reactive forms approach.
- Demonstrating how to use the FormData object to prepare data for HTTP POST requests, including file uploads.
- Showing how to subscribe to map events using the `@agm/core` library's `subscribeToMapEvent` method.


## Technologies Used

- Angular (v12.x)
- TypeScript
- Google Maps JavaScript API
- @agm/core library for Angular Google Maps integration


## License
This project is licensed under the MIT License.

## Contributing
If you'd like to contribute to this project, please fork the repository, create a new branch, and submit a pull request. Contributions are always welcome!
