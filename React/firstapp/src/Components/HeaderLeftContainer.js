import React, { Component } from 'react'
import SumContainer from './SumContainer.js'
import SearchInput from './Shared/SearchInput.js'

export default class HeaderLeftContainer extends Component {
    render() {
        return (
            <div className="headerLeftContainer">
                <SearchInput />
                <SumContainer />                
            </div>
        )
    }
}
