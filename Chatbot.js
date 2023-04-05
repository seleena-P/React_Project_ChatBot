import Button from 'react-bootstrap/Button';
import React,{useState} from 'react'
import Chatmessage from './Chatmessage';
import { analyze } from '../Analyze';
function Chatbot() {
    const[message,setMessage]=useState([
        {
            message:"Hi, May I have your name?"
        }
    ])
    const[text,setText]=useState('');
    const handleClick=()=>{
        let list=[...message,{message:text,user:true}];
        if(list.length>2){
             const reply=analyze(text)
             list=[
                ...list,{
                    message:reply
                }
             ]
        }
        else{
            list=[...list,{
                message:`Hi, ${text}`,
            },
        {
            message:"How can i help you?"
        }];

        }
        setMessage(list)
        setText(" ")
         setTimeout(()=>{
             document.querySelector('#copyright').scrollIntoView();
     },1);
    };
  return (
    <div>
        <div className="d-flex align-items-center justify-content-center">
            <img src="https://img.freepik.com/free-icon/robot_318-573294.jpg?size=626&ext=jpg&ga=GA1.1.359745588.1680587885&semt=ais" alt="icon" height={60} width={60}></img>
            &emsp;<h2 className='text-primary'>Chatbot</h2>
        </div>
        <div className="chat-message shadow-lg p-3 mb-5 bg-body rounded">
            {message.length>0 && message.map((data)=><Chatmessage{...data}/>)}
            <div className='d-flex mt-2'>
                <input type='text' className='form-control' value={text} onChange={(e)=>setText(e.target.value)}/>&emsp;
                <Button variant="primary" onClick={handleClick}>Send</Button>
            </div>
           <div id='copyright' className='mt-3'>Created by seleena</div>
        </div>
    </div>
  )
}

export default Chatbot