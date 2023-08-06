import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Divider } from '@mui/material';
import ProductForm from '../Product/ProductForm';
import Collapse from '@mui/material/Collapse';
import DolorIcon from '@mui/icons-material/AttachMoney';
import { useDispatch, useSelector } from 'react-redux';
import { addProductData, getProductData, removeProductData, updateProductData } from '../../../user/redux/action/Product.action';
import CircularProgress from '@mui/material/CircularProgress';

const Product = () => {
  const [updateData, setUpdateData] = useState(null);
  const dispatch = useDispatch();
  const productVal = useSelector((state) => state.products);
  console.log(productVal.products);

  useEffect(() => {
    dispatch(getProductData());
  }, [])

  const handleAddData = (data) => {
    if (updateData) {
      dispatch(updateProductData(data))
    } else {
      dispatch(addProductData(data));
    }
  }
  const handleDelete = (id) => {
    dispatch(removeProductData(id));
  }
  const handleUpdate = (data) => {
    setUpdateData(data)
    setFormOpen(true)
  }

  const columns = [
    { field: 'name', headerName: 'Product Name', flex: 3, cellClassName: 'px-4', headerClassName: 'px-4' },
    { field: 'catagory', headerName: 'Category', flex: 2, cellClassName: 'px-4', headerClassName: 'px-4' },
    { field: 'quantity', headerName: 'Quantity', flex: 1, cellClassName: 'px-4', headerClassName: 'px-4' },
    {
      field: 'price',
      headerName: 'Price',
      flex: 1,
      cellClassName: 'px-4',
      headerClassName: 'px-4',
      renderCell: (params) => (
        <>
          <DolorIcon sx={{ fontSize: '18px !important' }} />
          {params.value}
        </>
      ),
    },
    { field: 'cuisine', headerName: 'Cuisine', flex: 1, cellClassName: 'px-4', headerClassName: 'px-4' },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      cellClassName: 'px-4',
      headerClassName: 'px-4',
      renderCell: (params) => (
        <>
          <IconButton aria-label="delete" type="button" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon sx={{ fontSize: '20px' }} />
          </IconButton>
          <IconButton aria-label="edit" type="button">
            <EditIcon sx={{ fontSize: '20px' }} onClick={() => handleUpdate(params.row)} />
          </IconButton>
        </>
      ),
    },
  ];

  const [formOpen, setFormOpen] = React.useState(false);

  const handleFormOpen = () => {
    setFormOpen(!formOpen);
  };

  return (
    <>
      {
        productVal.loading ?
          <div style={{height: 'calc(100vh - 64px'}} className='d-flex align-items-center justify-content-center'>
            <CircularProgress />
          </div> :
          productVal.error ?
            <h2>{productVal.error}</h2> :
            <>
              <section className='menu_form'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='p-4 d-flex align-items-center justify-content-between'>
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
                      <ProductForm handleAddData={handleAddData}
                        updateData={updateData}
                        setUpdateData={setUpdateData}
                        setFormOpen={setFormOpen} />
                    </Collapse>
                  </div>
                </div>
              </section>
              <section className="menu_list">
                <div className='part_block'>
                  {!formOpen ? null :
                    <>
                      <h4 className='p-4'>Product list</h4>
                      <Divider />
                    </>
                  }
                  <div className="data_table">
                    <DataGrid
                      rows={productVal.products}
                      columns={columns}
                      initialState={{
                        pagination: {
                          paginationModel: { page: 0, pageSize: 5 },
                        },
                      }}
                      pageSizeOptions={[5, 10]}
                      checkboxSelection
                    />
                    {/* <h1>Hello</h1> */}
                  </div>
                </div>
              </section>
            </>
      }
    </>

  );
}


export default Product



