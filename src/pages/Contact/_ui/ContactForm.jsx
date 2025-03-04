
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

import {
    FormWrap,
    FormRow,
    FormError,
    FormInputField as Input,
    FormTextAreaField as TextArea,
} from "components/Form"
import Button from "components/Button"


const ContactForm = ({
    callbackLoader,
}) => {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('This field is required'),
        email: Yup.string().required('This field is required'),
        contact: Yup.string().required('This field is required'),
        message: Yup.string().required('This field is required'),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    useEffect(() => {
        reset();
    }, []);

    /**
     * @func: (react-hook-form) submit
     */
    const onSubmit = (fields) => {
        console.log(...fields);
    }

    return (
        <FormWrap
            extraClass="snuggle-contact__form"
            onSubmit={handleSubmit(onSubmit)}
        >
            
            <FormRow label="Name">
                <Input
                    {...register('name')}
                    extraClass={errors.name ? 'is--invalid' : ''}
                />
                {errors.name?.message && <FormError errorMessage={errors.name?.message} />}
            </FormRow>

            <FormRow label="Contact No." extraClass="contact">
                <Input
                    {...register('contact')}
                    extraClass={errors.contact ? 'is--invalid' : ''}
                />
                {errors.contact?.message && <FormError errorMessage={errors.contact?.message} />}
            </FormRow>

            <FormRow label="E-mail" extraClass="email">
                <Input
                    {...register('email')}
                    type="email"
                    extraClass={errors.email ? 'is--invalid' : ''}
                />
                {errors.email?.message && <FormError errorMessage={errors.email?.message} />}
            </FormRow>

            <FormRow label="Message">
                <TextArea
                    {...register('message')}
                    extraClass={errors.message ? 'is--invalid' : ''}
                />
                {errors.message?.message && <FormError errorMessage={errors.message?.message} />}
            </FormRow>

            <Button
                btnLbl="Submit"
                extraClass="as--link xl"
            />

        </FormWrap>
    )
}

export default ContactForm;