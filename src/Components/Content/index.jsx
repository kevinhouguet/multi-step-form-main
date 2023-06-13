import './style.scss'

import Step1 from './Step1'
import Step2 from './Step2'

const Content = () => {

  const titles = {
    "step1": {
      "title": "Personal info",
      "description": "Please provide your name, email address, and phone number."
    }, 
    "step2": {
      "title": "Select your plan",
      "description": "You have the option of monthly or yearly billing."
    }, 
    "step3": {
      "title": "Pick add-ons",
      "description": "Add-ons help enhance your gaming experience."
    }, 
    "step4": {
      "title": "Finishing up",
      "description": "Double-check everything looks OK before confirming."
    }
  }

  return (
    <main className="content">
      {/* <Step1 titles = {titles.step1}/> */}
      <Step2 titles = {titles.step2}/>
    </main>
  )
}





export default Content;