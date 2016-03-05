/**
 * Created by youngmoon on 3/5/16.
 */

import React from 'react';

/**
 * Define React Component Spinner
 */
class Spinner extends React.Component {

    /**
     * Constructor for Spinner
     * @constructs
     * @param {Spinner.propTypes} props
     */
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    /**
     * Render Spinner.
     * @returns {ReactElement|XML}
     */
    render() {
        return (
            <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
        );
    }
};

/**
 * Define Properties' type for Spinner
 */
Spinner.propTypes = {
};

/**
 * Define Default Props of Spinner
 */
Spinner.defaultProps = {
};

export default Spinner;
