import CustomTabBar from "../../components/custom-tab-bar";

definePageConfig({
    navigationBarTitleText: '订单'
})

const Index = () => {
    return (
        <>
            订单
            <CustomTabBar/>
        </>
    );
};

export default Index;