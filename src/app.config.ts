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
            },
            {
                text: '点单'
                , pagePath: 'pages/shop/index'
            },
            {
                pagePath: 'pages/order/index',
                text: '订单',
            },
            {
                text: '我的'
                , pagePath: 'pages/my/index'
            }
        ],
        custom: true
    },
})
