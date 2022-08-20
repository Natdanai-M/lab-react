import React, { useState } from 'react';
import _, { at, attempt } from 'lodash';

import CharacterCard from './CharacterCard';

const prepareStateFormWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFormWord(props.value))

    const activationHandler = c => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        setState({...state, guess}) //setState({...state, guess: guess}) ละ codeไว้ได้บางส่วน

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, completed: true})
            }else{
                console.log('reset, next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
        console.log(guess)
    }
    return (
         <div>
                { 
                    state.chars.map((c, i) => 
                        <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                    )
                }
          </div>
    ); 
}