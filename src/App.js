import React, { Component } from 'react';
import axios from 'axios'
import banner from './assets/banner.jpg'
import play from './assets/play.png'
import car from './assets/car.jpg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      List: [],
    }
  }

  componentDidMount() {
    const urlApi = 'https://api.vagalume.com.br/rank.php?apikey=660a4395f992ff67786584e238f501aa&type=art&period=week&periodVal=201134&scope=all&limit=3'
    axios.get(urlApi)
      .then(resp => this.setState({ ...this.state, list: resp.data.art.week.all }))
  }

  renderRows = () => {
    const list = this.state.list || []
    return list.map(music => (
      <div className="mx-2 my-2" key={music.id}>
                <div>
                    <div className="card border-0 special-card" style={{width: '15rem'}}>
                        <img className="card-img-top rounded-0 image"  src={music.pic_medium} alt={music.uniques} />
                        <div className="middle">
                        <img src={play} alt={music.rank}/>
                        </div>
                        <div className="special-card" style={{ height: '40px'}}>
                            <small className="text-white" style={{ fontSize: 15 }}>{music.name}</small>
                        </div>
                    </div>
                </div>
            </div>
    ))
  }
  render() {
    console.log(this.state.list)
    return (
      <div>
        <nav className="navbar" style={{ backgroundColor: '#B3D452' }}>
          <div className="container">
            <b className="ml-auto">VOLTAR PARA A PÁGINA PRINCIPAL</b>
          </div>
        </nav>
        <div>
          <img src={banner} className="img-fluid" alt="banner" />
        </div>
        <div className="mt-5 row justify-content-center text-center" style={{ marginRight: '0px', marginLeft: '0px' }}>
          <div className="col-8">
            <h2 className="mt-2">
              Já falamos aqui sobre como ouvir música em inglês pode ajudar você nos seus estudos do idioma.
            </h2>
            <p className="mt-2">
              Hoje algumas sugestôes que não só te fazem praticar um pouco do inglês, mas também tornar as suas viagens muito mais divertidas
            </p>
            <h1 className="mt-2" style={{ color: '#00A3C2' }}>
              APERTE O CINTO E PREPARE A PLAYLIST
            </h1>
            <hr style={{ border: '3px solid', width: '30%', color: '#00A3C2' }}></hr>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: '150px', height: '800px', backgroundColor: '#EEEEEE' }}>
          <img style={{ marginTop: '-70px' }} width="150" height="150" src={car} className="d-inline-block align-top img-fluid" alt="car" />
          <div className="row justify-content-center text-center" style={{ marginRight: '0px', marginLeft: '0px' }}>
            <div className="col-4">
              <h1 className="text-break text-right" style={{ color: 'grey' }}>Para quem está em uma road Trip!</h1>
            </div>
            <div className="col-4 mt-3">
              <p className="text-break text-left">Músicas perfeitas para aquela viagem de carro com os amigos, em que o destino não é lá mais importante.</p>
              <h1 className="text-break text-left" style={{ color: '#B8ADA9' }}>Let's go get lost!</h1>
            </div>            
          </div>
          <div className="row justify-content-center text-center">
            <div className="card-deck">
              {this.renderRows()}
            </div>
          </div>          
        </div>
      </div>
    );
  }
}

export default App;
