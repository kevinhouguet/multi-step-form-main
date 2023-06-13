const Step1 = ({titles}) => {
  const {title, description} = titles;
  return (
    <div className="step step1">
      <h2 className='step__title'>{title}</h2>
      <p className="step__description">{description}</p>
      <form className="step__form">
        <div className="step__form__group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder='e.g. Stephen King'/>
        </div>
        <div className="step__form__group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder='e.g. stephenking@lorem.com'/>
        </div>
        <div className="step__form__group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder='e.g. +1 234 567 890'/>
        </div>
      </form>
    </div>
  )
}

export default Step1;