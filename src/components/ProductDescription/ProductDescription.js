export default function ProductDescription({ name, price, sku, categoryName, tags, description, specs }) {
    
    
   

    return (
        <div>
            <p><label>Name: {name}</label></p>
            <p><label>Price: {price}</label></p>
            <p><label>SKU: {sku}</label></p>
            <p><label>Category: {categoryName}</label></p>
            <p><label>Tags: {tags.map((tag, id) => { return (<label key={id}>{tag} </label>) })}</label></p>
            <p><label>Description: <br /> {description}</label></p>
            <div>Qty: <input type={'number'}  />  <button >Add to cart</button></div>
            <div><p>Specs:</p>
                <ul>
                    {specs.map((spec, index) => { return (<li key={index}>{spec.spec_name}: {spec.spec_value}</li>) })}
                </ul>
            </div>
        </div>


    )



}