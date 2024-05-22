

const validations = (inputs) =>{

    const errors = {};

    if(!inputs.name){
        errors.name = "Name filed can't be empty."
    }
    if(!inputs.lastname){
        errors.lastname = "Lastname filed can't be empty."
    }
    if(!inputs.nationality){
        errors.nationality = "Nationality filed can't be empty."
    }
    if(!inputs.birthday){
        errors.birthday = "Birthday filed can't be empty."
    }

    return errors;

}


export default validations;