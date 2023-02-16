import {Avatar, Button, Ellipsis, Price} from "@nutui/nutui-react-taro";

type Props = {
    name: string,
    img: string,
    intro: string,
    price: number
}
const Index: React.FunctionComponent<Props> = (props) => {
    return (
        <>
            <div style={{display: 'flex',marginBottom:'30px'}}>
                <div style={{borderRadius: '10px', marginRight: '5px', height: '70px'}}>
                    <Avatar url={props.img} shape={'square'} size={'large'}
                            style={{height: '90px', width: '90px'}}></Avatar>
                </div>
                <div>
                    <h3 style={{fontWeight: 'bolder'}}>{props.name}</h3>
                    <div style={{fontSize: '10px', color: '#ccc'}}>
                        <Ellipsis content={props.intro} rows={2}></Ellipsis>
                    </div>
                    <div style={{display:"flex",justifyContent:'space-between',alignItems:'center',marginTop:'5px'}}>
                        <Price price={props.price} size={'normal'} needSymbol decimalDigits={1}
                               style={{color: "black", fontWeight: 'bolder',fontSize:'10px'}}></Price>
                        <Button color={'green'} size={'small'} >选择</Button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Index;