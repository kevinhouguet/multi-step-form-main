import './style.scss'

const Step4 = ({titles, monthly, step1, step2, step3}) => {
  return (
    <div className="step step4">
      <h2 className='step__title'>{titles.title}</h2>
      <p className='step__description'>{titles.description}</p>
      <Recap monthly={monthly} />
    </div>
  )
}

export default Step4;

const Recap = ({monthly, step1, step2, step3}) => {
  return (
    <div className="recap">
      <div className="bgc-magnolia">
        <header className="recap__header">
          <div className="recap__header__group">
            <h3 className="recap__header__title">Arcade(Monthly)</h3>
            <a href="#">Change</a>
          </div>
          <div className="recap__header__price">
            $9/mo
          </div>
        </header>
        <body className="recap__body">
          <div className="recap__body__item">
            <div className="recap__body__item__title">Online service</div>
            <div className="recap__body__item__price">+$3/mo</div>
          </div>
          <div className="recap__body__item">
            <div className="recap__body__item__title">Online service</div>
            <div className="recap__body__item__price">+$3/mo</div>
          </div>
        </body>
      </div>
      <footer className="recap__footer">
        <div className="recap__footer__title">
          Total (per month)
        </div>
        <div className="recap__footer__price">
          +$12/mo
        </div>
      </footer>
    </div>
  )
}