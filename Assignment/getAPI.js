class getAPI {

    constructor(){
        this.url = "https://60c8ed887dafc90017ffbd56.mockapi.io/robots"
    }

    async getData(){
        const responseApi = await fetch(this.url); //waiting promise coming from fetch data
        const apiData = await responseApi.json(); //getting json inside of response
        return apiData;
    }
}