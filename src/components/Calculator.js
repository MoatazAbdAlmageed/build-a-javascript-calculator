import React, {Component} from 'react';

const math = require('mathjs')
let canAddDot = true;
let canAddPlus = true;
let canAddMinus = true;
let canAddDivide= true;
let canAddMulti= true;

export class Calculator extends Component {

    handleKeyPress = (e) => {


        let display = this.state.display;

        let input = e.target.value;




        if (display === 0 &&  input === 0) {
            return
        }



        /*empty init 0 s*/
        if (input && ( display === 0 ||  display === '') ){
            this.setState({display:input})
        }

        /*canAddDot*/
        if ( input === '.' ){
            if (!canAddDot){
                return
            }
            else{
                canAddDot = false
            }
        }


        /*canAddPlus*/
        if ( input === '+' ){
            if (!canAddPlus){
                return
            }
            else{
                canAddPlus = false
            }
        }

        /*canAddMinus*/
        if ( input === '-' ){
            if (!canAddMinus){
                return
            }
            else{
                canAddMinus = false
            }
        }
        /*canAddMulti*/
        if ( input === '*' ){
            if (!canAddMulti){
                return
            }
            else{
                canAddMulti = false
            }
        }

        /*canAddDivide*/
        if ( input === '/' ){
            if (!canAddDivide){
                return
            }
            else{
                canAddDivide = false
            }
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


        const operators = [
            '+',
            '-',
            '/',
            '*',
        ];

        if (numbers.includes(input)){

            canAddMinus =  true;
            canAddPlus = true;
            canAddMulti = true;
            canAddDivide = true;

            // input = parseInt(input)
        }


        /* Clear */
        if (input === 'C') {
            canAddDot = true;

            // document.getElementById("display").setAttribute('type', 'number');
            document.getElementById("display").innerHtml = 0
            this.setState({display: '0'})
            return
        }





        /*Equals*/
        if (input === '=') {
            this.setState({display: math.eval(display).toString()})
            return
        }


        /*add pressed key to screen*/


        // if no number on the screen and user try to add operation it return
        if ( operators.includes(input)) {
            var lastChar = display.substr(display.length - 1); // => "1"
            let displayAsArray = display.slice().split('');
            if ( operators.includes(lastChar)) { /* if last char in operator */
                displayAsArray[displayAsArray.length - 1] = input; /*replace last char with operator (input) */
                this.setState({display: displayAsArray.join('')})
               return
            }
            canAddDot = true
            if (!display){
                return
            }

        }


        // display += input

        if (!display || display === '0' || display === ''){
            this.setState({display: input})
        }
        else{
            this.setState({display:display+input})


        }

    }

    constructor(props) {

        super(props);

        this.state = {
            display:0,
        };


    }


    // handleTypeChange = (e) => {
    //     const input = e.target.value;
    //     this.setState({input})
    // }

    // componentDidMount() {
    // }

    render() {


        return (
            <div className="calc">
                <fieldset id="container">
                    {/*<input*/}
                    {/*id="display" value={this.state.display  }*/}
                    {/*type="text" name="display"*/}
                    {/*readOnly*/}
                    {/*/>*/}

                    <h1 id="display">{this.state.display}</h1>
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
                           type="button" value="*"
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
