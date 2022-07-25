export default function ProductDescription({ name, price, sku, categoryName, tags, description, specs }) {
    
    
   

    return (
        <div>
            <p><label><b>Name: </b>{name}</label></p>
            <p><label><b>Price:</b> {price}</label></p>
            <p><label><b>SKU:</b> {sku}</label></p>
            <p><label><b>Category:</b> {categoryName}</label></p>
            <p><label><b>Tags:</b> {tags.map((tag, id) => { return (<label key={id}>{tag} </label>) })}</label></p>
            <p><label><b>Description:</b> <br /><br /> {description}</label></p>
            <div><b>Qty:</b> <input type={'number'}  />  <button >Add to cart</button></div>
            <div><p><b>Specs:</b></p>
                <ul>
                    {specs.map((spec, index) => { return (<li key={index}><b>{spec.spec_name}</b>: {spec.spec_value}</li>) })}
                </ul>
            </div>
        </div>


    )



}