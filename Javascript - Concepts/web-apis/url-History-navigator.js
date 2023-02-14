'use strict'

console.log(`\n\n***********URL Objet (Location)***********`);

console.log(location);
console.log(location.origin); //Host
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash); //detect value of the url
console.log(location.search); // value through url
console.log(location.pathname);


console.log(`\n\n***********History Object***********`);

console.log(history);
console.log(history.length); // number of pages you have visited

// history.back(3)
// history.forward(1)

// History.go(-1)  -> negative numbers will make us go backwards

console.log(`\n\n***********Navigator***********`);
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
