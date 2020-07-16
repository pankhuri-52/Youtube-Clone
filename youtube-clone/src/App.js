import React from 'react';
import { Grid } from '@material-ui/core'; // curly braces around means tht this is not a default export but youtube is
import youtube from './api/youtube';
import {SearchBar, VideoDetail, VideoList} from './components';

class App extends React.Component {

    state = {
        videos : [],
        selectedVideo : null
    }

    //async stops the execution of code until something is fetched
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search',{ 
            params : {
                part : 'snippet',
                maxResults : 5,
                key : 'key',
                q:searchTerm
            }
        });

        console.log(response);

        this.setState({ videos : response.data.items, selectedVideo : response.data.items[0] });
    }

    render() {

        const {selectedVideo, videos} = this.state;

        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            {/* Search Bar */}
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            {/* Video detail */}
                            <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            {/* Video List */}
                            {/* <VideoList videos={videos} /> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
export default App;