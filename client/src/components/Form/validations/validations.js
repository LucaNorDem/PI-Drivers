

const validations = (inputs) =>{

    const errors = {};

    if(!inputs.name){
        errors.name = "Name field can't be empty."
    }
    if(!inputs.lastname){
        errors.lastname = "Lastname field can't be empty."
    }
    if(!inputs.nationality){
        errors.nationality = "Nationality field can't be empty."
    }
    if(!inputs.birthday){
        errors.birthday = "Birthday field can't be empty."
    }

    return errors;

}


export default validations;