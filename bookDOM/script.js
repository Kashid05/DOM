let getChapters = document.getElementById('getChapters');
getChapters.addEventListener('click',displayChapters);

async function displayChapters(){
    const apiURL = 'https://bhagavadgitaapi.in/chapters/';
    try{
        const response = await fetch(apiURL);
        
        if(response.ok){ 
            const data = await response.json();
            console.log(data);
            chapterWiseData(data);
        }

    }
    catch(error){
        console.log(error);
    }
}

function chapterWiseData(data){
    let chapterList = document.getElementById('data-container');
    chapterList.innerHTML = '';

    const chaptersHTML = data.map(chapter => `
        <h2> Chapter Name: ${chapter.name}</h2>
        <span> Chapter Meaning: ${chapter.meaning.en}</span>
        <span> Chapter Meaning in hindi: ${chapter.meaning.hi}</span>
        <p>Summary in English: ${chapter.summary.en}</p>
        <p>Summary in Hindi: ${chapter.summary.hi}</p>
        <hr>
        `).join('');

    
    chapterList.innerHTML = chaptersHTML;


}
