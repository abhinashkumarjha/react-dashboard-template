import React from 'react';
import { TablePagination } from 'react-pagination-table';


export default function PaginationTable(props){
  console.log(props);
  const Tabledata= props.Tabledata;
  return(
    <div>
        <TablePagination
            className="ui celled table"
            paginationClassName="ui right floated pagination menu"
            headers={ Tabledata.header }
            data={ Tabledata.data }
            columns="name.age.size.phone.gender"
            perPageItemCount={ 5 }
            totalCount={ Tabledata.data.length }
            arrayOption={ [["size", 'all', ' ']] }
        />
    </div>
  )
}
