import SelectGoods from "./selectGoods";

definePageConfig({
    navigationBarTitleText: '点单',
    usingComponents:{}

})

const Index = () => {
    return (
        <>
            点单
            <SelectGoods></SelectGoods>
z        </>
    );
};

export default Index;