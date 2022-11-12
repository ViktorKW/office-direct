import "./style.scss";
const BasketRadioInput = ({header,sub,inputName}) => {
  const random = Math.random()
  function isChecked(event){
    if(event.target.checked){
      event.target.closest('.formGroup').querySelectorAll('.checked').forEach(e=>e.classList.remove('checked'));
      event.target.closest('.radioInput').classList.add('checked')
    }
  }
  return (
    <div class='radioInput'>
        <div class='d-flex align-items-start position-relative'>
            <input id={random} type='radio' name={inputName} onClick={isChecked}/>
            <label for={random} class='flex-column'>
                {header?<p><strong>{header}</strong></p>:null}
                {sub?<p>{sub}</p>:null}
            </label>
        </div>
    </div>
  );
};

export default BasketRadioInput;