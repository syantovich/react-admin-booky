const passReg = new RegExp(".*");
const password = () => (value: string) =>{
    console.log(passReg.test(value) ? undefined : {message: 'myroot.validation.minLength', args: {min: 11}});
    return passReg.test(value) ? undefined : {message: 'myroot.validation.minLength', args: {min: 11}}
}


export default password;