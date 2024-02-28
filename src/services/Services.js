export async function postData(url = "", data = {}) {
    // Default options are marked with *
    try {
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                "Access-Control-Allow-Origin": true,
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
        console.log("Error", error)
    }
}


export async function GET(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (error) {
        console.log(">>>>>>")
    }
}

export async function init() {
    const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
    const movies = await response.json();
   // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>", movies);
}