//import { userObject } from './Users.js';
const residentObject = {
    resident1: {
        name: 'Anne Chan', 
        location: 'San Pablo, CA',
        lat: 37.9621,
        lng: -122.3455
    },
    resident2: {
        name: 'Daniel Geiger',
        location: 'Lehi, UT',
        lat: 40.3916,
        lng: -111.8508,
    },
    resident3: {
        name: 'Nancy Kousholt',
        location: 'New York, NY',
        lat: 40.7128,
        lng: -74.0060,
    },
    resident4: {
        name: 'Katrina Lee Villanueva',
        location: 'New York, NY',
        lat: 40.7128,
        lng: -74.0060,
    },
    resident5: {
        name: 'Adam Sheff',
        location: 'Philadelphia, PA',
        lat: 39.9526,
        lng: -75.1652,
    },
    resident6: {
        name: 'Ali Elhawary',
        location: 'Temple City, CA',
        lat: 34.1072,
        lng: -118.0578,
    },
    resident7: {
        name: 'Angelynn Truong',
        location: 'Orange County, CA',
        lat: 33.7175,
        lng: -117.8311,
    },
    resident8: {
        name: 'Clinton Quach',
        location: 'Los Angeles, CA',
        lat: 34.0522,
        lng: -118.2437,
    },
    resident9: {
        name: 'Conrad Friesen',
        location: 'Santa Ana, CA',
        lat: 33.7455,
        lng: -117.8677,
    },
    resident10: {
        name: 'Duke Lee',
        location: 'New York, NY',
        lat: 40.7128,
        lng: -74.0060,
    },
    resident11: {
        name: 'Dustin Jones',
        location: 'Knoxville, TN',
        lat: 35.9606,
        lng: -83.9207,
    },
    resident12: {
        name: 'Danni Denmark',
        location: 'Atlanta, GA',
        lat: 33.7490,
        lng: -84.3880,
    },
    resident13: {
        name: 'Elijah Tang',
        location: 'Orange County, CA',
        lat: 33.7175,
        lng: -117.8311,
    },
    resident14: {
        name: 'Isaiah Delgado',
        location: 'Long Island, NY',
        lat: 40.7891,
        lng: -73.1350,
    },
    resident15: {
        name: 'Jacob Davis',
        location: 'Madison, WI',
        lat: 43.0731,
        lng: -89.4012,
    },
    resident16: {
        name: 'Jackie Whitworth',
        location: 'Chicago, IL',
        lat: 41.8781,
        lng: -87.6298,
    },
    resident17: {
        name: 'Justin Stoddard',
        location: 'Seattle, WA',
        lat: 47.6062,
        lng: -122.3321,
    },
    resident18: {
        name: 'Khan Islam',
        location: 'Alexandria, VA',
        lat: 38.8048,
        lng: -77.0469,
    },
    resident19: {
        name: 'Kyo San Ku',
        location: 'New York, NY',
        lat: 40.7831,
        lng: -73.9712,
    },
    resident20: {
        name: 'Miguel Hernandez',
        location: 'Alexandria, VA',
        lat: 38.8048,
        lng: -77.0469,
    },
    resident21: {
        name: 'Parker Hutcheson',
        location: 'Phoenix, AZ',
        lat: 33.4484,
        lng: -112.0740,
    },
    resident22: {
        name: 'Reland Boyle',
        location: 'Brooklyn, NY',
        lat: 40.6782,
        lng: -73.9442,
    },
    resident23: {
        name: 'Sebastien Fauque',
        location: 'Santa Cruz, CA',
        lat: 36.9741,
        lng: -122.0308,
    },
    resident24: {
        name: 'Vince Nguyen',
        location: 'Chicago, IL',
        lat: 41.8781,
        lng: -87.6298,
    },
    resident25: {
        name: 'Gunnar Marino',
        location: 'Chicago, IL',
        lat: 41.8781,
        lng: -87.6298,
    }
};

const selectedResidents = {
    resident1: true,
    resident2: true,
    resident3: false,
    resident4: false,
    resident5: false,
    resident6: false,
    resident7: false,
    resident8: false,
    resident9: false,
    resident10: false,
    resident11: false,
    resident12: false,
    resident13: false,
    resident14: false,
    resident15: false,
    resident16: false,
    resident17: false,
    resident18: false,
    resident19: false,
    resident20: false,
    resident21: false,
    resident22: false,
    resident23: false,
    resident24: false,
    resident25: false
};


// add event listener for page load
// render the page
    // add an event listener to the button
    // add event l
//    isteners to each of the x buttons
// re-render in 1 1 second

// define the button function
    // modify the selectedResidents
    // call the render function

// define the x button function
    // modify the selectedResidents
    //call the render function

// function tConvert (time) {
//     // Check correct time format and split into components
//     time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
//     if (time.length > 1) { // If time format correct
//       time = time.slice (1);  // Remove full string match value
//       time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
//       time[0] = +time[0] % 12 || 12; // Adjust hours
//     }
//     return time.join (''); // return adjusted time or original string
//   }
  
/* 
Page Functionality ---------------------------------------------------
*/

// have an array in chrome.storage
// for each item in the array
    //create a new div with the person's info
// let divArr=[];
//     for (){
//     divArr.push(<div></div>)
// }

document.addEventListener('DOMContentLoaded', async () => {
    //declare parentElement 
    parentElement = document.getElementById('residents');
    dropdownList = document.getElementById('residentToAdd');
    // iterate through selectedResidents
    for (const resident in selectedResidents) {
        if (selectedResidents[resident] === false){
        dropdownListItem = document.createElement('option');
        dropdownListItem.setAttribute('value', residentObject[resident]['name']);
        dropdownListItem.innerText = residentObject[resident]['name'];
        dropdownList.appendChild(dropdownListItem);
        }
        //if resident === true
        if (selectedResidents[resident]) {
            try {
                //obtain all resident details needed for fetch request and obtain JSON object from API
                const lat = residentObject[resident]['lat'];
                const lng = residentObject[resident]['lng'];
                const loc = residentObject[resident]['location'];
                const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=ICFMCYC7HOA7&format=json&by=position&lat=${lat}&lng=${lng}`;
                const res = await fetch(url);
                const data = await res.json();
                //const time = data.timestamp.toLocaleTimeString();
                const time = data.formatted.slice(11,19);
                //time = tConvert(time);
                
                //create div for the resident
                newResidentDiv = document.createElement('div');
                newResidentDiv.classList.add('resident');
                parentElement.appendChild(newResidentDiv);
                //appendChildElement.innerText = residentObject[resident]['name'] + ': ' + time;
                nameDiv = document.createElement('div');
                nameDiv.classList.add('resident-name');
                nameDiv.innerText = residentObject[resident]['name'];
                newResidentDiv.appendChild(nameDiv);

                //create a div for the button
                button = document.createElement('button');
                button.classList.add('remove-button');
                button.innerText = 'x';
                newResidentDiv.appendChild(button);

                locDiv = document.createElement('div');
                locDiv.classList.add('loc');
                locDiv.innerText = loc;
                newResidentDiv.appendChild(locDiv);

                timeDiv = document.createElement('div');
                timeDiv.classList.add('time');
                timeDiv.innerText = time;
                newResidentDiv.appendChild(timeDiv);
                
            } catch (err) {
                console.log(err);
            }
        }
    }
    
    document.getElementById('button').addEventListener('click', function(e) {
        let keyName;
        for (const key in residentObject) {
            console.log(residentObject[key]['name'])
            if (residentObject[key]['name'] === document.getElementById('residentToAdd').value) {
                keyName = key;
            }
        }
        console.log('keyname: ', keyName);
        selectedResidents[keyName] = true;
        let resident = keyName;
        try {
            //obtain all resident details needed for fetch request and obtain JSON object from API
            const lat = residentObject[resident]['lat'];
            const lng = residentObject[resident]['lng'];
            const loc = residentObject[resident]['location'];
            const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=ICFMCYC7HOA7&format=json&by=position&lat=${lat}&lng=${lng}`;
            //const res =fetch(url);
            fetch(url)
                .then((res)=> res.json())
                .then((res) => res.formatted.slice(11,19))
                .then((time) => {
                    //const data = await res.json();
                    //const time = data.timestamp.toLocaleTimeString();
                    //const time = data.formatted.slice(11,19);
                    //time = tConvert(time);
                    
                    //create div for the resident
                    newResidentDiv = document.createElement('div');
                    newResidentDiv.classList.add('resident');
                    parentElement.appendChild(newResidentDiv);
                    //appendChildElement.innerText = residentObject[resident]['name'] + ': ' + time;
                    nameDiv = document.createElement('div');
                    nameDiv.classList.add('resident-name');
                    nameDiv.innerText = residentObject[resident]['name'];
                    newResidentDiv.appendChild(nameDiv);
            
                    button = document.createElement('button');
                    button.classList.add('remove-button');
                    button.innerText = 'x';
                    newResidentDiv.appendChild(button);
            
                    locDiv = document.createElement('div');
                    locDiv.classList.add('loc');
                    locDiv.innerText = loc;
                    newResidentDiv.appendChild(locDiv);
            
                    timeDiv = document.createElement('div');
                    timeDiv.classList.add('time');
                    timeDiv.innerText = time;
                    newResidentDiv.appendChild(timeDiv);
                });
        } catch (err) {
            console.log(err);
        }
    });
});

    // try {
    //     const lat = 37.9621;
    //     const lng = -122.3455;
    //     const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=ICFMCYC7HOA7&format=json&by=position&lat=${lat}&lng=${lng}`;
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     document.getElementById('residents').appendChild();
    //     //document.getElementById('first-resident').innerText = 'Anne:' + data.formatted + residentObject['resident1']['name'];
    // } catch (err) {
    //     console.log(err);
    // }