import { Component } from "react";
import '../Css/Body.css'

class Body extends Component {
    render(){
        let iterator = 0

        const apiHandler = () => {
            //Pegando o valor dos inputs
            let song = document.getElementsByClassName('form-control')[0].value
            let artist = document.getElementsByClassName('form-control')[1].value

            //Chave privada e URL da API
            let key = '60542a8de897579363a49545e30213ef'
            let url = `http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=${key}&q_track=${song}&q_artist=${artist}`

            //Pegando a div do html que recerá os valores em outra div
            let insertInto = document.getElementById('insertInto')

            //A div que receberá cada linha da letra da música sendo declarada 
            let queryDiv = document.createElement('div')
            //Seu ID único iterado
            queryDiv.setAttribute('id', `queryDiv${iterator}`)
            //Inserindo na div do HTML
            insertInto.appendChild(queryDiv)


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
                const resultsDiv = document.getElementById(`queryDiv${iterator}`)
                resultsDiv.style.display = 'none'
                iterator++
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
                <h1>Only 30% ;)</h1>
                <div className="input-group">
                    <div className="input-group-append">
                        <input type="text" id="songInput" className="form-control" placeholder="Song" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <input type="text" id="ArtistInput" className="form-control" placeholder="Artist" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                    <button onClick={() => apiHandler()}className="btn btn-outline-secondary" type="button">Search</button>
                </div>

                <button onClick={() => clearResults()}className="btn btn-danger w-50 mb-5" type="button">Clear</button>

                <div id="insertInto"></div>
            </main>
        )
    }
}

export default Body