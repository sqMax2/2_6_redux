import * as React  from "react";
import {connect} from "react-redux";

class ReduxApp extends React.Component {
    addLibrary () {
        this.props.addLibrary(this.inputValue.value);
        this.inputValue.value = '';
    }

    render() {
        return (
            <div>
                <input type="type" ref={(input) => {this.inputValue = input}}/>
                <button onClick={this.addLibrary.bind(this)}>Click me</button>
                <ul className="testUl">
                    {this.props.libraries.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    };
}

export default connect(
    // mapStateToProps
    state => ({
        libraries: state.libraries,
        frameworks: state.frameworks
    }),
    // mapDispatchToProps
    dispatch => ({
        addLibrary: (element) => {
            dispatch({type: 'ADD_LIBRARY', payload: element});
        },
        addFramework: (element) => {
            dispatch({type: 'ADD_FRAMEWORK', payload: element});
        }
    })
)(ReduxApp);