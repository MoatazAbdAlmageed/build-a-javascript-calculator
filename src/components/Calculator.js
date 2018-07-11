import React, {Component} from 'react';

const math = require('mathjs')

export class Calculator extends Component {

    constructor(props) {

        super(props);

        this.state = {
            display: 0,
        };


    }


    componentDidMount() {
    }


    // handleTypeChange = (e) => {
    //     const input = e.target.value;
    //     this.setState({input})
    // }

    handleKeyPress = (e) => {

        let display = this.state.display;
        debugger
        let input = e.target.value;
        if (display === 0 &&  input == 0) {
            return
        }


        if (typeof display === "string" ){


            /* cannot add multi .. */
            if ( input === '.' && display.slice(-1) ==='.'){
                return
            }


            /*
            user canot add multi . for the onr number like =>  1.5+2.5+5..2

            I will count operations (+,-,*,/) max

            */

        }
        /*empty init 0 s*/
        if (display === 0 ){
            display = ''
        }


        /*Parse numbers */

        const numbers = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
        ];


        const operations = [
            '+',
            '-',
            '/',
            '*',
        ];

        // if (numbers.includes(input)){
        //     input = parseInt(input)
        // }


        /* Clear */
        if (input === 'C') {
            this.setState({display: 0})
            return
        }


        /* multiply */
        if (input === 'x') {
            input = '*'
        }


        /*Equals*/
        if (input === '=') {
            this.setState({display: math.eval(display)})
            return
        }


        /*add pressed key to screen*/


        // if no number on the screen and user try to add operation it return
        if (!display && operations.includes(input)) {
            return
        }


        display += input


        this.setState({display: display})

    }

    render() {


        return (
            <div className="calc">
                <fieldset id="container">
                    <input id="display" value={this.state.display} type="text" name="display" readOnly/>
                    <input id='clear'
                           className="button"
                           type="button" value="C"
                           onClick={this.handleKeyPress}/>

                    <div className="clearfix"></div>
                    <input id='seven' className="button digits" type="button" value="7"
                           onClick={this.handleKeyPress}/>
                    <input id='eight' className="button digits" type="button" value="8"
                           onClick={this.handleKeyPress}/>
                    <input id='nine' className="button digits" type="button" value="9"
                           onClick={this.handleKeyPress}/>
                    <input id='add' className="button mathButtons" type="button" value="+"
                           onClick={this.handleKeyPress}/>
                    <br/>
                    <input id='four' className="button digits" type="button" value="4"
                           onClick={this.handleKeyPress}/>
                    <input id='five' className="button digits" type="button" value="5"
                           onClick={this.handleKeyPress}/>
                    <input id='six' className="button digits" type="button" value="6"
                           onClick={this.handleKeyPress}/>
                    <input id='subtract' className="button mathButtons" type="button"
                           value="-"
                           onClick={this.handleKeyPress}/>
                    <br/>
                    <input id='one' className="button digits" type="button"
                           value="1"
                           onClick={this.handleKeyPress}/>
                    <input id='two' className="button digits" type="button"
                           value="2"
                           onClick={this.handleKeyPress}/>
                    <input id='three' className="button digits"
                           type="button" value="3"
                           onClick={this.handleKeyPress}/>
                    <input id='multiply' className="button mathButtons"
                           type="button" value="x"
                           onClick={this.handleKeyPress}/>
                    <br/>


                    <button onClick={this.handleKeyPress}
                            value={'.'}
                            id="decimal" className="button mathButtons">.</button>


                    <input
                        id='zero'
                        className="button digits"
                        type="button" value="0"
                        onClick={this.handleKeyPress}/>


                    <button
                        value={'='}
                        onClick={this.handleKeyPress} id="equals" className="button mathButtons">=</button>

                    <input
                        id='divide'
                        className="button mathButtons"
                        type="button"
                        value="/"
                        onClick={this.handleKeyPress}/>
                </fieldset>
            </div>
        );
    }


}

export default Calculator;
