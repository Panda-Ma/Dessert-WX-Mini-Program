import {Avatar, Button, Ellipsis, Price} from "@nutui/nutui-react-taro";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {initInfo, open} from "../../../store/containers/popupSlice";

type Props = {
    id: number,
    name: string,
    img: string,
    intro: string,
    price: number
}
const Index: React.FunctionComponent<Props> = (props) => {
    const dispatch = useAppDispatch()
    const cart = useAppSelector(state => state.cart.goods)
    const showPopup = () => {
        dispatch(initInfo(props))// 将商品信息添加到redux
        dispatch(open())
    }

    return (
        <>
            <div style={{display: 'flex', marginBottom: '30px'}} onClick={showPopup}>
                <div style={{marginRight: '5px', height: '90px', borderRadius: '10px', overflow: 'hidden'}}>
                    <Avatar url={props.img} shape={'square'} size={'large'}
                            style={{height: '90px', width: '90px'}}></Avatar>
                </div>
                <div style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column"
                }}>
                    <h3 style={{fontWeight: 'bolder'}}>{props.name}</h3>
                    <div style={{fontSize: '10px', color: '#ccc', overflow: "hidden"}}>
                        <Ellipsis content={props.intro} rows={2}></Ellipsis>
                    </div>
                    <div style={{display: "flex", justifyContent: 'space-between',marginTop:'13px'}}>
                        <Price price={props.price} size={'normal'} needSymbol decimalDigits={1}
                               style={{color: "black", fontWeight: 'bolder', fontSize: '10px'}}></Price>
                        <div style={{position: 'relative'}}>
                            <Button color={'green'} size={'small'}>选择</Button>
                            {
                                cart.map(item => {
                                    if (item.id == props.id) {
                                        return (
                                            <div style={{
                                                position: 'absolute',
                                                top: '-6px',
                                                right: '0px',
                                                border: '3',
                                                borderRadius: '50%',
                                                borderColor: 'green',
                                                width: '13px',
                                                height: '13px',
                                                background: '#fff',
                                                color: '#000',
                                                fontSize: '10px',
                                                lineHeight: '13px',
                                                fontWeight: 'bold',
                                                textAlign: 'center'
                                            }}>
                                                {item.num}
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;