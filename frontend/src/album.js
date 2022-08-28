import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Typography, Container } from '@material-ui/core';
import { TreeItem, TreeView } from '@mui/lab';
import { DataUsageOutlined } from '@material-ui/icons';

import useStyles from './styles';

const classes = null;
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Album() {

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <DataUsageOutlined className={classes.smallIcon} />
                    <Typography variant="h6">
                        VisaFlow
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" style={{ marginTop: '50px'}}>
                        <Typography variant="h2" align="center" color="textPrimary">
                            VisaFlow
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Simple tasks don't require complex solutions.
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom varient="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe
                                        the content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Made for SYNCSHACK 2022
                </Typography>
            </footer>
        </>
    )
}

export default Album();