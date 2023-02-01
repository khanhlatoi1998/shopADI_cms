
interface Props {
    label: string;
    type: string;
    multiple: any;
    className: string;
    classNameContainer: string;
    classNameLabel?: string;
    placeholder: string;
    field: any;
    form: any;
}

const InputField: React.FC<Props> = ({
    label, type, className, classNameContainer, placeholder, classNameLabel, multiple,
    field, form
}) => {

    const { values, name, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <div className="text-center">
            <div className={classNameContainer}>
                {label && <label htmlFor={name} className={classNameLabel}>{label}</label>}
                <div>
                    <input
                        {...field}
                        id={name}

                        className={className}
                        placeholder={placeholder}
                        type={type}
                        multiple={multiple}
                    />
                    <p className="text-sm text-[#ff7600] min-h-[20px] ml-4 text-left">{showError && errors[name]}</p>
                </div>
            </div>
        </div>
    );
};

export default InputField;