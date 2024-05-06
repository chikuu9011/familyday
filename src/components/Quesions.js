import React from 'react'
import Carousel from './Carousel';
import Home from './Home'

const Quesions = () => {
    const questions = [{
        questionText: 'Does your family help mother in household chores?',
        options: [{ text: 'Yes', type: 'yesno' },
        { text: 'No', type: 'yesno' }]
    },
    {
        questionText: 'How many days of the week does your family dine together?',
        options: [
        { text: '0', type: 'radio' },
        { text: '1', type: 'radio' },
        { text: '2', type: 'radio' },
        { text: '3', type: 'radio' },
        { text: '4', type: 'radio' },
        { text: '5', type: 'radio' },
        { text: '6', type: 'radio' },
        { text: '7', type: 'radio' },
        ]
    },
    {
        questionText: 'Do you all fix things together, like your garden?',
        options: [{ text: 'Yes', type: 'yesno' },
        { text: 'No', type: 'yesno' }]

    },
    {
        questionText: 'How many days of the week do you exercise together?',
        options: [
            { text: '0', type: 'radio' },
            { text: '1', type: 'radio' },
            { text: '2', type: 'radio' },
            { text: '3', type: 'radio' },
            { text: '4', type: 'radio' },
            { text: '5', type: 'radio' },
            { text: '6', type: 'radio' },
            { text: '7', type: 'radio' },
            ]
    },

    {
        questionText: 'Do you have a term insurance plan?',
        options: [{ text: 'Yes', type: 'yesno' },
        { text: 'No', type: 'yesno' }]

    }
    ];

    return (
        <div>
        <Home/>
            <Carousel questions={questions} />
        </div>
    );
}

export default Quesions
