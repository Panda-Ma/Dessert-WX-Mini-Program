export default defineAppConfig({
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '点心预定',
        navigationBarTextStyle: 'black',
    },
    pages: [
        'pages/home/index',
        'pages/index/index',
        'pages/order/index',
        'pages/my/index',
        'pages/shop/index',
    ],
    tabBar: {
        list: [
            {
                pagePath: 'pages/home/index',
                text: '首页',
                iconPath:'./assets/home.png',
                selectedIconPath:'./assets/home.png',
            },
            {
                text: '点单'
                , pagePath: 'pages/shop/index',
                iconPath:'./assets/shop.png',
                selectedIconPath:'./assets/shop.png',
            },
            {
                pagePath: 'pages/order/index',
                text: '订单',
                iconPath:'./assets/order.png',
                selectedIconPath:'./assets/order.png',
            },
            {
                text: '我的'
                , pagePath: 'pages/my/index'
                ,iconPath: './assets/my.png'
                ,selectedIconPath: './assets/my.png'
            }
        ],
        // custom: true,
    },
    usingComponents:{}
})
