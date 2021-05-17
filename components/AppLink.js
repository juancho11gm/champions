import React from 'react'
import Link from '@material-ui/core/Link';
import { useRouter } from 'next/router'

function AppLink ({ href, children, className }) {
    const router = useRouter();
    let newClassName = className || '';
    if (router.pathname === href) {
        newClassName = `${className} selected`;
    }

    return <Link variant="button" color="textPrimary" href={href} className={newClassName}>{children}</Link>
}

export { AppLink };
