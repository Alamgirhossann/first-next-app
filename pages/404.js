import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <h2>404 | sorry this page is not found </h2>
            <Link href={'/Home'}>go back to home</Link>
        </div>
    );
};

export default ErrorPage;