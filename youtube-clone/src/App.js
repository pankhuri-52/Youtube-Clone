import React from 'react';
import { Grid } from '@material-ui/core'; // curly braces around means tht this is not a default export but youtube is
import youtube from './api/youtube';

class App extends React.Component {
    render() {
        return (
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            {/* Search Bar */}
                        </Grid>
                        <Grid item xs={8}>
                            {/* Video detail */}
                        </Grid>
                        <Grid item xs={4}>
                            {/* Video List */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
export default App;