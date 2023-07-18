import './JoinProgram.css'
import {useState} from "react";

export const JoinProgram = message => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (isSubscribed) return;


        const response = await fetch('/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email}),
        }).then(response => {

            if (response.status === 422 || email === 'forbidden@gmail.com') {
                throw '{ "error": "Email is already in use" }';
            }
            setEmail('');
            setIsSubscribed(true);
        }).catch(errorMessage => {
            window.alert(errorMessage);
        })


    };

    const handleUnsubscribe = async () => {

        const response = await fetch('/unsubscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email}),
        }).then(response => {
            setIsSubscribed(false);
            if (response.status === 200) {
                window.alert('Unsubscribed successfully!');
                setIsSubscribed(false);
            } else {
                throw new Error('Failed to unsubscribe.');
            }
        }).catch(errorMessage => {
        });

    }

    return (
        <div className="join-program">
            <div className="content">
                <div className="join-program__header">
                    <div className="join-program__title">
                        Join Our Program
                    </div>
                    <div className="join-program__subtitle">
                        Sed do eiusmod tempor incididunt <br/>
                        ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className="join-program__main">
                    <form onSubmit={handleSubscribe}>
                        <div>
                            <input
                                className="email-input"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value.trim())}
                            />
                            <button type="submit" className="submit-btn" disabled={isSubscribed}>
                                {isSubscribed ? 'Subscribing...' : 'Subscribe'}
                            </button>
                            <button
                                className="submit-btn"
                                onClick={handleUnsubscribe} disabled={!isSubscribed}>
                                Unsubscribe
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
