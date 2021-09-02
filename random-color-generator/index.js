(function() {
  'use strict'

  const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }
  const setBodyBackgroundColor = () => {
    document.body.style.backgroundColor = randomColor()
  }

  setBodyBackgroundColor()

  document.addEventListener('click', () => {
    setBodyBackgroundColor()
  })
})()
