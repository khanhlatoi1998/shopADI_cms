import { useState } from "react";

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

interface ColorType {
    hex: string;
    active: boolean;
    name: string;
}

const InputFieldColor: React.FC<Props> = ({
    label, type, className, classNameContainer, placeholder, classNameLabel, multiple,
    field, form
}) => {

    const { values, name, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const [stateListColor, setStateListColor] = useState<any[]>([]);

    const addColor = (e: any) => {
        const listColor = [...stateListColor];
        const color = {
            hex: e.currentTarget.value,
            name: e.currentTarget.value,
            active: false
        };

        listColor.push(color);
        setStateListColor((e: any) => [...e, color]);

        form.setFieldValue(name, listColor[0].hex);
        listColor[0].active = true;
        form.setFieldValue('color_group', listColor);

    };

    return (
        <div className="text-center">
            <div className={classNameContainer}>
                {label && <label htmlFor={name} className={classNameLabel}>{label}</label>}
                <div>
                    <input
                        {...field}
                        id={name}
                        // onChange={addColor}
                        onBlur={addColor}

                        className={className}
                        placeholder={placeholder}
                        type={type}
                        multiple={multiple}
                    />
                    <p className="text-sm text-[#ff7600] min-h-[20px] ml-4 text-left">{showError && errors[name]}</p>
                    <ul className="max-w-[452px] pb-3 flex gap-3">
                        {
                            stateListColor?.map((color: any, idx: any) => {
                                return (
                                    <li key={idx} style={{ backgroundColor: color.hex }} className={`w-[40px] h-[40px]`}></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InputFieldColor;