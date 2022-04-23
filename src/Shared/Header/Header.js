import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link style={{ margin: '10px' }} to='/'>Home</Link>
            <Link to='/post'>Add PD</Link>
        </div>
    );
};

export default Header;