
import React from 'react'
import Table from '../components/table2'

const data = [
    {
      id: 1,
      firstColumn: 'image1.jpg',
      column2: 'image2.jpg',
      column3: 'image3.jpg',
      // Add more data here
    },
    // Add more data objects
  ];
  
  const columns = [
    {
      Header: 'First Column',
      accessor: 'firstColumn',
    },
    {
      Header: 'Column 2',
      accessor: 'column2',
    },
    {
      Header: 'Column 3',
      accessor: 'column3',
    },
    // Add more columns here
  ];
  
  const Showtable = () => {
    return (
      <div>
        <h1>Scrollable Table</h1>
        <Table data={data} columns={columns} />
      </div>
    );
  };
  
  export default Showtable;