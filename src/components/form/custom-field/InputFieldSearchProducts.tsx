
interface Props {
    label: string;
    type: string;
    className: string;
    classNameContainer: string;
    value: string | number;
    form: any;
    field: any;
}

const InputFieldSearchProduct: React.FC<Props> = ({
    label, className, type, classNameContainer,
    form, field,
}) => {
    const {name, value, onChange, onBlur} = field;



    return (
        <div className={classNameContainer}>
            <label htmlFor="" className="min-w-[150px] text-right">{label}</label>
            <input className={className}
                {...field}
                type={type}
            />
        </div>
    );
};

export default InputFieldSearchProduct; 