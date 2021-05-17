import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { signIn, signOut, useSession } from 'next-auth/client'
import { AppLink } from './AppLink';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    AppLink: {
        margin: theme.spacing(1, 1.5),
    },
}));

function Header () {
    const classes = useStyles();
    const [isAuthenticated] = useSession();

    const authCallback = isAuthenticated ? () => signOut() : () => signIn();
    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    Champions
                </Typography>
                <nav>
                    <AppLink href="/" className={classes.AppLink}>
                        Home
                    </AppLink>
                    <AppLink href="api/people" className={classes.AppLink}>
                        People
                    </AppLink>
                    <AppLink href="/about" className={classes.AppLink}>
                        About
                     </AppLink>
                </nav>
                <Button color="primary" variant="outlined" className={classes.AppLink} onClick={authCallback}>
                    {isAuthenticated ? 'Sign Out' : 'Sign In'}
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export { Header };
