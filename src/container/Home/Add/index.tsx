import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";
import { ReactComponentElement, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import useStyles from "../style";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";

function AddTask(props: { handleAddTask: any; }) {
  const { handleAddTask } = props;
  
  return (
    <Box display="flex" alignItems="center">
      <AddBoxIcon onClick={handleAddTask} />
      <p>Add New Task</p>

      {/* <input type="text" onChange={(e) => setTask(e.target.value)} /> */}
    </Box>
  );
}

export default AddTask;


// export default class PersonList extends React.Component {
//   state = {
//     name: '',
//   }

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name
//     };

//     axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <Button type="submit" >Add</Button>
//         </form>
//       </div>
//     )
//   }
// }
