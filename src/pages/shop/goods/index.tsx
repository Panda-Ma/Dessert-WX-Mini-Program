import {Avatar, Ellipsis} from "@nutui/nutui-react-taro";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {initInfo, openDetail} from "../../../store/containers/detailSlice";
import {closeBar} from "../../../store/containers/cartSlice";

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
        dispatch(openDetail())
        dispatch(closeBar())
    }

    return (
        <>
            <div style={{display: 'flex', marginBottom: '30px'}} onClick={showPopup}>
                <div style={{marginRight: '5px', height: '90px', borderRadius: '10px', overflow: 'hidden'}}>
                    <Avatar url={props.img} shape={'square'} size={'large'}
                            style={{height: '90px', width: '90px', borderRadius: '10px'}}></Avatar>
                </div>
                <div style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column"
                }}>
                    <h3 style={{fontWeight: 'bolder'}}>{props.name}</h3>
                    <div style={{fontSize: '10px', color: '#ccc', overflow: "hidden", height: '30px'}}>
                        <Ellipsis content={props.intro} rows={2}></Ellipsis>
                    </div>
                    <div style={{display: "flex", justifyContent: 'space-between', marginTop: '13px',alignItems:"center"}}>
                        <div style={{fontSize: '16px',fontWeight:'bold'}}>¥{props.price.toFixed(1)}</div>
                        <div style={{position: 'relative'}}>
                            <div style={{
                                background: '#d5ba7c',
                                borderRadius: '5px',
                                fontSize: '11px',
                                padding: '3px 7px',
                                color: "white"
                            }}>选择
                            </div>
                            {
                                cart.map(item => {
                                    if (item.id == props.id) {
                                        return (
                                            <div style={{
                                                position: 'absolute',
                                                top: '-10px',
                                                right: '-3px',
                                                border: '1px',
                                                borderStyle: 'solid',
                                                borderRadius: '50%',
                                                borderColor: '#d5ba7c',
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