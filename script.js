async function getSuggestions() {
    const result = await fetch(`https://www.boredapi.com/api/activity`) ; 
    const data = await result.json();
    document.getElementById('suggestions').innerHTML = data.activity;
}

getSuggestions();