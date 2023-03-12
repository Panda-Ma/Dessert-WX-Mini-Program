import Category from "./category";
import Detail from "./detail";
import CartBar from "./cartBar";
import CartPanel from "./cartPanel";
import {useAppSelector} from "../../store/hooks";

definePageConfig({
    navigationBarTitleText: '点单',
    usingComponents: {}

})

const Index = () => {
    const isShow = useAppSelector(state => state.cart.isBarShow)
    const num = useAppSelector(state => state.cart.num)
    return (
        <>
            <Category></Category>
            <Detail></Detail>
            <CartPanel></CartPanel>
            {isShow && (num > 0) && <CartBar></CartBar>}
        </>
    );
};

export default Index;