//import the type from the specific file in types folder
import type { Product } from "../../types/products";
import { IconArrowNarrowRight } from '@tabler/icons'

export interface ProductProps {
    products: Product[];
}

//create the ui in the function so can be passed to other pages / modules
export function ProductList({ products }: ProductProps) {
    return (
        <>
        <div className="relative mt-4 mb-2 font-bold text-teal-900">
            Products
            <div className="font-normal text-sm text-right absolute top-0 right-0 w-24">
                View All <IconArrowNarrowRight className="inline-block relative top-[-1px]"/>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
            { products.map((product) => 
                <div key={ product.id } className="shadow shadow-gray-200 border rounded border-gray-200 bg-white">
                    <div className="h-44 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${product.image})`}}>
                        
                    </div>
                    <div className="p-2.5">
                        <div className="text-xs h-[34px] line-clamp">
                            { product.name }
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="text-sm font-bold text-teal-900 my-0.5">
                                RM { product.retail_price }
                            </div>
                            <div className="text-[11px] text-teal-700 mt-0">
                                <label>MP : </label> RM { product.member_price }
                            </div>
                            <div className="text-[11px] text-orange-600 mt-0">
                                <label>PV : </label> { product.member_price }
                            </div>
                            {/* <p className="text-sm text-gray-800 mt-0">
                                <label className="font-semibold">Stock:</label>&nbsp; { product.stock }
                            </p> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}

export default ProductList;