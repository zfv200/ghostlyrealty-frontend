import React from 'react'
import Adapter from '../adapter'

import styles from '../UserHeader/UserHeader.css.js'

import { Button, Segment, Form, Dimmer, Loader, Image } from 'semantic-ui-react'

class SpookScoreGenerator extends React.Component{

  loader = () => {
    return (
      <div id="outer-popup" style={styles.SignInForm}>
        <div id="inner-outer-popup" style={styles.loader}>
          <Segment inverted style={{width: "100%"}}>
            <Dimmer active>
              <Loader indeterminate>Generating Spook Score...</Loader>
            </Dimmer>
            <Image src="https://data.whicdn.com/images/298316474/original.gif" />
          </Segment>
        </div>
      </div>
    )
  }

  render(){
    return(
      <div>
        { this.props.loading ?
          <div>
            {this.loader()}
          </div>
          :
          <>
            <Button onClick={this.props.generateSpookScore}>
            Generate Spook Score!
            </Button>
          </>
        }
      </div>
    )
  }
}

// {this.props.newSpookScore ? this.props.newSpookScore : null}


export default SpookScoreGenerator
