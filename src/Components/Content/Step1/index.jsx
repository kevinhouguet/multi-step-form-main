const Step1 = ({titles, setStep}) => {
  const {title, description} = titles;

  const handleChangeName = (e) => {
    setStep(prev => ({
      ...prev,
      name: e.target.value
    }))
  }
  const handleChangeEmail = (e) => {
    setStep(prev => ({
      ...prev,
      email: e.target.value
    }))
  }
  const handleChangePhone = (e) => {
    setStep(prev => ({
      ...prev,
      phone: e.target.value
    }))
  }


  return (
    <div className="step step1">
      <h2 className='step__title'>{title}</h2>
      <p className="step__description">{description}</p>
      <form className="step__form">
        <div className="step__form__group">
          <label htmlFor="name">Name</label>
          <input  type="text" id="name" name="name" placeholder='e.g. Stephen King'
                  onChange={handleChangeName}/>
        </div>
        <div className="step__form__group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder='e.g. stephenking@lorem.com'
                  onChange={handleChangeEmail}/>
        </div>
        <div className="step__form__group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder='e.g. +1 234 567 890'
                  onChange={handleChangePhone}/>
        </div>
      </form>
    </div>
  )
}

export default Step1;