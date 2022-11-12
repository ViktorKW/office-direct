import "./style.scss";
const BasketUserInput = (placeholder) => {
  return (
    <div class='userInput'>
        <input type='text' placeholder={placeholder}/>
        <p class='inscription'>{placeholder}</p>
    </div>
  )
};

export default BasketUserInput;