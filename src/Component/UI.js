import React, { Component } from 'react'

export default class UI extends Component {
  render() {
    return (

<div class="container">
  <div class="header">
    <h2>Messages</h2>
    <a href="#" title="Add Friend to this chat">+</a>
  </div>
  <div class="chat-box">
    <div class="message-box left-img">
      <div class="picture">
        <img src="https://dribbble.s3.amazonaws.com/users/2493/avatars/original/joey_head_new.png?1346157876" title="user name"/>
        <span class="time">10 mins</span>
      </div>
      <div class="message">
        <span>Bobby Giangeruso</span>
        <p>Hey Mike, how are you doing?</p>
      </div>
    </div>
    <div class="message-box right-img">
      <div class="picture">
        <img src="https://dribbble.s3.amazonaws.com/users/212696/avatars/small/monogram_pixel_perfect.png?1359994784" title="user name"/>
        <span class="time">2 mins</span>
      </div>
      <div class="message">
        <span>Mike Moloney</span>
        <p>Pretty good, Eating nutella, nommommom</p>
      </div>
    </div>
    <div class="enter-message">
      <input type="text" placeholder="Enter your message.."/>
      <a href="#" class="send">Send</a>
    </div>
  </div>
</div>
    )
  }
}
