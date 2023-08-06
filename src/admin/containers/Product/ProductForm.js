import React, { useEffect } from 'react';
import { Button, Divider, TextField } from '@mui/material';
import * as Yup from "yup";
import { useFormik } from "formik";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Switch from '@mui/material/Switch';

function ProductForm({ handleAddData, updateData, setFormOpen, setUpdateData }) {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleResetForm = () => {
        formik.resetForm();
        setSelectedImage(null);
        setFormOpen(false);
        setUpdateData(null);
    }

    const validation = Yup.object({
        name: Yup.string().min(2).required('Product name is a required field'),
        price: Yup.number().min(1).required('Product Price is a required field'),
        quantity: Yup.number().min(1).required('Quantity is a required field'),
        catagory: Yup.string().required('Catagory is a required field'),
        cuisine: Yup.string().required('Cuisine is a required field'),
        image: Yup.string().required('Product image is a required field'),
        desc: Yup.string().required('Description is a required field')
            .test("message", "Enter Maximum 100 Word", function (value) {
                let descWords = value.split(" ");
                if (descWords.length > 100) {
                    return false;
                } else {
                    return true;
                }
            }),
    });

    const formik = useFormik({
        initialValues: { name: "", price: "", quantity: "", cuisine: "", catagory: "", desc: "", image: "", discount: false },
        validationSchema: validation,
        onSubmit: (values) => {
            const parsedValues = {
                ...values,
                price: parseFloat(values.price),
                quantity: parseInt(values.quantity)
            };
            handleAddData(parsedValues);
            handleResetForm();
            setUpdateData(null)
        },
    });
    useEffect(() => {
        if (updateData) {
            formik.setValues(updateData);
        }
    }, [updateData])
    const { handleBlur, handleChange, handleSubmit, touched, errors, values } = formik;

    return (
        <form className='mb-4' onSubmit={handleSubmit}>
            <div className='row gx-4'>
                <div className='col-7'>
                    <div className='part_block'>
                        <h4 className='p-4'>Add product details</h4>
                        <Divider />
                        <div className='row p-4 g-3'>
                            <div className="col-12 mb-3 form_field position-relative">
                                <TextField className='m-0' id="name" label="Name" type="text" fullWidth name='name' variant="outlined" size='small'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                {errors.name && touched.name ? (
                                    <span className="d-block position-absolute form-error">{errors.name}</span>
                                ) : null}
                            </div>
                            <div className="col-6 mb-3 form_field position-relative">
                                <FormControl fullWidth>
                                    <InputLabel size='small' id="demo-simple-select-label">Catagory</InputLabel>
                                    <Select
                                        variant='outlined' size='small' labelId="demo-simple-select-label" id="demo-simple-select" label="Catagory" name='catagory'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.catagory}>
                                        <MenuItem value={'Starters'}>Starters</MenuItem>
                                        <MenuItem value={'Main dishes'}>Main dishes</MenuItem>
                                        <MenuItem value={'Drinks'}>Drinks</MenuItem>
                                        <MenuItem value={'Dessert'}>Dessert</MenuItem>
                                    </Select>
                                </FormControl>
                                {errors.catagory && touched.catagory ? (
                                    <span className="d-block position-absolute form-error">{errors.catagory}</span>
                                ) : null}
                            </div>
                            <div className="col-6 mb-3 form_field position-relative">
                                <FormControl fullWidth>
                                    <InputLabel size='small' id="demo-simple-select-label">Cuisine</InputLabel>
                                    <Select
                                        variant='outlined' size='small' labelId="demo-simple-select-label" id="demo-simple-select" label="Cuisine" name='cuisine'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cuisine}>
                                        <MenuItem value={'Gujrati'}>Gujrati</MenuItem>
                                        <MenuItem value={'India'}>Indian</MenuItem>
                                        <MenuItem value={'Mexican'}>Mexican</MenuItem>
                                        <MenuItem value={'Italia'}>Italia</MenuItem>
                                        <MenuItem value={'Chinese'}>Chinese</MenuItem>
                                        <MenuItem value={'French'}>French</MenuItem>
                                        <MenuItem value={'Thai'}>Thai</MenuItem>
                                        <MenuItem value={'South indian'}>South indian</MenuItem>
                                        <MenuItem value={'Punjabi'}>Punjabi</MenuItem>
                                    </Select>
                                </FormControl>
                                {errors.cuisine && touched.cuisine ? (
                                    <span className="d-block position-absolute form-error">{errors.cuisine}</span>
                                ) : null}
                            </div>
                            <div className="col-6 mb-3 form_field position-relative">
                                <TextField className='m-0' size='small' id="price" label="Price" type="text" fullWidth name='price' variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price}
                                />
                                {errors.price && touched.price ? (
                                    <span className="d-block position-absolute form-error">{errors.price}</span>
                                ) : null}
                            </div>
                            <div className="col-6 mb-3 form_field position-relative">
                                <TextField className='m-0' size='small' id="quantity" label="Quantity" type="text" fullWidth name='quantity' variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.quantity}
                                />
                                {errors.quantity && touched.quantity ? (
                                    <span className="d-block position-absolute form-error">{errors.quantity}</span>
                                ) : null}
                            </div>
                            <div className="col-12 mb-3 form_field position-relative">
                                <TextField className='m-0' size='small' id="Desc" label="Description" type="text" fullWidth multiline rows={4} name='desc' variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.desc}
                                />
                                {errors.desc && touched.desc ? (
                                    <span className="d-block position-absolute form-error">{errors.desc}</span>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='part_block'>
                        <h4 className='p-4'>Add other product details</h4>
                        <Divider />
                        <div className="form_field position-relative p-4" >
                            <div id='productImage'>
                                <Button component="label" variant='outlined' className='text-capitalize'>Upload product image<UploadFileIcon />
                                    <input accept="image/*" id="image" type="file" name='image' style={{ display: 'none' }}
                                        onChange={(event) => { handleImageChange(event); handleChange(event); }}
                                    />
                                </Button>
                                {selectedImage && (<img src={selectedImage} alt="Selected" />)}
                            </div>
                            {errors.image && touched.image ? (
                                <span className="d-block position-absolute form-error">{errors.image}</span>
                            ) : null}
                        </div>
                        <Divider />
                        <div id='discountActive' className='p-4 py-2 d-flex justify-content-between align-items-center'>
                            <label>Discount Active (20%)</label>
                            <Switch id='discount' name='discount' value={values.discount} onChange={handleChange} size='large' />
                        </div>
                        <Divider />
                        <div className='p-4 d-flex justify-content-between align-items-center'>
                            <Button type="button" className='yellow_btn_text text-capitalize' variant='contained' onClick={handleResetForm}>Cancel</Button>
                            <Button type="submit" className='yellow_btn text-capitalize' variant="contained">Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ProductForm;





