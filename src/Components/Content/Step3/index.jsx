import './style.scss'

const Step3 = ({titles, monthly, setStep}) => {

  const options = {
    "onlineService": {
      "title": "Online service",
      "description": "Access to multiplayer games",
      "price": {
        "monthly": 1,
        "yearly": 10
      }
    },
    "largerStorage": {
      "title": "Larger storage",
      "description": "Extra 1TB of cloud save",
      "price": {
        "monthly": 2,
        "yearly": 20
      }
    },
    "customizableProfile": {
      "title": "Customizable profile",
      "description": "Custom theme on your profile",
      "price": {
        "monthly": 2,
        "yearly": 20
      }
    }
  }

  const handleCheckboxChange = (e) => {
    if(e.target.checked) {
      e.target.parentElement.classList.add('option--checked')
      setStep(prev => (
        {...prev,
          addons: {...prev.addons, [e.target.name]: options[e.target.name]}              
        }
      ))
    } else {
      e.target.parentElement.classList.remove('option--checked')
      // #TODO: remove the plan from the state
      setStep(prev => (
        {...prev,
          addons: {...prev.addons, [e.target.name]: null}
        }
      ))
    }
  }


  return (
    <div className="step step3">
      <h2 className='step__title'>{titles.title}</h2>
      <p className='step__description'>{titles.description}</p>
      <div className="step3__options">
        {Object.keys(options).map(option => {
          return (
            <Option 
              title={options[option].title}
              price={options[option].price[monthly ? 'monthly' : 'yearly']}
              optionName={option}
              description={options[option].description}
              key={option}
              onChange={handleCheckboxChange}
              className='option'
              monthly={monthly}
            />
          )
        })}
      </div>
    </div>
  )
}

const Option = ({title, description, className, price, onChange, monthly, optionName}) => {
  return (
    <label className={className} htmlFor={optionName}>
      <input 
        type="checkbox" 
        name={optionName} 
        id={optionName}
        onChange={onChange}
      />
      <div className="option__group">
        <h3 className='option__title'>{title}</h3>
        <p className='option__description'>{description}</p>
      </div>
      <p className='option__price'>+${price}/{monthly ? 'mo' : 'yr'}</p>
    </label>
  )
}

export default Step3;