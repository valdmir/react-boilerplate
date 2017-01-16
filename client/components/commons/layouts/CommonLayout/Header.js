import React from 'react';
const _styles=require('./_header.scss');
class Header extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={
      teamStatus:0,
      teamList:[{
          "_id":"tasdfasdf",
          "name":"Personal Environment"
        },{
          "_id":"tasdfasdf",
          "name":"Team A"
        },
        {
          "_id":"tasdfasdf",
          "name":"Team B"
        },
      ],
      modalAdd:false
    };
  }
  render(){
    let {teamList,teamStatus}=this.state;
    return(

      <nav className={"navbar bg-header"}>

      </nav>
    );
  }
}
export default Header;
