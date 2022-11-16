import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-smkn-6.png'

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            linkOn: '',
            one: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        this.setState({ one: ++this.state.one }, () => {
            if (this.state.one === 1) {
                const topLamp = document.querySelector('.nav .topLampIndicator')
                this._reactInternals.child.pendingProps.children.forEach(
                    (child, index) => {
                        if (child.props.to === window.location.pathname) {
                            document.querySelector('.nav').children[
                                index
                            ].style.color = 'var(--primary)'
                            document.querySelector('.nav').children[
                                index
                            ].style.textShadow =
                                '0 0 12px rgba(116, 220, 255, 0.7)'

                            topLamp.style.left =
                                document.querySelector('.nav').children[index]
                                    .offsetLeft + 'px'
                            topLamp.style.width =
                                document.querySelector('.nav').children[index]
                                    .offsetWidth + 'px'
                            window.addEventListener('resize', () => {
                                topLamp.style.left =
                                    document.querySelector('.nav').children[
                                        index
                                    ].offsetLeft + 'px'
                                topLamp.style.width =
                                    document.querySelector('.nav').children[
                                        index
                                    ].offsetWidth + 'px'
                            })
                        } else if (
                            child.props.to === '' &&
                            child.props.to === window.location.pathname.slice(1)
                        ) {
                            document.querySelector('.nav').children[
                                index
                            ].style.color = 'var(--primary)'
                            document.querySelector('.nav').children[
                                index
                            ].style.textShadow =
                                '0 0 12px rgba(116, 220, 255, 0.7)'

                            topLamp.style.left =
                                document.querySelector('.nav').children[index]
                                    .offsetLeft + 'px'
                            topLamp.style.width =
                                document.querySelector('.nav').children[index]
                                    .offsetWidth + 'px'
                            window.addEventListener('resize', () => {
                                topLamp.style.left =
                                    document.querySelector('.nav').children[
                                        index
                                    ].offsetLeft + 'px'
                                topLamp.style.width =
                                    document.querySelector('.nav').children[
                                        index
                                    ].offsetWidth + 'px'
                            })
                            window.addEventListener('load', () => {
                                topLamp.style.left =
                                    document.querySelector('.nav').children[
                                        index
                                    ].offsetLeft + 'px'
                                topLamp.style.width =
                                    document.querySelector('.nav').children[
                                        index
                                    ].offsetWidth + 'px'
                            })
                        } else {
                            document.querySelector('.nav').children[
                                index
                            ].style.color = 'inherit'
                            document.querySelector('.nav').children[
                                index
                            ].style.textShadow = 'none'
                        }
                    }
                )
            }
        })
    }
    handleClick(e) {
        for (const i in e.target.parentElement.children) {
            if (i > 0 && i <= 5) {
                e.target.parentElement.children.item(i).style.color = 'inherit'
                e.target.parentElement.children.item(i).style.textShadow =
                    'none'
            }
        }
        e.target.parentElement.children.item(5).style.left = '40px'
        e.target.style.color = 'var(--primary)'
        e.target.style.textShadow = '0 0 12px rgba(116, 220, 255, 0.7)'
        const topLamp = document.querySelector('.nav .topLampIndicator')
        topLamp.style.left = e.target.offsetLeft + 'px'
        topLamp.style.width = e.target.offsetWidth + 'px'
        window.addEventListener('resize', () => {
            topLamp.style.left = e.target.offsetLeft + 'px'
            topLamp.style.width = e.target.offsetWidth + 'px'
        })
    }
    render() {
        return (
            <nav className="nav">
                <div className="logo">
                    <img src={logo} alt="logo smkn 6 tangsel" />
                    <div className="text">
                        <h3>SMKN 6 TANGSEL</h3>
                        <span>Cerdas | Unggul | Berkarakter</span>
                    </div>
                </div>
                <div className="searchBox">
                    <button className="submit">
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </button>
                    <input
                        type="text"
                        placeholder="Cari..."
                        name=""
                        id="navSearchInp"
                    />
                </div>
                <Link onClick={this.handleClick} to="">
                    Beranda
                </Link>
                <Link onClick={this.handleClick} to="/tentang">
                    Tentang
                </Link>
                <Link onClick={this.handleClick} to="/jurusan">
                    Jurusan
                </Link>
                <Link onClick={this.handleClick} to="/acara">
                    Acara
                </Link>
                <div className="topLampIndicator"></div>
            </nav>
        )
    }
}
