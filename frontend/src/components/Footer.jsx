import React from 'react'

const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <footer>
    <div className="container">
        <div className="banner">
            <div className="left">Yash</div>
            <div className="right">
                <p>9 Alkapuri Society</p>
                <p>Opens: 9:00 AM-12:00 AM</p>
            </div>
        </div>
        <div className="banner">
        <div className="left">
            <p>Developed By Yash Shah</p>
        </div>
        <div className="right">
            <p>Copyright @ {year}</p>
        </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer