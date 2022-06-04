// layout

import { HeaderOnly } from '~/components/Layout';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Không cần đăng nhập vẫn xem đc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/Search', component: Search, layout: null },
];
// Đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
