import './App.css';

function App() {
  return (
    <>
      <div className='container'>
        <div className='header'>
        <a href="#" className='header__logo'>
          <img src='https://picsum.photo/266/44' alt="logo" width={266} height={44} />
        </a>

        <ul className='header__list'>
          <li className='list__item'>
            <a className='item__link' href='#'>Home</a>
          </li>
          <li className='list__item'>
            <a className='item__link' href='#'>Testimonials</a>
          </li>
          <li className='list__item'>
            <a className='item__link' href='#'>Find a doctor</a>
          </li>
          <li className='list__item'>
            <a className='item__link' href='#'>Apps</a>
          </li>
          <li className='list__item'>
            <a className='item__link' href='#'>About us</a>
          </li>
        </ul>

        <form className="row g-3 header__form" >
          <div className="col-auto">
            <input type="Text" className="form-control" id="inputPassword2" placeholder="Search" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">Search</button>
          </div>
        </form>
      </div>

      <div className='main container'>
          <div className='left-section'>
            <ul className='left-section__list'>
              <li className='left-section__item'>
                    <p className='item-text'>lorem ipsum dolor</p>
                    <button type="button" class="btn btn-info">Ok</button>
              </li>

              <li className='left-section__item'>
                    <p className='item-text'>lorem ipsum dolor</p>
                    <button type="button" class="btn btn-info">Ok</button>
              </li>

              <li className='left-section__item'>
                  <p className='item-text'>lorem ipsum dolor</p>
                  <button type="button" class="btn btn-info">Ok</button>                
              </li>

              <li className='left-section__item'>
                    <p className='item-text'>lorem ipsum dolor</p>
                    <button type="button" class="btn btn-info">Ok</button>
              </li>

              <li className='left-section__item'>
                    <p className='item-text'>lorem ipsum dolor</p>
                    <button type="button" class="btn btn-info">Ok</button>
              </li>

              <li className='left-section__item'>
                  <p className='item-text'>lorem ipsum dolor</p>
                  <button type="button" class="btn btn-info">Ok</button>                
              </li>

              <li className='left-section__item'>
                    <p className='item-text'>lorem ipsum dolor</p>
                    <button type="button" class="btn btn-info">Ok</button>
              </li>

              <li className='left-section__item'>
                    <p className='item-text'>lorem ipsum dolor</p>
                    <button type="button" class="btn btn-info">Ok</button>
              </li>

              <li className='left-section__item'>
                  <p className='item-text'>lorem ipsum dolor</p>
                  <button type="button" class="btn btn-info">Ok</button>                
              </li>
            </ul>
          </div>

          <div className='right-section'>
            <div className='card-section'>
                <ul className='right-list'>
                  <li className='right-item'>lorem</li>
                  <li className='right-item'>lorem</li>
                  <li className='right-item'>lorem</li>
                </ul>
            </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
