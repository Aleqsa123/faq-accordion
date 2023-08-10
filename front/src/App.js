import styles from './App.module.css';
import {useState} from 'react';


function App() {

  //This function sets "questions useState
  const [questionState, showQuestionState] = useState({
    activeQuestion: [],
    questions: [{ id: 1, 
                  question: "How many team members can I invite?", 
                  answer: "This is answer to question 1"},
                { id: 2, 
                  question: "What is the maximum file upload size?", 
                  answer: "No more than 2GB. All files in your account must fit your allotted storage space."}, 
                { id: 3, 
                  question: "How do I reset my password?", 
                  answer: "This is answer to question 3"}, 
                {id: 4, 
                  question: "Can I cancel my subscription?", 
                  answer: "This is answer to question 4"}, 
                {id: 5, 
                  question: "Do you provide additional support?", 
                  answer: "This is answer to question 5"}]
  })

// This function selects quetion I want answer to be shown
  function toggleActive(index) {
    showQuestionState({...questionState, activeQuestion: questionState.questions[index]});
  }

  // This function sets styles for shown answer "p" elements
  function toggleBoldQ(index){
    if (questionState.questions[index] === questionState.activeQuestion){
      return styles.boldquestion;
    }else{return styles.question}
  }

  // This function sets styles for shown answer "p" elements
  function toggleStyleP(index){
    if (questionState.questions[index] === questionState.activeQuestion){
      return styles.show;
    }else{return styles.hide}
  }

    // This function sets styles for arrow down/up "img" elements
  function toggleStyleImg(index){
    if (questionState.questions[index] === questionState.activeQuestion){
      return styles.arrowup;
    }else{return styles.arrowdown}
  }

  return (
    <div className={styles.App}>
      <img className={styles.hero} src="./images/illustration-woman-online-mobile.svg" />
      <h1>FAQ</h1>

      <div className={styles.faqdiv}>
      {questionState.questions.map((element, index) => {
        return <div key={index}>
                  <div className={styles.questionDiv} onClick={()=>{toggleActive(index)}}>
                    <p className={toggleBoldQ(index)} >{questionState.questions[index].question}</p> 
                    <img src="./images/icon-arrow-down.svg" className={toggleStyleImg(index)} alt="arrow icon" />

                    
                  </div>
                  <p className={toggleStyleP(index)}>{questionState.questions[index].answer}</p>
                  <div className={styles.rect}></div>
                </div> 
      })}   
      </div>

    </div>
  );
}


export default App;
