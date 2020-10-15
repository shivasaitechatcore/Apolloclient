import React from 'react';
import{gql} from '@apollo/client'
import {useMutation} from '@apollo/client'
const PostQuerys=gql`
{
  employeeList{
    id, name,email
  }
}`;
const CreateEmployee = gql`
  mutation createEmployee($code:String!) {
    createEmployee( code: $String) { 
      code
    }
  }
`;

function App() {
  
  let input;
  const [createEmployee,{data}] = useMutation(CreateEmployee);
  return (
    <>
    <form
          onSubmit={e => {
            e.preventDefault();
            createEmployee({ variables: { code: input.value } });
            input.value = '';
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
    {/* <h1>hi shiva</h1>
    {data.employeeList.map((employee,id)=>(
      <p key={id}>{employee.name} and {employee.email}</p>
    ))} */}
    </>
  );
}

export default App;
// import { gql, useMutation} from '@apollo/client';

// // const PostQuerys=gql`
// //     { 
// //        employeeList{
// //      id, name,email
// //    }
// //  }`;
// const CreateEmployee = gql`
//   mutation createEmployee($code:String!) {
//     createEmployee( code: $String) { 
//       code
//     }
//   }
// `;

// function App() {
//     let input;
//     const [createEmployee] = useMutation(CreateEmployee);
  
//     return (
//       <div>
//         <form
//           onSubmit={e => {
//             e.preventDefault();
//             createEmployee({ variables: { code: input.value } });
//             input.value = '';
//           }}
//         >
//           <input
//             ref={node => {
//               input = node;
//             }}
//           />
//           <button type="submit">Add Todo</button>
//         </form>
//       </div>
//     );
//   }export default App;
