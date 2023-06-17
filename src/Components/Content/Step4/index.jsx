import './style.scss'

const Step4 = ({titles, monthly, step2, step3}) => {
  return (
    <div className="step step4">
      <h2 className='step__title'>{titles.title}</h2>
      <p className='step__description'>{titles.description}</p>
      <Recap monthly={monthly} step2={step2} step3={step3}/>
    </div>
  )
}

export default Step4;

const Recap = ({monthly, step2, step3}) => {

  let total = 0;

  if (step3.addons) {
    total = (monthly ? step2.plan.price.monthly : step2.plan.price.yearly) + Object.keys(step3.addons).reduce((acc, addon) => {
      if (step3.addons[addon]) {
        return acc + step3.addons[addon].price[monthly ? 'monthly' : 'yearly']
      } else {
        return acc
      }
    }, 0);
  }


  return (
    <div className="recap">
      <div className="bgc-magnolia">
        <header className="recap__header">
          <div className="recap__header__group">
            <h3 className="recap__header__title">
              {step2.plan.title}
              {monthly ? '(Monthly)' : '(Yearly)'}
            </h3>
            <a href="#">Change</a>
          </div>
          <div className="recap__header__price">
            ${step2.plan.price[monthly ? 'monthly' : 'yearly']}/{monthly ? 'mo' : 'yr'}
          </div>
        </header>
        <body className="recap__body">
          {step3.addons && Object.keys(step3.addons).map(addon => (
            step3.addons[addon] && (
              <div className="recap__body__item" key={step3.addons[addon].title}>
                <div className="recap__body__item__title">{step3.addons[addon].title}</div>
                <div className="recap__body__item__price">
                  +${step3.addons[addon].price[monthly ? 'monthly' : 'yearly']}/{monthly ? 'mo' : 'yr'}
                </div>
              </div>
            )
          ))}
        </body>
      </div>
      <footer className="recap__footer">
        <div className="recap__footer__title">
          Total (per {monthly ? 'month' : 'year'})
        </div>
        <div className="recap__footer__price">
          +${total}{monthly ? '/mo' : '/yr'}
        </div>
      </footer>
    </div>
  )
}