import { Component } from "react";
import reactLogo from '../Images/logo.svg'
import linkedinLogo from '../Images/linkedin.svg'
import githubLogo from '../Images/github.svg'
import '../Css/Header.css'

class Header extends Component {
    render(){
        return(
            <header>
                <img src={reactLogo} alt="" />

                <div className="socialWrap">
                    <img src={linkedinLogo} alt="" />
                    <img src={githubLogo} alt="" />
                </div>
            </header>
        )
    }
}

export default Header