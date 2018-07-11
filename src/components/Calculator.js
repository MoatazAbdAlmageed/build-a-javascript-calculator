import React, {Component} from 'react';


export class Calculator extends Component {

    constructor(props) {

        super(props);

        this.state = {
        };


    }


    componentDidMount() {
    }


    handleTypeChange = (e) => {
        const input = e.target.value;
        this.setState({input})
    }

    handleKeyPress(){
        debugger
    }
    render() {

        const spinner = <div className="spinner"></div>;

        return (
            <div className="calc">
                <fieldset id="container">
                    <form name="calculator">
                        <input id="display" type="text" name="display" readOnly/>
                        <input className="button digits" type="button" value="7"
                               onClick={this.handleKeyPress}/>
                        <input className="button digits" type="button" value="8"
                               onClick={this.handleKeyPress}/>
                        <input className="button digits" type="button" value="9"
                               onClick={this.handleKeyPress}/>
                        <input className="button mathButtons" type="button" value="+"
                               onClick={this.handleKeyPress}/>
                        <br/>
                        <input className="button digits" type="button" value="4"
                               onClick={this.handleKeyPress}/>
                        <input className="button digits" type="button" value="5"
                               onClick={this.handleKeyPress}/>
                        <input className="button digits" type="button" value="6"
                               onClick={this.handleKeyPress}/>
                        <input className="button mathButtons" type="button"
                               value="-"
                               onClick={this.handleKeyPress} />
                        <br/>
                        <input className="button digits" type="button"
                               value="1"
                               onClick={this.handleKeyPress}/>
                        <input className="button digits" type="button"
                               value="2"
                               onClick={this.handleKeyPress}/>
                        <input className="button digits"
                               type="button" value="3"
                               onClick={this.handleKeyPress}/>
                        <input className="button mathButtons"
                               type="button" value="x"
                               onClick={this.handleKeyPress}/>
                        <br/>
                        <input id="clearButton"
                               className="button"
                               type="button" value="C"
                               onClick={this.handleKeyPress} />
                        <input
                            className="button digits"
                            type="button" value="0"
                            onClick={this.handleKeyPress} />
                        <input
                            className="button mathButtons"
                            type="button"
                            value="="
                            onClick={this.handleKeyPress} />
                        <input
                            className="button mathButtons"
                            type="button"
                            value="/"
                            onClick={this.handleKeyPress} />
                    </form>
                </fieldset>
            </div>
        );
    }


}

export default Calculator;
