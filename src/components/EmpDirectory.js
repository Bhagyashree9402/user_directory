import React, { useState} from 'react';
import axios from "axios";

const EmpDirectory = () => {
    const [form, setEmpName] = useState({ empName: ""});

    const setEmp= (e) => {
        setEmpName({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    };

    const employees = () => {
        
        axios
        .get(`https://randomuser.me/api/?results=200&nat=us`)
        .then((res) => {
            console.log("Here inside employees");
            console.log (res.data);
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    };

    
    const [employee, setEmployees] = useState({ employeetab: employees});
    const setEmpTable= (e) => {
        console.log("Employyee");
        setEmployees({ ...employee, [e.target.name]: e.target.value });
        console.log(employees);
    };
    
    return (
        <div>
        <header className="jumbotron text-center">
            <h1>Employee Directory</h1>

        </header>
        <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="searchName">Search Employee</label>
            <input
              onChange={setEmp}
              type="name"
              name="name"
              id="searchName1"
            />
          </div>
         
          <button type="search" className="btn btn-primary">
            Search
          </button>
        </form>
        <table className="table">
        <thead>
        <tr>
            <th scope="col">Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
        </thead>
    </table>
    </div>
     
    </div>
  );
};

export default EmpDirectory
