function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        
        // process the picture once it is completed
        callback(url);
    }, 1000);
}

function process(url) {
    console.log(`Processing ${url}`);
}


/* you can pass the process() function to the download() function 
and execute the process() function inside the download() function 
once the download completes, */

let url = 'https://wwww.javascripttutorial.net/pic.jpg';

download(url, process);

/* 
 now using an arrow function */
 
 download(url, function(picture) {
    console.log(`Processing ${picture}`);
}); 