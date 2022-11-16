import React from 'react'
import heroBg from '../assets/hero-bg.jpg'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.heroTransition = this.heroTransition.bind(this)
    }
    heroTransition(e) {
        e.target.offsetParent.classList.add('on')
    }
    render() {
        return (
            <div className="homePage pages">
                <header className="hero">
                    <img
                        src={heroBg}
                        onLoadCapture={this.heroTransition}
                        alt="background image"
                    />
                    <div className="text">
                        <h1>Membangun negeri dengan teknologi</h1>
                        <p>
                            Mewujudkan anak bangsa berkemampuan dalam bidang
                            teknologi
                        </p>
                    </div>
                </header>
            </div>
        )
    }
}
