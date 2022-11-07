import "./style.scss";
const BasketRadioInput = ({header,sub,inputName}) => {
  const random = Math.random()
  return `
    <div class='radioInput'>
        <div class='d-flex align-items-start position-relative'>
            <input id='${random}' type='radio' name='${inputName}' onclick="if(this.checked){this.closest('.formGroup').querySelectorAll('.checked').forEach(e=>e.classList.remove('checked'));this.closest('.radioInput').classList.add('checked')}">
            <label for='${random}' class='flex-column'>
                ${header?`<p><strong>${header}</strong></p>`:``}
                ${sub?`<p>${sub}</p>`:''}
            </label>
        </div>
    </div>
  `;
};

export default BasketRadioInput;