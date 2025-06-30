import api from './axiosinterceptor.js'

const getAxios = async () => {
    const response = await api.get('/product_list.json');

    document.getElementById("text").innerText = response.data.results[0].name;
}


//signup 예시
const signup = async () => {
    let data = {
        email: "test01@test.com",
        password: "qwer1234"
    }
    const response = await api.post('/product-list.json', data);
    console.log(response);
    // document.getElementById("text").innerText = response.data.results[0].name;
}


//재고관리 - 예측 생산일 수정 - 요청>응답 받은거 처리
const inventory_modify_date = async () => {
    let request_data = {
        id: 50001,
        date: "2025-07-03"
    }

    const response = await api.post('/inventory-test.json', request_data);
    // console.log(response);


    for (let i = 0; i < response.data.length; i++) {
        console.log("response.data[i].data.inventory.id = " + response.data[i].data.inventory.id);

        let divTag = document.createElement("div");
        divTag.textContent = response.data[i].data.inventory.crop_type;

        let p = document.getElementById("text");
        p.appendChild(divTag);
    }
}

const invetory_modify_count = async () => {

}

export { getAxios, signup, inventory_modify_date }