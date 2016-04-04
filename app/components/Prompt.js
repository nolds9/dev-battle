// TODO: refactor presenter component to communicate w/ container
var React = require('react')
var transparentBg = require("../styles").transparentBg
var PropTypes = React.PropTypes;

function Prompt (props){
  return(
    <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Github Username"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text" />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}


// //  pre functional stateless components
// var Prompt = React.createClass({
//   propTypes: {
//     header: PropTypes.string.isRequired,
//     onSubmitUser: PropTypes.func.isRequired,
//     onUpdateUser: PropTypes.func.isRequired,
//     username: PropTypes.string.isRequired
//   },
//   render: function(){
//     return (
//       <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
//         <h1>{props.header}</h1>
//         <div className="col-sm-12">
//           <form onSubmit={this.props.onSubmitUser}>
//             <div className="form-group">
//               <input
//                 className="form-control"
//                 placeholder="Github Username"
//                 onChange={this.props.onUpdateUser}
//                 value={this.props.username}
//                 type="text" />
//             </div>
//             <div className="form-group col-sm-4 col-sm-offset-4">
//               <button
//                 className="btn btn-block btn-success"
//                 type="submit">
//                 Continue
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   }
// });
module.exports = Prompt
