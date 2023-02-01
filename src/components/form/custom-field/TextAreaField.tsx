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


const TextAreaField: React.FC<Props> = ({
    className, classNameContainer, label, placeholder, options,
    field, form
}) => {
    const { name, value, onChange, onBlur } = field;

    return (
        <div className={classNameContainer}>
            <label htmlFor="" className="min-w-[150px] text-right">{label}</label>
            <textarea className={className}
                id={name}
                name={name}
                {...field}
            >
            </textarea>
        </div>
    );
};

export default TextAreaField;