import React from 'react';
import AdminLayout from '../AdminLayout';
import ProductTable from './makineTable';
const MakinesMain = ({products}) => {
    return (
       
        <AdminLayout>


<ProductTable products={products}/>


        </AdminLayout>
    );
}


export default MakinesMain;
