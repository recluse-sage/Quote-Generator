// Get Quotes from the API
let apiQuotes = [];

async function getQuotes() {
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes)
    } catch(error){
         
    }
    alert (error)
    // catch error
}




// On Load
getQuotes();