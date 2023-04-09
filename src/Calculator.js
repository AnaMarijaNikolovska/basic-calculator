import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';

function Calculator() {
    const [displayValue, setDisplayValue] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;

            if (/[0-9]/.test(key)) {
                setDisplayValue((prevValue) => prevValue + key);
            } else if (/[\+\-\*\/]/.test(key)) {
                setDisplayValue((prevValue) => prevValue + key);
            } else if (key === '.') {
                setDisplayValue((prevValue) => prevValue + key);
            } else if (key === 'Escape') {
                handleClearClick();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            handleEqualClick();
        }
    };

    const handleNumberClick = (number) => {
        setDisplayValue((prevValue) => prevValue + number);
    };

    const handleOperatorClick = (operator) => {
        setDisplayValue((prevValue) => prevValue + operator);
    };

    const handleClearClick = () => {
        setDisplayValue('');
        setResult('');
    };

    const handleEqualClick = () => {
        try {
            const result = eval(displayValue);
            setResult(result.toString());
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <Container className="mt-5 bgColor" bg="dark" variant="dark">
            <Card className="text-black" bg="dark">
                <br/>
                <Row className="card-body">
                    <Col>
                        <input type="text" value={displayValue} className="form-control mb-2 shadow-inner" onKeyDown={handleEnter}/>
                    </Col>
                </Row>
                <Row className="card-body">
                    <Col md="8" className='text-secondary text-uppercase'>
                        <h6 className='end'> RESULT: </h6>
                    </Col>
                    <Col md="4">
                        <input type="text" value={result} className="form-control mb-2 text-danger shadow-inner font-weight-bold text-center" disabled/>
                    </Col>
                </Row>
                <Row>
                    <Col className="calc-btn btn-outline-secondary btn-block">
                        <Button variant="outline-secondary" className="b" onClick={() => handleNumberClick('1')}>1</Button>
                    </Col>
                    <Col className="calc-button">
                        <Button variant="outline-secondary" className="b" onClick={() => handleNumberClick('2')}>2</Button>
                    </Col>
                    <Col className="calc-button">
                        <Button variant="outline-secondary" className="b" onClick={() => handleNumberClick('3')}>3</Button>
                    </Col>
                    <Col className="calc-button">
                        <Button variant="outline-secondary" className="b" onClick={() => handleOperatorClick('+')}>+</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="calc-button">
                        <Button variant="outline-secondary"className="b" onClick={() => handleNumberClick('4')}>4</Button>
                    </Col>
                    <Col className="calc-button">
                        <Button variant="outline-secondary" className="b" onClick={() => handleNumberClick('5')}>5</Button>
                    </Col>
                    <Col className="calc-button">
                        <Button variant="outline-secondary" className="b" onClick={() => handleNumberClick('6')}>6</Button>
                    </Col>
                    <Col className="calc-button">
                        <Button variant="outline-secondary" className="b" onClick={() => handleOperatorClick('-')}>-</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="calc-button">
                        <Button variant="outline-secondary" className="b" onClick={() => handleNumberClick('7')}>7</Button>
                    </Col>
                    <Col className="calc-button">
                        <Button variant="outline-secondary" className="b" onClick={() => handleNumberClick('8')}>8</Button>
                    </Col>
                    <Col className="calc-button">
                        <Button variant="outline-secondary" className="b" onClick={() => handleNumberClick('9')}>9</Button>
                    </Col>
                    <Col className="calc-button">
                        <Button variant="outline-secondary" className="b" onClick={() => handleOperatorClick('*')}>*</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="calc-button">
                        <Button variant="outline-secondary" className="b" onClick={() => handleNumberClick('0')}>0</Button>
                    </Col>
                    <Col className="calc-button">
                        <Button variant="outline-secondary" className="b" onClick={() => handleNumberClick('.')}>.</Button>
                    </Col>
                    <Col className="calc-button">
                        <Button variant="outline-secondary" className="b" onClick={() => handleOperatorClick('/')}>/</Button>
                    </Col>
                    <Col className="calc-button">
                        <Button variant="outline-secondary" className="b" onClick={handleClearClick}>C</Button>
                    </Col>
                </Row>
                <Row md="12">
                    <Col>
                        <Button md="12" variant="outline-primary" className="equal" onClick={handleEqualClick}>=</Button>
                    </Col>
                </Row>
                <br/>
            </Card>
        </Container>
    );
}

export default Calculator
