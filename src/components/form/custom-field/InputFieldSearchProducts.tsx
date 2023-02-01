
interface Props {
    label: string;
    type: string;
    multiple: any;
    className: string;
    classNameContainer: string;
    value: string | number;
    form: any;
    field: any;
}

const InputFieldSearchProduct: React.FC<Props> = ({
    label, className, type, classNameContainer, multiple,
    form, field,
}) => {
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];


    return (
        <div className={classNameContainer}>
            <label htmlFor="" className="min-w-[150px] text-right">{label}</label>
            <div className="flex-1">
                <input className={className}
                    {...field}
                    type={type}
                    multiple
                />
                <p className="text-sm text-[#ff7600] min-h-[20px]">{showError && errors[name]}</p>
            </div>
        </div>
    );
};

export default InputFieldSearchProduct; 