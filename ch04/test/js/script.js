let inputValue = 'Texas'

class Autocomplete extends React.Component {
    updateValues() {
        this.props.inputValue = 'California'
        inputValue = 'California'
        this.inputValue = 'California'
    }

    render() {
        return (
            <div>
                {this.props.inputValue}
                {inputValue}
                {this.inputValue}
            </div>
        )
    }
}

ReactDOM.render(React.createElement(Autocomplete, null), document.getElementById('content'));