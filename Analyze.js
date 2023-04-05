import moment from 'moment'
export const analyze = (text) => {
    if(text.includes('Hi')||text.includes('hey')||text.includes('hello'))
    return 'Hi,How can I help you?'
    if(text.includes('thank you')||text.includes('thanks')||text.includes('bye'))
    return 'Thanks for connecting!!'
    else if(text.includes('time'))
    return moment().format('hh:mm:ss a')
    else if(text.includes('date'))
    return moment().format('LL')
    else if(text.includes("I'm bored")||text.includes("i'm bored")||text.includes("I am bored"))
    return <div><p className='text-start'>Well,Try these:<ul><li>Sort through your mail</li>
    <li>Bake a cake/make a dessert</li>
    <li>Look at old family photos</li>
    <li>Create a bucketlist</li>
    <li>Go for a walk</li>
    <li>Write a gratitude list</li>
    <li>Read a good book</li>
    <li>Catch up with your favourite TV show</li>
    <li>Journal,log your emotions and experiences</li>
    </ul></p></div>


  return "I can't get you , kindly rephrase your sentence..."
}

 