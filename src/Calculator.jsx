import Button from './components/Button';
import Input from './components/Input';

function Calculator() {  
  const defaultValue = '0';
  return (
    <div className='bg-gradient-to-b from-[#fac145] to-[#ffbe47] rounded-t-3xl rounded-b-4xl p-2'>
      <div className='bg-[#f27a00] p-0.5 rounded-t-3xl rounded-b-4xl'>
        <div className="min-w-70 min-h-90 bg-gradient-to-b from-[#fac145] to-[#ffbe47] rounded-t-3xl rounded-b-4xl p-4 flex flex-col items-center">
          <Input value={defaultValue} />       
          <div className='flex gap-2.5 mt-10'>
              <Button label={'/'}/>
              <Button label={'x'}/>
              <Button label={'CE'}/>
              <Button label={'C'}/>
            </div>           
          <div className="grid grid-cols-4 grid-rows-4 gap-2.5 mt-5">
              <Button label={7} isBig={true}/>
              <Button label={8} isBig={true}/>
              <Button label={9} isBig={true}/>
              <Button label={`-`} isBig={true}/>
              <Button label={4} isBig={true}/>
              <Button label={5} isBig={true}/>
              <Button label={6} isBig={true}/>
              <Button label={`+`} isBig={true}/>
              <Button label={1} isBig={true}/>
              <Button label={2} isBig={true}/>
              <Button label={3} isBig={true}/>
              <Button label={`=`} css={'row-span-2 col-start-4 row-start-3'} isBig={true}/>
              <Button label={0} css={'col-span-2 row-start-4'} isBig={true}/>
              <Button label={`.`} isBig={true}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
