import React, { useState, useEffect } from 'react';
import './css/Carousel.css';
import { useNavigate } from 'react-router-dom';

const Carousel = ({ questions }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const navigate = useNavigate()

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? questions.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        if (currentIndex === questions.length - 1) {
            navigate("/final"); // Redirect to final score page
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handleOptionClick = (optionIndex) => {
        const selectedOption = questions[currentIndex].options[optionIndex];
        let optionScore = 0;

        // Calculate score based on the selected option
        if (selectedOption.type === 'yesno') {
            optionScore = selectedOption.text === 'Yes' ? 2 : 0;
        } else if (selectedOption.type === 'radio') {
            const value = parseInt(selectedOption.text);
            optionScore = value >= 0 && value <= 3 ? 1 : 2;
        }

        setScore((prevScore) => prevScore + optionScore);

        // Proceed to the next question
        document.cookie = `score=${score}`
        goToNext();
    };

    useEffect(() => {
        if (currentIndex === questions.length ) {
            navigate("/final");
        }
    }, [currentIndex, questions.length]);

    return (
        <div className="carousel">
            <button className="prev" onClick={goToPrev}>&lt;</button>
            <div className="question-container">
                <div className="question" >
                    {questions[currentIndex].questionText}
                </div>
                <div className="options">
                    {questions[currentIndex].options.map((option, index) => (
                        <div key={index} className="option">
                            <input
                                type="radio"
                                id={`option_${index}`}
                                name={`question_${currentIndex}`}
                                value={option.text}
                                onClick={() => handleOptionClick(index)}
                            />
                            <label htmlFor={`option_${index}`}>{option.text}</label>
                        </div>
                    ))}
                </div>
            </div>
            <button className="next" onClick={goToNext}>&gt;</button>
            
        </div>
    );
};

export default Carousel;
