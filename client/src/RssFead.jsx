import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "react-bootstrap/Card";

class RssFeed extends React.Component {


    render() {
        // const [data, setData] = useState(null);
        //
        // useEffect(() => {
        //     axios.get('http://localhost:3002/meduza')
        //         .then(response => {
        //             setData(response.data);
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
        // }, []);

        const data = {};

        return (
            <main className="container">
                <h2>{this.props.feedUrl}</h2>
                {data ? (
                    <div className="justify-content-center mt-3 mb-3">
{/*
                        <h2>{data.title}</h2>
*/}
                        <h2>{this.props.feedUrl}</h2>
                        <div className="row">
                            {/*{data.items.length ? (*/}
                            {/*    <div className="col-8">*/}
                            {/*        {data.items.map(item => (*/}
                            {/*            <div key={item.title} className="card">*/}
                            {/*                <a href={item.link}>{item.title}</a>*/}
                            {/*            </div>*/}
                            {/*        ))}*/}
                            {/*    </div>*/}
                            {/*) : (*/}
                            {/*    <p>Loading ... </p>*/}
                            {/*)}*/}
                        </div>
                    </div>
                ) : (
                    <Card>Loading...</Card>
                )}
            </main>
        )
    }
}

export default RssFeed;