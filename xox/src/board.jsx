// import React from 'react';
// import Square from './square';

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isX: true,
//     };
//     this.changeItem = this.changeItem.bind(this);
//   }

//   changeItem() {
//     const { isX } = this.state;
//     this.setState({ isX: !isX });
//   }

//   renderSquare(i) {
//     const { isX } = this.state;
//     return <Square isX={isX} changeItem={this.changeItem} />;
//   }

//   render() {
//     const { isX } = this.state;
//     const status = `Next player: ${isX ? 'X' : 'O'}`;

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// export default Board;
