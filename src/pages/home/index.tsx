import CustomTabBar from "../../components/custom-tab-bar";
definePageConfig({
    navigationBarTitleText: '首页',
})
const Index = () => {
    return (
        <div>
            home
            <CustomTabBar/>
        </div>
    );
};

export default Index;