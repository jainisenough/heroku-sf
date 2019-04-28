import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-sec margin-60 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img src="images/logo.png" alt="" align="" className="img-fluid logo-image" />
            </div>
            <div className="col-md-7 button-centrar">
              <h4>CONSUMER GOODS INDUSTRY SOLUTIONS</h4>
              <button className="btn">COMPARE</button>
            </div>
            <div className="col-md-3">
              <div className="color-cantrol">
                <ul>
                  <li className="position-relative"><p className="red">Sed metus leo</p></li>
                  <li className="position-relative"><p className="red blue">Sed metus leo</p></li>
                  <li className="position-relative"><p className="red green">Sed metus leo</p></li>
                </ul>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
};
