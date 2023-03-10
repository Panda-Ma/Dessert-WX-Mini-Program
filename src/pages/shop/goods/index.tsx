import {Avatar, Button, Ellipsis, Price} from "@nutui/nutui-react-taro";
// import {getCount} from "../../../request/api/test";
import Detail from "../detail";
import {useRef} from "react";

type Props = {
    name: string,
    img: string,
    intro: string,
    price: number
}
const Index: React.FunctionComponent<Props> = (props) => {
    const popupRef = useRef()
    const showPopup = () => {
        // @ts-ignore
        popupRef.current.setShowPopup(true)
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
                        <Ellipsis content={props.intro} rows={1}></Ellipsis>
                    </div>
                    <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
                        <Price price={props.price} size={'normal'} needSymbol decimalDigits={1}
                               style={{color: "black", fontWeight: 'bolder', fontSize: '10px'}}></Price>
                        <Button color={'green'} size={'small'} >选择</Button>
                    </div>
                </div>
            </div>
            <Detail name={props.name} img={props.img} intro={props.intro} price={props.price} ref={popupRef}></Detail>
        </>
    );
};

export default Index;