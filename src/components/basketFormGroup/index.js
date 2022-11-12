import BasketUserInput from "../basketUserInput";
import BasketRadioInput from "../BasketRadioInput";
import "./style.scss";
const BasketFormGroup = ({ subforms }) => {
    return (
        <div class='basketFormGroup'>
            {subforms.map(({ head, sub, array, details }) => {
                return (
                    <>
                        {head ? <h4>{head}</h4> : null}
                        {sub ? <p class='sub'>{sub}</p> : null}
                        <div class='formGroup'>
                            {array.map((e) => {
                                console.log(array)
                                if (e.name === 'userInput') {
                                    return BasketUserInput(e.placeholder)
                                } else if (e.name === 'radioInput') {
                                    return BasketRadioInput(e)
                                }
                            })}
                            {details ?
                                <button class='d-flex'>
                                    {details.img ? <img className='detailsImg' src={details.img}/>:null}
                                    {details.head ? <p className='downloadDetails'>{details.head}</p> : ''}
                                </button>: null}
                        </div>
                    </>)
            })}
        </div>
    )
};

export default BasketFormGroup;