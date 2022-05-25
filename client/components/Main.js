import React from 'react'
import Navbar from './Navbar'
import StoriesList from './StoriesList'
import {connect} from 'react-redux'
import {fetchStories} from '../store/stories'

class Main extends React.Component {
  componentDidMount() {
    this.props.loadStories()
  }

  render () {
    return (
      <div id='main'>
        <div className='column container'>
          <div id='header'>
            <h1>Readium</h1>
          </div>
          <Navbar />
        </div>
        <StoriesList />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadStories: () => dispatch(fetchStories())
  }
}

export default connect(null, mapDispatchToProps)(Main)
