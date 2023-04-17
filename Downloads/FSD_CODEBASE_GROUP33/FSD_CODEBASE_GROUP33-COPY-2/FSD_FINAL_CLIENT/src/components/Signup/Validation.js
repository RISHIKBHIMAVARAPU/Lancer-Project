
import validator from 'validator'
function Validation(values) {
    let errors={}
    if(!values.fullname){
        errors.fullname="name is required"
    }

    if (!values.email){
        errors.email="email is required"
    }
    else if (!validator.isEmail(values.email)){
        errors.email="enter valid email address"
    }

    if(!values.password){
        errors.password="password is required"
    }
    else if (values.password.length<8){
        errors.password='password must be more than 8 characters'
    }
    // else if (!validator.isStrongPassword(values.password,{minLength:8})){
    //     errors.password='password must be more than 8 characters'
    // }

   
     if (!values.confirm_password){
        errors.confirm_password="enter the confirm password"
    }
    // else if (values.password==values.confirm_password){
    //     errors.confirm_password="confirm password is not matched"
    // }
    else if (values.password.localeCompare(values.confirm_password)!=0){
        errors.confirm_password="confirm password is not matched"
    }

  return errors;
}

export default Validation

// before running this we need to install 'npm install validator'