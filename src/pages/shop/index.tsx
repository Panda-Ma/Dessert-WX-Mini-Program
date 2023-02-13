import CustomTabBar from "../../components/custom-tab-bar";

definePageConfig({
    navigationBarTitleText: '点单'
})

const Index = () => {
    return (
        <>
            点单
            <CustomTabBar/>
        </>
    );
};

export default Index;