import api from './axiosinterceptor.js'

const signup = async () => {
    let req = {
        email: "test01@test.com",
        password: "qwer1234"
    }

    const res = await api.post('/user_signup.json', req);

    return res.data;
}

const emailVerify = async () => {
    let req = {
        code: 983734,
        email: "test01@test.com"
    }

    const res = await api.get('/user_email_verify.json', { params: req });

    return res.data
}

export { signup, emailVerify };


