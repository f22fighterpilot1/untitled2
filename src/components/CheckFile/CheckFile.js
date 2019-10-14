import React, {Component} from 'react';

class CheckFile extends Component {
    constructor(props) {
        super(props);
    }

    // list() {
    //     console.log(this.props.checkFiles);
    //                 this.props.checkFiles.forEach(file => {
    //                     console.log(file);
    //                     return [
    //                     <div>here</div>
    //                         ]
    //                 }
    //         )
    //
    //
    //
    //
    //         }
    render() {

        console.log(this.props.checkFiles);
        if(this.props.checkFiles[0] !== undefined) {
            const checkFiles = this.props.checkFiles;
            return (
                <div className="container">

                        {this.props.checkFiles.map(file => {
                            if(file.hash !== null) {
                                return [
                                    <div className="card card-body bg-light mb-3">
                                        <div className="row">
                                            <div className="col-2">
                                                <ul className="list-group">
                                                    <div>
                                                        <span className="mx-auto">File Name:</span>
                                                    </div>
                                                    <div>
                                                        <span className="mx-auto">{file.filename}</span>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div className="col-2">
                                                <ul className="list-group">
                                                    <div>
                                                        <span className="mx-auto">File Path:</span>
                                                    </div>
                                                    <div>
                                                        <span className="mx-auto">{file.filepath}</span>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div className="col-2">
                                                <ul className="list-group">
                                                    <div>
                                                        <span className="mx-auto">File Hash:</span>
                                                    </div>
                                                    <div>
                                                        <span className="mx-auto">{file.hash}</span>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div className="col-2">
                                                <ul className="list-group">
                                                    <a href="#">
                                                        <li className="list-group-item update">
                                                            <i className="fa fa-edit pr-1"> Update File</i>
                                                        </li>
                                                    </a>
                                                    <a href="">
                                                        <li className="list-group-item delete">
                                                            <i className="fa fa-minus-circle pr-1"> Remove File</i>
                                                            {/*<input type="submit" className="btn btn-primary btn-block mt-4"/>*/}

                                                        </li>
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ]
                            }
                            else {
                                return null;
                            }

                            }
                        )
                        }
                    </div>      );
        }
        else {
            return null;
        }

    }
}

export default CheckFile;