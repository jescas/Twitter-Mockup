import React from 'react'

export default function Header() {
  return (
    <header>
      <h1 style={headerCSS}>
        Twitter Reboot: '07 Edition
      </h1>
    </header>
  )
};

const headerCSS = {
  color: 'white',
  marginTop: '0px'
};