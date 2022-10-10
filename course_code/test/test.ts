// type User = { name: string } | string;
// let u1: User = {name: 'Max'};
// u1 = 'Michael';


function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
}

sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
});