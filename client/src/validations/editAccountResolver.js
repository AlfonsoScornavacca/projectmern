import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    name: yup
    .string('Name invalid')
    .required('Name is required'),
    email: yup
    .string('Email invalid')
    .required('Email is required')
    .email('Email invalid')
})
export default yupResolver(schema)