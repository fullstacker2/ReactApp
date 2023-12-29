import React from "react";

class Checkout extends React.Component {
    state = {name:'', email:''};
    emailRef = null;
    componentDidMount() {
        if(this.emailRef) {
            this.emailRef.focus();
        }
    }
    submitData(eventObj) {
        eventObj.preventDefault();   // page reload is prevented after submission
        console.log("form submitted", this.state);
    }
    render() {
        return (
            <form onSubmit={(ev) => this.submitData(ev)}>
                <label> Name </label>
                <input 
                type="text" 
                onChange={(e) => this.setState({name: e.target.value})}
                />
                {this.state.name === "" ? <small>Name is required</small> : null}
                <label>Email</label>
                <input 
                type="text"
                ref = {(r) => (this.emailRef = r)}
                onChange={(e) => this.setState({email: e.target.value})} 
                />
                {this.state.email === "" ? <small>Email is required</small> : null}
                <button type="submit">Submit </button>
            </form>
        );
    }
}
export default Checkout;