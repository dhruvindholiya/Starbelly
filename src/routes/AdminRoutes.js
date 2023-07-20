import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../admin/components/Layout';
import Dashboard from '../admin/containers/Dashboard';
import Product from '../admin/containers/Product/Product';

function AdminRoutes() {
    return (
        <Layout>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </Layout>
    );
}

export default AdminRoutes;