import React from 'react';
import '../pages/style/Name.scss';

function Name({className,length,name}) {
    return (
        <p className={className}>
                { length > 20 ? name.substring(18,37)+"..." : name}
        </p>
    );
}

export default Name;