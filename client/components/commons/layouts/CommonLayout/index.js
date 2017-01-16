import React,{PropTypes} from 'react';
import Header from './Header';
import Footer from './Footer';

class CommonLayout extends React.Component{
  constructor(props, context) {
      super(props, context);
  }
  render(){
    return(
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
CommonLayout.propTypes={
  children:PropTypes.object
};
export default CommonLayout;
