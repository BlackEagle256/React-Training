import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            mail: '',

            submitted: false,
            isValid: false
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="user">UserName</label>
                    <input
                        type="text"
                        onClick={this.state.firstname}
                        placeholder='Name'
                    />

                    <label htmlFor="last">lastName</label>
                    <input type="text" />

                    <label htmlFor="email">Email</label>
                    <input type="email" />

                    <input type="submit" value="Submite" />
                </form>
            </div>
        )
    }
}
