import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Input extends Component {
    render() {
        const contents = this.props.success ? null : (
            <form className="fonm-inline">
                <input type="text" data-test="input-box" classNamew="mb-2 mx-sm-3" placeholder="enter guess" />
                <button type="submit" data-test="submit-button"  className="btn btn-primary mb-2">Submit</button>
            </form>
        )
        return (
            <div data-test="component-input">
                {contents}
            </div>
        )
    }
}

const mapStateToProps = ({success}) => ({
    success,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps)(Input);
