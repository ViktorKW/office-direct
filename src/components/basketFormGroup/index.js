import BasketUserInput from "../basketUserInput";
import BasketRadioInput from "../BasketRadioInput";
import "./style.scss";
const BasketFormGroup = ({subforms}) => {
  return `
    <div class='busketFormGroup'>
    ${subforms.map(({head,sub,array,details})=>{
        return `
        ${head?`<h4>${head}</h4>`:``}
        ${sub?`<p class='sub'>${sub}</p>`:``}
        <div class='formGroup'>
        ${array.map((e)=>{
            console.log(array)
            if(e.name=='userInput'){
                return BasketUserInput(e.placeholder)
            }else if(e.name=='radioInput'){
                
                return BasketRadioInput(e)
            }
        }).join('')}
        ${details?`
        <button class='d-flex'>
            ${details.img?`<img class='detailsImg' src='${details.img}'>`:''}
            ${details.head?`<p class='downloadDetails'>${details.head}</p>`:''}
        </button>
        `:''}
        </div>
        
        `
    }).join('')}  
    </div>
  `;
};

export default BasketFormGroup;