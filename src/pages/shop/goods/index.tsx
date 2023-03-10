import {Avatar, Button, Ellipsis, Price} from "@nutui/nutui-react-taro";
import {useAppDispatch} from "../../../store/hooks";
import {initInfo, open} from "../../../store/containers/popupSlice";

type Props = {
    name: string,
    img: string,
    intro: string,
    price: number
}
const Index: React.FunctionComponent<Props> = (props) => {
    const dispatch = useAppDispatch()
    const showPopup = () => {
        dispatch(initInfo(props))
        dispatch(open())
        console.log('点击')
    }
    return (
        <>
            <div style={{display: 'flex', marginBottom: '30px'}} onClick={showPopup}>
                <div style={{marginRight: '5px', height: '90px'}}>
                    <Avatar url={props.img} shape={'square'} size={'large'}
                            style={{height: '90px', width: '90px'}}></Avatar>
                </div>
                <div style={{
                    height: '90px',
                    flex: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column"
                }}>
                    <h3 style={{fontWeight: 'bolder'}}>{props.name}</h3>
                    <div style={{fontSize: '10px', color: '#ccc', overflow: "hidden"}}>
                        <Ellipsis content={props.intro} rows={2}></Ellipsis>
                    </div>
                    <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
                        <Price price={props.price} size={'normal'} needSymbol decimalDigits={1}
                               style={{color: "black", fontWeight: 'bolder', fontSize: '10px'}}></Price>
                        <Button color={'green'} size={'small'}>选择</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;