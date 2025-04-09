import { Button, Container, Typography } from '@mui/material'
import React from 'react'

function AboutPage() {
    return (
        <Container maxWidth="sm" style={{ marginTop: '50px', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Welcome to MUI with Next.js!
            </Typography>
            <Typography variant='h6'> {`This is the mui page of our Next.js app. It's a simple example to demonstrate how page routing works.`}</Typography>
            <Button variant="contained" color="primary">
                Click Me
            </Button>
        </Container>
    )
}

export default AboutPage