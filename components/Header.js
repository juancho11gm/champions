import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { signIn, signOut, useSession } from 'next-auth/client'

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
    link: {
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
                    <Link variant="button" color="textPrimary" href="/" className={classes.link}>
                        Home
                    </Link>
                    <Link variant="button" color="textPrimary" href="api/people" className={classes.link}>
                        People
                    </Link>
                    <Link variant="button" color="textPrimary" href="/about" className={classes.link}>
                        About
                     </Link>
                </nav>
                <Button color="primary" variant="outlined" className={classes.link} onClick={authCallback}>
                    {isAuthenticated ? 'Sign Out' : 'Sign In'}
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export { Header };
