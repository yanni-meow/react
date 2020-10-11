// import React from 'react';

// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//     this.changePlayer = this.changePlayer.bind(this);
//   }

//   changePlayer() {
//     const { isX, changeItem } = this.props;

//     this.setState({ value: isX ? 'X' : 'O' });
//     changeItem();
//   }

//   render() {
//     const { value } = this.state;
//     return (
//       <button
//         className="square"
//         onClick={this.changePlayer}
//       >
//         {value}
//       </button>
//     );
//   }
// }

// export default Square;
