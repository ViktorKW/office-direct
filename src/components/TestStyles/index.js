
const TestStyles = () => {
    return `<div style="background:#ffff; padding:10px;">
        <h1>Styles showcase!</h1>
        <hr/>
        <h2 class="alert">Buttons</h2>
        <button class="blue-btn-big">class = "blue-btn-med"</button>
        <br/>
        <br/>
        <button class="blue-btn-med">class = "blue-btn-med"</button>
        <br/>
        <br/>
        <button class="blue-btn-small">class = "blue-btn-small"</button>
        <br/>
        <br/>
        <button class="grey-btn">class = "grey-btn"</button>
        <br/>
        <br/>
        <lable>class = "circle-btn"</lable>
        <div style="display:flex">
            <button class="circle-btn"></button>
            <button class="circle-btn"></button>
            <button class="circle-btn"><</button>
            <button class="circle-btn">></button>
        </div>
        <hr/>
        <h2 class="alert">Text</h2>
        SimpleText
        <header>header text</header>
        <h1>h1 text</h1>
        <h2>h2 text</h2>
        <h3>h3 text</h3>
        <h4>h4 text</h4>
        <button>simple button text</button>
        <br/>
        <button class="btn-text-big">class="btn-text-big"</button>
        <br/>
        <button class="btn-text-med">class="btn-text-med"</button>
        <br/>
        <button class="btn-text-small">class="btn-text-small"</button>
        <p>simple p text</p>
        <p class="p-text-big">class="p-text-big</p>
        <p class="p-text-med"> class="p-text-med"</p>
        <p class="p-text-small">class="p-text-small"</p>
        <caption>caption</caption>
        <br/>
        <lable>label</lable>
        <hr/>
        <h2 class="alert">Input type="text" (beta)</h2>
        <br/>
        <div class="group">
            <input type="text" required="required"/>
            <label class = "placeholder">Name</label>
        </div>

    </div>`;
};

export default TestStyles;