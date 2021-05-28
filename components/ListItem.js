import { List, makeStyles } from '@material-ui/core';
import { useSession } from 'next-auth/client'
import Typography from '@material-ui/core/Typography';
import { Person } from '../components/Person'
import { NewPerson } from '../components/NewPerson'

const useStyles = makeStyles({
    title: {
        margin: '1em'
    }
})

function ListItem({ list }) {
    const [session] = useSession();
    const classes = useStyles();

    return (
        <>
            {session && <Typography className={classes.title} variant="h3" align="center" margin="dense">Welcome {session.user.name}</Typography>}
            {session && <List>
                {
                    list.map((p, i) => (
                        <Person key={i} person={p} />
                    ))
                }
            </List>}
            {session && <NewPerson/>}
        </>
    );
}

export { ListItem };