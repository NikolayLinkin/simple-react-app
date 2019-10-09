import React from "react";
import PropTypes from "prop-types";
import HomeTab from "./Tab";

const propTypes = {
    onTabClick: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    activeTab: PropTypes.string,
};

const HomeTabs = ({loggedIn, onTabClick, activeTab}) => {
    return (
        <div className="catalog__tabs">
            {loggedIn ?
                <HomeTab tabName="You Feed"
                         onTabClick={onTabClick}
                         activeTab={activeTab}
                /> : ''}
            <HomeTab tabName="Global Feed"
                     onTabClick={onTabClick}
                     activeTab={activeTab}
            />
        </div>
    )
};

HomeTabs.propTypes = propTypes;
export default HomeTabs;