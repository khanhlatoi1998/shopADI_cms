import { NavLink } from "react-router-dom";
import SearchProducts from "../../components/form/search/SearchProducts";


interface Props {

};


const ProductsTemplate: React.FC<Props> = ({

}) => {
    return (
        <section className="">
            <div className="flex items-center justify-between">
                <p className="text-size-7">Products</p>
                <div className="text-white flex gap-1">
                    <NavLink to="/admin/products/create" className="px-3 rounded py-1 bg-color_02">
                        <span>
                            <i className="fas fa-plus-square"></i>
                        </span>
                        <span className="ml-2">Add new</span>
                    </NavLink>
                    <NavLink to="/admin/products/create" className="px-3 rounded py-1 bg-[#218838]">
                        <span>
                            <i className="fa-solid fa-download"></i>
                        </span>
                        <span className="ml-2">Export</span>
                    </NavLink>
                    <NavLink to="/admin/products/create" className="px-3 rounded py-1 bg-[#3d9970]">
                        <span>
                            <i className="fa-solid fa-upload"></i>
                        </span>
                        <span className="ml-2">Import</span>
                    </NavLink>
                    <NavLink to="/admin/products/create" className="px-3 rounded py-1 bg-[#DD4B39]">
                        <span>
                            <i className="fa-solid fa-trash-can"></i>
                        </span>
                        <span className="ml-2">Delete(selected)</span>
                    </NavLink>
                </div>
            </div>
            <SearchProducts />
        </section>
    );
};

export default ProductsTemplate;