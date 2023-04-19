import React, { useState } from "react";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";
import styled from "styled-components";

// styled 컴포넌트 동적 스타일 적용 샘플
const FormControl = styled.div`
    margin: 0.5rem 0;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        color: ${(props) => (props.invalid ? "red" : "black")};
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
        background: ${(props) => (props.invalid ? "#fad0ec" : "transparent")};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
    }

    & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
    }
`;

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    // 필수 항목 체크 - 기본 설정 true
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        // 값이 있으면 경고 초기화
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        // 값이 없으면 입력안되게
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl invalid={!isValid}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </FormControl>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
