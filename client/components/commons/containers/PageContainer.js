import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
class PageContainer extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state={
        theme:"indigo-shamrock",
      };

  }
  render() {
      return (
          <div className={this.state.theme}>
              <div>
                  {this.props.children}
              </div>
          </div>
      );
  }
}
PageContainer.propTypes={
  children:PropTypes.object,
  dispatch:PropTypes.func,
  params:PropTypes.object,
};
export default PageContainer;
