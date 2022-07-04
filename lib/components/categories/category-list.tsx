import type { Category } from "../../types/categories";

export interface CategoryProps {
    categories: Category[];
}

export function CategoryList({ categories }: CategoryProps) {
    return (
        <div className="category pt-6 pb-4 flex max-w-full overflow-x-auto">
            { categories.map((category) => 
                <div key={ category.id } className="text-center pr-8">
                    <div className="flex items-center justify-center border rounded m-auto w-14 h-14 bg-contain bg-norepeat bg-center bg-white">
                        <img className="w-8 h-8" src={ category.image }></img>
                    </div>
                    <div className="text-[10px] mt-2 uppercase">
                        { category.name }
                    </div>
                </div>
            )}
        </div>
    );
}

export default CategoryList;