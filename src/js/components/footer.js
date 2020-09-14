import React from 'react'
import {Shield, Users, Lock} from 'react-feather'

export default (props) => {

  return (
    <div id='footer'>
      <div className='container'>
        <div className='row'>
          <h5>Contact</h5>
          <p>For any help or feedback, please contact <a href='mailto:hello@heno.app'>hello@heno.app</a>.</p>
          <p>For press, or any other queries, please get in touch at <a href='mailto:kaan@kaanmutlu.com.tr'>kaan@kaanmutlu.com.tr</a>.</p>
        </div>
        <div className='row'>
          <p>Edited by <a href="https://kaanmutlu.com.tr">Kaan Mutlu</a>, Created by <a href="https://tomjwatson.com">Tom Watson</a>.</p>
        </div>
      </div>
    </div>
  )

}
