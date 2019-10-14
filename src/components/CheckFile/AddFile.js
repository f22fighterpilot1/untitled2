import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createFile} from "../../actions/checkFileActions";
import classnames from "classnames";

class AddFile extends Component {
    constructor() {
        super();

        this.state = {

            filepath: "",
            filename: "",
            errors: {}

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault()
        const newFile = {
            filepath: this.state.filepath,
            filename: this.state.filename,
        };
        this.props.createFile(newFile, this.props.history)
    }

    render() {
        const {errors} = this.state


        return (
            <div>
                <div className="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Add a file</h5>
                                <hr/>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text" className={classnames("form-control form-control-lg ",{
                                            "is-invalid":errors.filepath
                                        })}
                                               placeholder="File Path"
                                               name="filepath"
                                               value={this.state.filepath}
                                               onChange={this.onChange.bind(this)}
                                        />
                                        {errors.filepath && (
                                            <div className="invalid-feedback">{errors.filepath}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className={classnames("form-control form-control-lg ",{
                                            "is-invalid":errors.filename
                                        })}
                                               placeholder="File Name"
                                               name="filename"
                                               value={this.state.filename}
                                               onChange={this.onChange.bind(this)}
                                               />
                                        {errors.filename && (
                                            <div className="invalid-feedback">{errors.filename}</div>
                                        )}
                                    </div>

                                    <input type="submit" className="btn btn-primary btn-block mt-4"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>            </div>
        );
    }
}

AddFile.propTypes = {
    createFile: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {createFile}
    ) (AddFile);