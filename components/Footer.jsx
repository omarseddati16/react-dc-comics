import React from 'react'

const link = [
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    img: "../img/footer-facebook.png",
    icon: "facebook"
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    img: "../img/footer-twitter.png",
    icon: "twitter"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com",
    img: "../img/footer-youtube.png",
    icon: "youtube"
  },
  {
    name: "Pinterest",
    url: "https://www.pinterest.com",
    img: "../img/footer-pinterest.png",
    icon: "pinterest"
  },
  {
    name: "Periscope",
    url: "https://www.periscope.tv",
    img: "../img/footer-periscope.png",
    icon: "periscope"
  }
];

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerColumn">
          <h4>DC COMICS</h4>
          <ul>
            <li><a href="#">Characters</a></li>
            <li><a href="#">Comics</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">News</a></li>
          </ul>
          <h4>SHOP</h4>
          <ul>
            <li><a href="#">Shop DC</a></li>
            <li><a href="#">Shop DC Collectibles</a></li>
          </ul>
        </div>

        <div className="footerColumn">
          <h4>DC</h4>
          <ul>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Privacy policy (New)</a></li>
            <li><a href="#">Ad Choices</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Subscriptions</a></li>
            <li><a href="#">Talent Workshops</a></li>
            <li><a href="#">CPSC Certificates</a></li>
            <li><a href="#">Ratings</a></li>
            <li><a href="#">Shop Help</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footerColumn">
          <h4>SITES</h4>
          <ul>
            <li><a href="#">DC</a></li>
            <li><a href="#">MAD Magazine</a></li>
            <li><a href="#">DC Kids</a></li>
            <li><a href="#">DC Universe</a></li>
            <li><a href="#">DC Power Visa</a></li>
          </ul>
        </div>
      </div>
      <div className="footerDc">
        <img src="../img/dc-logo-bg.png" alt="" />
      </div>
      <div className="bottomBarContainer">
        <div className="bottomBarContent">
          <button className="signUp">SIGN-UP NOW!</button>
          <ul className="social">
            <span>FOLLOW US</span>
            {link.map((item, index) => (
              <li key={index}>
                <a href={item.url}>
                  <img src={item.img} alt={item.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
