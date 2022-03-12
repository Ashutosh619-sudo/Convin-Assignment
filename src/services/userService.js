export async function getUsersAPI(){
    var res = await fetch("https://reqres.in/api/users?page=2")
    var data = await res.json()
    console.log(data["data"])

    return data["data"]
}

export async function getSingleUser(id){
    var res = await fetch(`https://reqres.in/api/users/${id}`)
    var data = await res.json()

    return data["data"]
}


