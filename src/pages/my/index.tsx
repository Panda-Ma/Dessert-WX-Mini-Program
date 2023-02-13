import CustomTabBar from "../../components/custom-tab-bar";

definePageConfig({
    navigationBarTitleText: '我的'
})

const Index = () => {
    return (
        <div>
            我的
            <CustomTabBar/>
        </div>
    );
};

export default Index;