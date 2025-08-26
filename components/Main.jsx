import React from 'react'
import comics from '../src/data/comics'


const Main = () => {
  return (
    <main>
      <div className="contentMainBlack">
        <div>
          <img src="../img/jumbotron.jpg" alt="" />
        </div>
        <div>
          <div className="currentSeries">CURRENT SERIES</div>
        </div>
        <div className="containerComic">
          <div className="rowComic">
            {comics.map(comic => {
              return (
                <div className="colComic" key={comic.id}>
                  <div className="cardComic">
                    <img src={comic.thumb} alt={comic.title} />
                  </div>
                  <h4>{comic.title}</h4>
                </div>
              )
            })}
            <button className="loadMore">LOAD MORE</button>
          </div>
        </div>
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
