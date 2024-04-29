const title = document.querySelector(".title")
const author = document.querySelector(".author")
const api = "https://type.fit/api/quotes";

async function getQuotes(){
    try{
        const response = await fetch(api)
        if (response.ok){
            const data = await response.json()
            create(data)
        }
        else{
            console.log("Error HTTP: " + response.status);
        }
        
    } catch(error){
        console.log("Ошибка при выполнении запроса: " + error.message);
    }
}

function create(quotesData){
    const randomIndex = Math.floor(Math.random() * quotesData.length)
    const randomQuote = quotesData[randomIndex]

    title.innerHTML = `${randomQuote.text}`;
    author.innerHTML = `${randomQuote.author}`;
}

function generate(){
    getQuotes()
}