import React, { useEffect } from 'react';
import './style.css';
import { connect } from 'react-redux'
import { getCoins } from './actions';

const App = (props) => {
    useEffect(() => {
        props.getCoins();
    }, [])
    return (
        <div className='App'>
            <h1>React-redux revice data with api</h1>
            <h2>New Coins and Active Coins</h2>
            <ul>
            {props.coins.map(coins => {
                if (coins.is_new === true && coins.is_active === true) {
                    return (
                            <li>
                                <span>Volume Rank : {coins.rank}</span>
                                <span>{coins.name}</span>
                                <span>Type: {coins.type.toUpperCase()}</span>

                            </li>
                    )

                }

            })}
            </ul>
        </div>
    )
}

const mapStateProps = state => {
    return {
        coins: state.coins
    }

}

export default connect(mapStateProps, { getCoins })(App);