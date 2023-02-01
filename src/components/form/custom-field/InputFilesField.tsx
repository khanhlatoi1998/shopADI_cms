import { useState } from "react";
import Dropzone from "react-dropzone";

interface Props {
    label: string;
    type: string;
    multiple: any;
    accept: string;
    className: string;
    classNameContainer: string;
    classNameLabel?: string;
    placeholder: string;
    field: any;
    form: any;
}

const InputFilesField: React.FC<Props> = ({
    label, type, className, classNameContainer, placeholder, classNameLabel, multiple, accept,
    field, form
}) => {

    const { values, name, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const [listImage, setListImage] = useState<any>([]);

    const handleValuesFiles = (e: any) => {
        const listFile = Object.values(e.currentTarget.files);
        const listSrc: string[] = [];

        listFile.forEach((file: any) => {
            const src = URL.createObjectURL(file);
            listSrc.push(src);
            setListImage((e: any) => [...e, src])
        })
        form.setFieldValue(name, e.currentTarget.value);
        form.setFieldValue('AddProduct_listImage', listSrc);
    };

    return (
        <div className="text-center">
            <div className={classNameContainer}>
                {label && <label htmlFor={name} className={classNameLabel}>{label}</label>}
                <div className="">
                    <input
                        id={name}
                        {...field}
                        onChange={handleValuesFiles}

                        accept={accept}
                        className={className}
                        placeholder={placeholder}
                        type={type}
                        multiple={multiple}
                    />
                    <p className="text-sm text-[#ff7600] min-h-[20px] ml-4 text-left">{showError && errors[name]}</p>
                    <div id="containerImage_addProduct" className="max-w-[452px] pb-3 grid grid-cols-4 gap-4">
                        {
                            listImage?.map((src: any, idx: any) => {
                                // const src = URL.createObjectURL(item);
                                return (
                                    <figure className="relative" key={idx}>
                                        {/* <span className="absolute top-0 right-0 text-[13px] bg-slate-400 rounded-full w-[20px] h-[20px] flex items-center justify-center translate-x-[50%] translate-y-[-50%]"><i className="fa-solid fa-xmark"></i></span> */}
                                        <img className="h-full max-h-[100px]" src={src} alt="" />
                                    </figure>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputFilesField;