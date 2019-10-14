import React, {Component} from 'react';
import CheckFile from "./CheckFile/CheckFile";
import CreateButton from "./CheckFile/CreateButton";
import { connect } from "react-redux";
import { getCheckFiles} from "../actions/checkFileActions";
import PropTypes from "prop-types";

class Dashboard extends Component {

    componentDidMount(){
        this.props.getCheckFiles();
    }

    render() {
        console.log(this.props.checkFiles);
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Welcome to the Ark</h1>
                            <br/>
                            <CreateButton/>
                            <br/>
                            <hr/>
                            <CheckFile checkFiles={this.props.checkFiles}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Dashboard.propTypes = {
//     checkFiles: PropTypes.array.isRequired,
//     getCheckFiles: PropTypes.func.isRequired
// };

const mapStateToProps = state => ({
    checkFiles: state.checkFile.checkFiles
});

export default connect(
    mapStateToProps,
    { getCheckFiles }
)(Dashboard);
