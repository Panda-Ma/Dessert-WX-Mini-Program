import Category from "./category";
import Detail from "./detail";
import Cart from "./cart";

definePageConfig({
    navigationBarTitleText: '点单',
    usingComponents: {}

})

const Index = () => {
    return (
        <>
            <Category></Category>
            <Detail></Detail>
            <Cart></Cart>
        </>
    );
};

export default Index;