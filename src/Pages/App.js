import '../Css/App.css';
import Header from '../Components/Header'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import { Component } from 'react';

class App extends Component {
    render(){
        return (
            <div className='bodyWrapper'>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default App;
