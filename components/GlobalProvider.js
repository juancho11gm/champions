import * as React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'next-auth/client';

function GlobalProvider ({ children }) {
    return (
        <Provider>
            <CssBaseline />
            {children}
        </Provider>
    );
}

export { GlobalProvider };
