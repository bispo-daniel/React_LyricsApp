import { Component } from "react";
import '../Css/Body.css'
import Trigger from '../Trigger'

class Body extends Component {
    render(){
        let iterator = 0

        let it = 0

        const apiHandler = () => {
            //Pegando os valores dos inputs
            let song = document.getElementsByClassName('form-control')[0].value
            let artist = document.getElementsByClassName('form-control')[1].value

            let songAndArtist = `${song} - ${artist}`

            Trigger(songAndArtist)

            //Chave privada e URL da API    
            //GET YOUR KEY HERE: https://developer.musixmatch.com/admin/applications
            let key = process.env.REACT_APP_SECRET_KEY
            let url = `http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=${key}&q_track=${song}&q_artist=${artist}`

            //Pegando a div do html que recerá os valores em outra div
            let insertInto = document.getElementById('insertInto')

            //A div que receberá cada linha da letra da música sendo declarada 
            let queryDiv = document.createElement('div')
            //Seu ID único iterado
            queryDiv.setAttribute('id', `queryDiv${iterator}`)
            iterator++
            //Inserindo na div do HTML
            insertInto.appendChild(queryDiv)

            let p = document.createElement('p')
            p.innerHTML = `Lyrics from Musixmatch S2...`
            queryDiv.appendChild(p)

                fetch(url)
                    .then(data => data.json())
                    .then(res => {
                        //Do JSON, buscando somente a letra da música
                        let path = res['message']['body']['lyrics']['lyrics_body']

                        //Este é o array de cada palavra na letra da música
                        let wordArr = Array(path.split("\n"))[0]
                        
                        //Criar um H1 para cada index do array acima
                        for(let phrase in wordArr){
                            let h1 = document.createElement('h1')
                            h1.innerHTML = `${wordArr[phrase]}`
                            queryDiv.appendChild(h1)
                        }
                    })  
            
        }

        //Função para limpar os resultados e tratando caso o usuário esqueça de usá-la
        const clearResults = () => {
            try{
                const resultsDiv = document.getElementById(`queryDiv${it}`)
                resultsDiv.style.display = 'none'
                it++
            }catch(error) {
                window.location.reload()
            }
        }

        //Função para chamar a API caso o Enter for pressionado na página
        const enterDown = (e) => {
            let key = e.key || e.code
            if(key === 'Enter'){
                apiHandler()
            }
        }

        return(
            <main onKeyUp={(e) => enterDown(e)}>
                <h1>Lyrics App</h1>
                <p>Download 'Allow CORS' browser extension...</p>
                <div className="input-group">
                    <div className="input-group-append">
                        <input type="text" id="songInput" className="form-control bg-transparent" placeholder="Song" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <input type="text" id="ArtistInput" className="form-control bg-transparent" placeholder="Artist" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                    <button onClick={() => apiHandler()}className="btn btn-outline-success" type="button">Search</button>
                </div>

                <button onClick={() => clearResults()}className="btn btn-danger w-75 mb-5" type="button">Clear</button>

                <div id="insertInto"></div>
            </main>
        )
    }
}

export default Body
