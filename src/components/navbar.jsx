import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <>
              <div className="title">TODO LIST</div>
              <div className="totalCount">
                <span>totalCount: </span>
                <span>
                  {this.props.totalCount}
                </span>
              </div>
            </>
        );
    }
}

export default Navbar;