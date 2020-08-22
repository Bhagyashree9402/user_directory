import React from 'react'

const Search = (props) => {
    return (
        
            <div className="container">
                <h5 className="text">Employee Search</h5>
                <form>
                    <div className="input-group">
                        <input
                            onChange={props.empSearch}
                            type="text"
                            className="form-control"
                            placeholder="Enter Employee Name" />
                    </div>
                </form>
            </div>
            
    )
}

export default Search
