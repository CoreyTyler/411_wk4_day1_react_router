import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import { Container, Paper, Chip } from '@material-ui/core'

const Car = (props) => {
    let id = props.match.params.id;
    let whip = cars.find(car => car.id === Number(id))
    
    return (
        <Container maxWidth='md' id='container'>
            <Paper round elevation={10}>
                <h1>{whip.Name}</h1>
                <Chip label={`id: ${whip.id}`}/>
                <Chip label={`Car Name: ${whip.Name}`}/>
                <Chip label={`Year: ${whip.Year}`}/>
                <Chip label={`Origin: ${whip.Origin}`}/>
                <Chip label={`Cylinders: ${whip.Cylinders}`}/>
                <Chip label={`Displacement: ${whip.Displacement}`}/>
                <Chip label={`Horsepower: ${whip.Horsepower}`}/>
                <Chip label={`Weight in Lbs: ${whip.Weight_in_lbs}`}/>
                <Chip label={`MPG: ${whip.Miles_per_Gallon}`}/>
                <Chip label={`Acceleration: ${whip.Acceleration}`}/>
            </Paper>
        </Container>
    )
}

export default Car