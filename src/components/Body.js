import React from 'react';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentCategory: [],
      childCategory: [],
      selectedParent: false
    };

    //fetch()
  }
  render() {
    return (
      <>
        <div className="publish-sec">
          <div className="container">
            <div className="row">
              {
                this.state.parentCategory.map(name => {
                  return (
                    <div key={name._id} className="col-md-2">
                      <div className="media" onMouseOver={() => this.setState({ selectedParent: name._id })} onMouseOut={() => this.setState({ selectedParent: false })}>
                        <button>
                          <img src="./images/user.png" align="" alt="" className="img-fluid" />
                        </button>
                        <div className="media-body pl-3">
                          <p className="mb-0">{name.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
              < div className="clearfix"></div>
            </div>
          </div>
        </div>

        <div className="main-table-sec mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pl-0 pr-0">
                <a href="#demo" className="text-white" data-toggle="collapse">Simple collapsible</a>
                <div id="demo" className="collapse show">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="pl-3">
                        {this.state.childCategory.slice(0, 6).map(name => {
                          return <li className={(name.parentId === this.state.selectedParent && 'hover-class')} key={name._id}><button className={(name.status === 0 ? 'red-new' : name.status === 2 ? 'blue-new' : '')}>{name.title}</button></li>;
                        })}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="pl-3">
                        {this.state.childCategory.slice(6).map(name => {
                          return <li className={(name.parentId === this.state.selectedParent && 'hover-class')} key={name._id}><button className={(name.status === 0 ? 'red-new' : name.status === 2 ? 'blue-new' : '')}>{name.title}</button></li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pl-0 pr-0">
                <a href="#demo" className="text-white" data-toggle="collapse">Simple collapsible</a>
                <div id="demo" className="collapse show">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="pl-3">
                        {this.state.childCategory.slice(0, 6).map(name => {
                          return <li className={(name.parentId === this.state.selectedParent && 'hover-class')} key={name._id}><button className={(name.status === 0 ? 'red-new' : name.status === 2 ? 'blue-new' : '')}>{name.title}</button></li>;
                        })}
                      </ul>
                    </div>
                    <div className="col-md-6 pl-0">
                      <ul className="pl-3">
                        {this.state.childCategory.slice(6).map(name => {
                          return <li className={(name.parentId === this.state.selectedParent && 'hover-class')} key={name._id}><button className={(name.status === 0 ? 'red-new' : name.status === 2 ? 'blue-new' : '')}>{name.title}</button></li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pl-0 pr-0">
                <a href="#demo" className="text-white" data-toggle="collapse">Simple collapsible <i className="fa fa-caret-down float-right" aria-hidden="true"></i></a>
                <div id="demo" className="collapse show">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="pl-3">
                        {this.state.childCategory.slice(0, 6).map(name => {
                          return <li className={(name.parentId === this.state.selectedParent && 'hover-class')} key={name._id}><button className={(name.status === 0 ? 'red-new' : name.status === 2 ? 'blue-new' : '')}>{name.title}</button></li>;
                        })}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="pl-3">
                        {this.state.childCategory.slice(6).map(name => {
                          return <li className={(name.parentId === this.state.selectedParent && 'hover-class')} key={name._id}><button className={(name.status === 0 ? 'red-new' : name.status === 2 ? 'blue-new' : '')}>{name.title}</button></li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>

        <div className="main-table-sec mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-12 pl-0 pr-0">
                <a href="#demos" className="text-white" data-toggle="collapse">Simple collapsible <i className="fa fa-question-circle ml-2" aria-hidden="true"></i> <i className="fa fa-caret-down float-right" aria-hidden="true"></i></a>
                <div id="demos" className="collapse show bg-white">
                  <table className="table table-bordered bootstrap-table">
                    <thead>
                      <tr>
                        {this.state.childCategory.slice(0, 5).map((name, idx) => {
                          return <th key={name._id} scope="col" {...(idx === 2 && { colSpan: "2" })}><p>{name.title}</p></th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {this.state.childCategory.slice(6).map(name => {
                          return <th key={name._id} scope="col"><p>{name.title}</p></th>;
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>

        <div className="container">
          <button className="text-right d-inline-block float-right last-btn mb-5 mt-5">ADMIN</button>
        </div>
      </>
    )
  }
  componentDidMount() {
    this.setState({
      parentCategory: [{
        _id: '1',
        title: 'Lorem Ipsum Dolor Aet'
      }, {
        _id: '2',
        title: 'Lorem Ipsum Dolor Aet'
      }, {
        _id: '3',
        title: 'Lorem Ipsum Dolor Aet'
      }, {
        _id: '4',
        title: 'Lorem Ipsum Dolor Aet'
      }, {
        _id: '5',
        title: 'Lorem Ipsum Dolor Aet'
      }, {
        _id: '6',
        title: 'Lorem Ipsum Dolor Aet'
      }]
    });
    this.setState({
      childCategory: [{
        _id: '1',
        title: 'Proin hendreit',
        parentId: '1',
        status: 1
      }, {
        _id: '2',
        title: 'Turpis Nec',
        parentId: '3',
        status: 1
      }, {
        _id: '3',
        title: 'Ni Tincidunt',
        parentId: '6',
        status: 2
      }, {
        _id: '4',
        title: 'Ultricies Nibh',
        parentId: '4',
        status: 1
      }, {
        _id: '5',
        title: 'Vestibulum',
        parentId: '2',
        status: 1
      }, {
        _id: '6',
        title: 'Viamus',
        parentId: '5',
        status: 1
      }, {
        _id: '7',
        title: 'Proin hendreit',
        parentId: '3',
        status: 1
      }, {
        _id: '8',
        title: 'Turpis Nec',
        parentId: '4',
        status: 0
      }, {
        _id: '9',
        title: 'Ni Tincidunt',
        parentId: '5',
        status: 1
      }, {
        _id: '10',
        title: 'Ultricies Nibh',
        parentId: '6',
        status: 1
      }, {
        _id: '11',
        title: 'Vestibulum',
        parentId: '2',
        status: 1
      }, {
        _id: '12',
        title: 'Viamus',
        parentId: '1',
        status: 1
      }]
    });
  }
};
