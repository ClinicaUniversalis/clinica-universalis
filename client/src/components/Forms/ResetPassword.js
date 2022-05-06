import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { isNilOrEmpty } from '../utils/helpers';
import './style.css';

const ResetPassword = () => {
    const useFormFields = (initialState) => {
        const [fields, setValues] = useState(initialState);

        console.log(fields);

        return [
            fields,
            setValues
        ];
    }

    const [fields, handleFieldChange] = useFormFields({
        code: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    
    const [isSendingCode, setIsSendingCode] = useState(false);

    function validateCodeForm() {
        return !isNilOrEmpty(email);
    }

    const handleSendCodeClick = async (event) => {
        event.preventDefault();

        setIsSendingCode(true);

        // try {
        //     await Auth.forgotPassword(fields.email);
        //     history.push('/login/resetConfirmation');
        // } catch (error) {
        //     onError(error);
        //     setIsSendingCode(false);
        // }
    };

    return (
        <div className="ResetPassword">
            <form onSubmit={handleSendCodeClick}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Button
                    block
                    type="submit"
                    size="lg"
                    isLoading={isSendingCode}
                    disabled={!validateCodeForm()}>
                    Send Confirmation
                </Button>
            </form>
        </div>
    );
};

export default ResetPassword;