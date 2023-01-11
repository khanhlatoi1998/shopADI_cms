
interface Props {
    label: string;
    type: string;
    className: string;
    classNameContainer: string;
    placeholder: string;
    field: any;
    form: any;
}

const InputField: React.FC<Props> = ({
    label, type, className, classNameContainer, placeholder,
    field, form
}) => {

    const { values, name, onChange, onBlur } = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];

    return (
        <div className={classNameContainer}>
            {/* <label htmlFor={name}>{label}</label> */}
            <input
                {...field}
                id={name}

                className={className}
                placeholder={placeholder}
                type={type}
            />
            <p className="text-sm text-[#ff7600] min-h-[20px]">{showError && errors[name]}</p>
        </div>
    );
};

export default InputField;