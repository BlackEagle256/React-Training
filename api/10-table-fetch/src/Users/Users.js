import React, { Component } from 'react'
import { Table, Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Users extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                return res.json()
            }).then(data => {
                this.setState({
                    posts: data
                })
            })
    }

    render() {
        return (
            <Container className='mt-5'>
                {this.state.posts.length > 0 ? (<Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(post => (
                            <tr>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                ) : (
                    <Alert variant='info'>Loading</Alert>
                )}

            </Container>
        )
    }
}
