import React, { Component } from 'react';

//functional component
// const SearchBar = () => {
//   return <input />;
// };

// class SearchBar extends React.Component { //plain javascript object
//  render() {
//    return <input />;
//  }
// }

// class SearchBar extends Component { //plain javascript object
//  render() {
//    //return <input onChange={this.onInputChange} />;
//    return <input onChange={(event) => console.log(event.target.value)} />;
//  }
//
//  onInputChange(event){
//    console.log(event.target.value);
//  }
// }

//functional components do not have state only class based ones have state.
//constructor is the first one that gets called whenever a new instance of class is created
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''}
  }

  render() {
   return (
     <div className="search-bar">
     <input
       value = {this.state.term}
       onChange={(event) => this.onInputChange(event.target.value)} />
     </div>
   );
 }

 onInputChange(term){
   this.setState({term});
   this.props.onSearchTermChange(term);
 }
}

export default SearchBar;
