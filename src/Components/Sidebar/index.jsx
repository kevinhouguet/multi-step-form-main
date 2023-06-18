import './style.scss'

const Sidebar = ({stepLvl, onClick}) => {

  const stepNb = 4;

  return (
    <div className="sidebar">
        <ul className='step-list'>
          {Array.from(Array(stepNb).keys()).map(step => (
            <li className={`step ${stepLvl == step + 1 ? 'step-active' : ''}`} key={step} onClick={onClick}>{step + 1}</li>
          ))}
        </ul>
      </div>
  )
}

export default Sidebar;