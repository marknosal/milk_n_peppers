import React, { useState, useEffect } from "react";
import { /*BrowserRouter as Router, Route, Routes,*/ Navigate } from 'react-router-dom';

export default function Return () {
    const [status, setStatus] = useState(null)
    const [customerEmail, setCustomerEmail] = useState('')

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sessionId = urlParams.get('session_id');

        fetch(`/session-status?session_id=${sessionId}`)
            .then(response => response.json())
                .then(data => {
                    setStatus(data.status)
                    setCustomerEmail(data.customer_email)
                });
    }, []);

    if (status === 'open') {
        return (
            <Navigate to='/checkout' />
        )
    }

    if (status === 'complete') {
        return (
            <section id='success'>
                <p>
                    We appreciate your business! A congfirmation email will be sent to {customerEmail}.

                    If you have any questions, please email <a href='mailto:orders@example.com'>orders@example.com</a>.
                </p>
            </section>
        )
    }

    return null;
}