import './Product.css';

function Product(props) {

    //.....FIRST WAY IF IMAGE NOT FOUND.....\\
    // function Product(img='11.png) {   


    
    console.log(props);

    // ---------------FIRST WAY---------------
    //     return(
    //     <div>
    //         <h2>Product Card</h2>
    //         <div className='Card'>
    //             <img src={props.img} alt='jh'/>
    //             <h1>{props.title}</h1>
    //             <p className='Price'>${props.price}</p>
    //             <p>{props.description}</p>
    //             <p><button>Add to Card</button></p>
    //         </div>
    //     </div>
    // )





    // ---------------Second WAY---------------
    // return (props.count &&
    //     <div>
    //         <h2>Product Card</h2>
    //         <div className='Card'>
    //             <img src={props.img} alt='jh' />
    //             <h1>{props.title}</h1>
    //             <p className='Price'>${props.price}</p>
    //             <p>{props.description}</p>
    //             <p><button>Add to Card</button></p>
    //         </div>
    //     </div>
    // )




    // ---------------Third WAY---------------
    // const { name, img, price, description, count } = props; //You Can write it in the Product(img,price,...) in the start of the function
    // return (
    //     count &&
    //     <div>
    //         <h2>Product Card</h2>
    //         <div className='Card'>
    //             <img src={img} alt='jh' />
    //             <h1>{name}</h1>
    //             <p className='Price'>${price}</p>
    //             <p>{description}</p>
    //             <p><button>Add to Card</button></p>
    //         </div>
    //     </div>
    // )




    return (
        <div>
            <h2>Product Card</h2>
            <div className='Card'>
                <img src={props.img} alt='jh' />
                <h1>{props.name}</h1>
                <p className='Price'>${props.price}</p>
                <p>{props.description}</p>
                <p><button>Add to Card</button></p>
            </div>
        </div>
    )
}

export default Product;



//.....FIRST WAY IF IMAGE NOT FOUND.....\\
Product.defaultProps = {
    img: '11.png'
}