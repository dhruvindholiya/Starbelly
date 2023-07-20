import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
import { Button, Divider } from '@mui/material';
import ProductForm from '../Product/ProductForm';
import Collapse from '@mui/material/Collapse';
import DolorIcon from '@mui/icons-material/AttachMoney';

const Menu = () => {
  const handleDelete = (id) => {
    let l_products = JSON.parse(localStorage.getItem('_products'));
    let f_products = l_products.filter((v) => v.id !== id);
    localStorage.setItem('_products', JSON.stringify(f_products));
  };

  const columns = [
    { field: 'id', headerName: 'Product ID', flex: 1 },
    { field: 'name', headerName: 'Product Name', flex: 3 },
    { field: 'quantity', headerName: 'Quantity', flex: 1 },
    { field: 'catagory', headerName: 'Category', flex: 2 },
    {
      field: 'price',
      headerName: 'Price',
      flex: 1,
      renderCell: (params) => (
        <>
          <DolorIcon sx={{ fontSize: '18px !important' }} />
          {params.value}
        </>
      ),
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <>
          <IconButton aria-label="delete" type="button" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon sx={{ fontSize: '20px' }} />
          </IconButton>
          {/* <IconButton aria-label="edit" type="button">
            <EditIcon sx={{ fontSize: '20px' }} />
          </IconButton> */}
        </>
      ),
    },
  ];

  let data = JSON.parse(localStorage.getItem('_products'))

  const [formOpen, setFormOpen] = React.useState(false);

  const handleFormOpen = () => {
    setFormOpen(!formOpen);
  };

  return (
    <>
      <section className='menu_form'>
        <div className='row'>
          <div className='col-12'>
            <div className='p-4 pt-0 d-flex align-items-center justify-content-between'>
              <div className='col-auto'>
                <h4>{!formOpen ? 'PRODUCT LIST' : 'Fill OUT THIS FORM TO ADD A PRODUCT'}</h4>
              </div>
              <div className='col-auto'>
                <Button type="submit" onClick={handleFormOpen} className='yellow_btn text-capitalize' variant="contained">Add Product</Button>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <Collapse in={formOpen} timeout="auto" unmountOnExit>
              <ProductForm />
            </Collapse>
          </div>
        </div>
      </section>
      <section className="menu_list">
        <div className='part_block'>
          <h4 className='p-4'>Product list</h4>
          <Divider />
          <div className="p-4 data_table">
            {data && data.length > 0 ? (
              <DataGrid
                className="border-0"
                rows={data}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            ) : (
              <p>No data available.</p>
            )}
          </div>
        </div>
      </section>
    </>

  );
}


export default Menu