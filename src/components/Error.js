
import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

export const Error = () => {

    const err = useRouteError();
    return (

        <div className="not-found-container" style={styles.container}>
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncyVskanXJCh9k5NRXhbNWEcMvRAAifil5A&s" 
                alt="Page Not Found" 
                style={styles.image}
            />
            <h1 style={styles.heading}>404 - Page Not Found</h1>
            <p style={styles.text}>
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link to="/" style={styles.link}>Go Back to Home</Link>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    image: {
        width: '400px',
        height: 'auto',
        marginBottom: '20px',
        borderRadius: '5px',
    },
    heading: {
        fontSize: '2.5rem',
        color: '#333',
    },
    text: {
        fontSize: '1.2rem',
        color: '#555',
    },
    link: {
        display: 'inline-block',
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
    },
};

