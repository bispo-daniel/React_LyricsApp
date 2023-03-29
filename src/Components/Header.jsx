import { Component } from "react";
import reactLogo from '../Images/logo.svg'
import linkedinLogo from '../Images/linkedin.svg'
import githubLogo from '../Images/github.svg'
import '../Css/Header.css'

class Header extends Component {
    render(){
        return(
            <header>
                <img src={reactLogo} alt="" className="reactLogo" />

                <div className="socialWrap">
                    <a href="https://linkedin.com/in/bispo-daniel" target={"_blank"}  rel="noreferrer"><img src={linkedinLogo} alt="" /></a>
                    <a href="https://github.com/bispo-daniel" target={"_blank"}  rel="noreferrer"><img src={githubLogo} alt="" /></a>
                </div>
            </header>
        )
    }
}

export default Header