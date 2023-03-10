import Select from "react-select";
import { PRICE_OPTIONS } from "../../../common/select";

interface Props {
    label: string;
    placeholder: string;
    className: string;
    classNameContainer: string;
    options: any;
    type?: string;
    field: any;
    form: any;
}


const SelectFieldSearchProducts: React.FC<Props> = ({
    className, classNameContainer, label, placeholder, options,
    field, form
}) => {
    const { name, value, onChange, onBlur } = field;
    const {errors, touched} = form;

    const showError = errors[name] && touched[name];
    
    let selectedOption = options.find((option: any) => option.value === value);
    const handlSelectedOptionChange = (selectedOption: any) => {
        const selectValue = selectedOption ? selectedOption.value : selectedOption;
        form.setFieldValue(name, selectValue);
    };

    return (
        <div className={classNameContainer}>
            <label htmlFor={name} className="min-w-[150px] text-right">{label}</label>
            <div className="flex-1">
                <Select className={className}
                    id={name}
                    name={name}
                    {...field}
                    onChange={handlSelectedOptionChange}

                    value={selectedOption}
                    placeholder={placeholder}
                    options={options}
                >
                </Select>
                <p className="text-sm text-[#ff7600] min-h-[20px] ml-4 text-left">{showError && errors[name]}</p>
            </div>
        </div>
    );
};

export default SelectFieldSearchProducts;