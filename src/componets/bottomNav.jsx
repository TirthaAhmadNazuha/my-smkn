import React from 'react'
import { Link } from 'react-router-dom'
export default class BottomNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            one: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        this.setState({ one: ++this.state.one }, () => {
            if (this.state.one === 1) {
                if (innerWidth >= 970) {
                    this._reactInternals.child.stateNode.classList.add('off')
                } else {
                    this._reactInternals.child.stateNode.classList.remove('off')
                }
                this._reactInternals.child.pendingProps.children.forEach(
                    (child, index) => {
                        const parent = document.querySelector('.bottomNav')
                        if (child.props.to === location.pathname) {
                            parent.children.item(index).classList.add('on')
                        } else if (
                            child.props.to.slice(1) ===
                            location.pathname.slice(1)
                        ) {
                            parent.children.item(index).classList.add('on')
                        } else
                            parent.children.item(index).classList.remove('on')
                    }
                )
                addEventListener('resize', () => {
                    if (innerWidth >= 970) {
                        this._reactInternals.child.stateNode.classList.add(
                            'off'
                        )
                    } else {
                        this._reactInternals.child.stateNode.classList.remove(
                            'off'
                        )
                    }
                })
            }
        })
    }
    handleClick(e) {
        if (e.target.parentElement.localName === 'a')
            e.target = e.target.parentElement
        for (const i in e.target.parentElement.children) {
            isNaN(Number(i)) ||
                e.target.parentElement.children.item(i).classList.remove('on')
        }
        e.target.classList.add('on')
    }
    render() {
        return (
            <div className="bottomNav off">
                <Link onClick={this.handleClick} to="" className="on">
                    <span className="material-symbols-outlined">home</span>
                    <h5>Home</h5>
                </Link>
                <Link onClick={this.handleClick} to="/tentang">
                    <span className="material-symbols-outlined">
                        bubble_chart
                    </span>
                    <h5>Tentang</h5>
                </Link>
                <Link onClick={this.handleClick} to="/jurusan">
                    <span className="material-symbols-outlined">school</span>
                    <h5>Jurusan</h5>
                </Link>
                <Link onClick={this.handleClick} to="/acara">
                    <span className="material-symbols-outlined">
                        event_note
                    </span>
                    <h5>Acara</h5>
                </Link>
            </div>
        )
    }
}
