import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        VisaFlow
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Task A',
    subheader: 'CRITICAL',
    length: '10',
    description: [
      'Dependencies: None',
      'Earliest time frame: 0-10',
      'Latest time frame: 0-10',
      'Float time: 0'
    ],
    buttonText: 'Mark as completed',
    buttonVariant: 'contained',
  },
  {
    title: 'Task B',
    subheader: 'CRITICAL',
    length: '20',
    description: [
      'Dependencies: A',
      'Earliest time frame: 10-30',
      'Latest time frame: 10-30',
      'Float time: 0',
    ],
    buttonText: 'Mark as completed',
    buttonVariant: 'contained',
  },
  {
    title: 'Task C',
    subheader: 'CRITICAL',
    length: '5',
    description: [
      'Dependencies: A',
      'Earliest time frame: 30-35',
      'Latest time frame: 30-35',
      'Float time: 0',
    ],
    buttonText: 'Mark as completed',
    buttonVariant: 'contained',
  },
  {
    title: 'Task E',
    length: '20',
    description: [
      'Dependencies: D, G, H',
      'Earliest time frame: 45-65',
      'Latest time frame: 45-65',
      'Float time: 20'
    ],
    buttonText: 'Mark as completed',
    buttonVariant: 'outlined',
  },
  {
    title: 'Task F',
    length: '15',
    description: [
      'Dependencies: A',
      'Earliest time frame: 10-25',
      'Latest time frame: 25-40',
      'Float time: 15'
    ],
    buttonText: 'Mark as completed',
    buttonVariant: 'outlined',
  },
  {
    title: 'Task G',
    length: '5',
    description: [
      'Dependencies: A, F',
      'Earliest time frame: 35-40',
      'Latest time frame: 40-45',
      'Float time: 5',
    ],
    buttonText: 'Mark as completed',
    buttonVariant: 'outlined',
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            VisaFlow
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Your Tasks
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.subheader === 'CRITICAL' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      {tier.length}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      mins
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}