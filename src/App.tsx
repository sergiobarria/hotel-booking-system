import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
    Account,
    Bookings,
    Cabins,
    Dashboard,
    Login,
    PageNotFound,
    Settings,
    Users,
} from '@/pages';
import { AppLayout } from './layouts/app-layout';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route index element={<Navigate replace to="dashboard" />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="bookings" element={<Bookings />} />
                        <Route path="cabins" element={<Cabins />} />
                        <Route path="users" element={<Users />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="account" element={<Account />} />
                    </Route>

                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
