//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data[0].meanings[1].definitions[0].definition)
        // console.log(data[1].meanings[0].partOfSpeech)
        // console.log(data[0].phonetic)
        
        // if( data.media_type === 'image' ){
        //   document.querySelector('img').src = data.hdurl
        // }else if(data.media_type === 'video'){
        //   document.querySelector('iframe').src = data.url
        // }
       
        // document.querySelector('h3').innerText = data.explanation
        document.querySelector('h4').innerText = data[0].phonetic
        document.querySelector('h3').innerText = data[0].meanings[1].definitions[0].definition
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

