import './style.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul className='step-list'>
          <li className="step">1</li>
          <li className="step">2</li>
          <li className="step">3</li>
          <li className="step step-active">4</li>
        </ul>
      </div>
  )
}

export default Sidebar;