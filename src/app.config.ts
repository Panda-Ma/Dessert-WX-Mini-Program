export default defineAppConfig({
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '点心预定',
        navigationBarTextStyle: 'black',
    },
    pages: [
        'pages/shop/index',
        'pages/order/index',
        'pages/order/detail/index',
        'pages/shop/pay/index',
        'pages/shop/success/index',
        'pages/home/index',
        'pages/my/index',
        'pages/my/coupon/index',
        'pages/index/index', //测试路径
    ],
    tabBar: {
        list: [
            // {
            //     pagePath: 'pages/home/index',
            //     text: '首页',
            //     iconPath:'./assets/chef-hat.png',
            //     selectedIconPath:'./assets/chef-hat-selected.png',
            // },
            {
                text: '点单'
                , pagePath: 'pages/shop/index',
                iconPath:'./assets/restaurant-alt2.png',
                selectedIconPath:'./assets/restaurant-alt2-selected.png',
            },
            {
                pagePath: 'pages/order/index',
                text: '订单',
                iconPath:'./assets/clipboard-check.png',
                selectedIconPath:'./assets/clipboard-check-selected.png',
            },
            {
                text: '我的'
                , pagePath: 'pages/my/index'
                ,iconPath: './assets/user.png'
                ,selectedIconPath: './assets/user-selected.png'
            }
        ],
        // custom: true,
        color:'#8a8a8a',
        selectedColor:'#221f20',
    },
    usingComponents:{}
})
