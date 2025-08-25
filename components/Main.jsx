import React from 'react'

const Main = () => {
  return (
    <main>
      <div className="contentMainBlack">
        <p>--&gt; Content goes here &lt;--</p>
      </div>

      <div className="contentMainBlue">
        <div className="iconMain">
          <img src="../img/buy-comics-digital-comics.png" alt="Digital Comics" />
          <span>DIGITAL COMICS</span>
        </div>
        <div className="iconMain">
          <img src="../img/buy-comics-merchandise.png" alt="DC Merchandise" />
          <span>DC MERCHANDISE</span>
        </div>
        <div className="iconMain">
          <img src="../img/buy-comics-subscriptions.png" alt="Subscription" />
          <span>SUBSCRIPTION</span>
        </div>
        <div className="iconMain">
          <img src="../img/buy-comics-shop-locator.png" alt="Comic Shop Locator" />
          <span>COMIC SHOP LOCATOR</span>
        </div>
        <div className="iconMain">
          <img src="../img/buy-dc-power-visa.svg" alt="DC Power Visa" />
          <span>DC POWER VISA</span>
        </div>
      </div>
    </main>
  )
}

export default Main
