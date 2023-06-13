import arcade from '../../../assets/images/icon-arcade.svg'
import advanced from '../../../assets/images/icon-advanced.svg'
import pro from '../../../assets/images/icon-pro.svg'
import { useState } from 'react'

import './style.scss'


const Step2 = ({titles}) => {

  const options = {
    "arcade": {
      "title": "Arcade",
      "price": {
        "monthly": 9,
        "yearly": 90
      }
    },
    "advanced": {
      "title": "Advanced",
      "price": {
        "monthly": 12,
        "yearly": 120
      }
    },
    "pro": {
      "title": "Pro",
      "price": {
        "monthly": 15,
        "yearly": 150
      }
    }
  }

  const reductionsTxt = '2 months free';

  const [arcadeSelected, setArcadeSelected] = useState(true);
  const [advancedSelected, setAdvancedSelected] = useState(false);
  const [proSelected, setProSelected] = useState(false);

  const [monthly, setmonthly] = useState(true);
  
  const handleFrequency = (e) => {
    setmonthly(!monthly);
  }

  const handleOptionSelected = (e) => {
    const option = e.currentTarget;
    const optionTitle = option.querySelector('.option__title').textContent;
    if (optionTitle === 'Arcade') {
      setArcadeSelected(true);
      setAdvancedSelected(false);
      setProSelected(false);
    } else if (optionTitle === 'Advanced') {
      setArcadeSelected(false);
      setAdvancedSelected(true);
      setProSelected(false);
    } else {
      setArcadeSelected(false);
      setAdvancedSelected(false);
      setProSelected(true);
    }
  }
  
  return (
    <div className="step step2">
      <h2 className='step__title'>{titles.title}</h2>
      <p className="step__description">{titles.description}</p>
      <div className="options">
        <Option
          onClick={handleOptionSelected}
          monthly={monthly}
          className={arcadeSelected ? 'option option--selected' : 'option'}
          title={options.arcade.title}
          price={monthly ? options.arcade.price.monthly : options.arcade.price.yearly}
          icon={arcade}
          reductionsTxt={reductionsTxt}
        />
        <Option 
          onClick={handleOptionSelected}
          monthly={monthly}
          className={advancedSelected ? 'option option--selected' : 'option'}
          title={options.advanced.title}
          price={monthly ? options.advanced.price.monthly : options.advanced.price.yearly}
          icon={advanced}
          reductionsTxt={reductionsTxt}
        /> 
        <Option
          onClick={handleOptionSelected}
          monthly={monthly}
          className={proSelected ? 'option option--selected' : 'option'}
          title={options.pro.title}
          price={monthly ? options.pro.price.monthly : options.pro.price.yearly}
          icon={pro}
          reductionsTxt={reductionsTxt}
        />
      </div>
      <Frequency 
        monthly={monthly}
        onChange={handleFrequency}
      />
    </div>
  )
}

const Option = ({title, price, icon, className, onClick, monthly, reductionsTxt}) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={icon} alt="arcade logo" />
      <div className="option__group">
        <h3 className='option__title'>{title}</h3>
        <p className='option__price'>${price}/{monthly ? 'mo' : 'yr'}</p>
        {!monthly && <p className='option__reductions'>{reductionsTxt}</p>}
      </div>
    </div>
  )
}

const Frequency = ({monthly, onChange}) => {

  return (
    <div className="frequency">
      <p className= {monthly ? 'frequency--active' : ''}>Monthly</p>
      <label htmlFor="frequency">
        <input type="checkbox" name="frequency" id="frequency"
              onChange={onChange} />
        <div className="frequency__toggle"></div>
      </label>
      <p className={monthly ? '' : 'frequency--active'}>Yearly</p>
    </div>
  )
}

export default Step2;