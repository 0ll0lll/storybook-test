import React from 'react'
import '../styles/card.css'

export default function Card() {
  return (
    <div className="card">
      <div className="profile-pic">
        <img src="https://assets-ouch.icons8.com/thumb/477/f9af0ace-ea38-4ef5-a1cf-eaab12a21f00.png" alt=""/>
      </div>
      <div className="content">
        <h1>No Remote</h1>
        <p>Depending on what part of the app you’re working on, you may want to run one or more of these simultaneously. Since our current focus is creating a single UI component, we’ll stick with running Storybook.</p>
        <div className="button">Lear more</div>
      </div>
    </div>
  )
}
