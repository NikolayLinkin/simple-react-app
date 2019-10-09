import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    onTabClick: PropTypes.func.isRequired,
    tabName: PropTypes.string.isRequired,
    activeTab: PropTypes.string,
};

const HomeTab = ({onTabClick, tabName, activeTab}) => {
    return (
        <span className={activeTab === tabName ? 'catalog__tab catalog__tab--active' : 'catalog__tab'}
              onClick={() => onTabClick(tabName)}>
            {tabName}
        </span>
    )
};

HomeTab.propTypes = propTypes;
export default HomeTab;