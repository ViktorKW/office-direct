import './style.scss';
import face from './images/face.svg';
import star from './images/star.svg';

const Comments = () => {
  return `
  <comments>
    <header>Comments</header>

    <container>
    <comment>
      <person>
        <img src = "${face}"/>
        <info>
          <name>Natalie, Kiyv</name>
          <stars>
            <img src = "${star}"/>
            <img src = "${star}"/>
            <img src = "${star}"/>
            <img src = "${star}"/>
            <img src = "${star}"/>
          </stars>
        </info>
      </person>

      <text>
        Google Translate is a multilingual neural machine translation service developed by Google to translate text, documents and websites from one language into another. It offers a website interface, a mobile app for Android and iOS, and an API that helps developers build browser extensions and software...
      </text>

      <finish>Read all...</finish>
    </comment>
    <comment>
      <person>
        <img src = "${face}"/>
        <info>
          <name>Natalie, Kiyv</name>
          <stars>
            <img src = "${star}"/>
            <img src = "${star}"/>
            <img src = "${star}"/>
            <img src = "${star}"/>
            <img src = "${star}"/>
          </stars>
        </info>
      </person>

      <text>
        Google Translate is a multilingual neural machine translation service developed by Google to translate text, documents and websites from one language into another. It offers a website interface, a mobile app for Android and iOS, and an API that helps developers build browser extensions and software...
      </text>

      <finish>Read all...</finish>
    </comment></container>    
  </comments>`;
};

export default Comments;
