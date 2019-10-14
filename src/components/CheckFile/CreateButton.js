import React from 'react';
import {Link} from "react-router-dom";

const CreateButton = () => {
    return(
        <React.Fragment>
        <Link to="/addFile" className="btn btn-lg btn-info">
            Add a File
        </Link>
        </React.Fragment>

    );
};

export default CreateButton;