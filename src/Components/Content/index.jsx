import './style.scss'

import Step1 from './Step1'
import Step2 from './Step2'
import { useState } from 'react';
import Step3 from './Step3';
import Step4 from './Step4';

const Content = ({stepLvl}) => {

  const [monthly, setmonthly] = useState(true);
  
  const handleFrequency = (e) => {
    setmonthly(!monthly);
  }

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

  const [step1, setStep1] = useState({});
  const [step2, setStep2] = useState({
    plan: {
      "title": "Arcade",
      "price": {
        "monthly": 9,
        "yearly": 90
      }
    }
  });
  const [step3, setStep3] = useState({});

  return (
    <main className="content">      
      <SwitchRender 
      stepLvl={stepLvl} 
      monthly={monthly} 
      handleFrequency={handleFrequency} 
      titles={titles} 
      setStep1={setStep1}
      setStep2={setStep2}
      setStep3={setStep3}
      step2={step2}
      step3={step3}/>
    </main>
  )
}

const SwitchRender = ({stepLvl, monthly, handleFrequency, titles, setStep1, setStep3, setStep2, step2, step3}) => {
  switch (stepLvl) {
    case '1':
      return <Step1 titles = {titles.step1} setStep={setStep1} />
    case '2':
      return <Step2 titles = {titles.step2} onChangeFrequency={handleFrequency} setStep={setStep2}/>
    case '3':
      return <Step3 titles = {titles.step3} monthly={monthly} setStep={setStep3}/>
    case '4':
      return <Step4 titles = {titles.step4} monthly={monthly} step2={step2} step3={step3}/>
    default:
      return <p>Something Gone Wrong !!</p>
  }
}




export default Content;