const getEmail = document.querySelector('#email')
const getPassword = document.querySelector('#password')
const getDisplay = document.querySelector('#msg')
const getSubmit = document.querySelector('#submit')
const getInfo = document.querySelector('#info')
const table = document.querySelector('#table')
const headTbl = document.querySelector('#headTbl')
getSubmit.addEventListener('click',(e) => {
    e.preventDefault()

    let getUser = [
        {
        name: 'Paul Javinez',
        age: 23,
        hobby: 'Sleep'
        },
        {
        name: 'althea Javinez',
        age: 7,
        hobby: 'Sleep'
        }
    ]
    
    let headers = ['Name','Age','Hobby'] 

    getDisplay.innerHTML = `${getEmail.value} | ${getPassword.value}`

    const data = () => {
    let string = ''
        let getObj = Object.keys(getUser)
        for (let i in getObj){
            setTimeout(()=>{
                let { name,age, hobby} = getUser[i]
                getInfo.innerHTML = string += 
                'Name: '+  name + '<br>' +
                'Age: '+  age + '<br>' +
                'Hobby: '+  hobby + '<br><br>'
            },2000)
            
        }
        return string
    }
    data();

    let tbl = document.createElement('table')
    let tr = document.createElement('tr')
    headers.forEach(headerTbl =>{
        let textNode = document.createTextNode(headerTbl)
        let th = document.createElement('th')
        th.appendChild(textNode)
        tr.appendChild(th)
        th.style = 'border: 1px solid black'
    })

    tbl.appendChild(tr)
    table.appendChild(tbl)   
    
    getUser.forEach(valUser =>{
        let tr = document.createElement('tr') 
        for (let k in Object.values(valUser)){
        let textNode = document.createTextNode(Object.values(valUser)[k])
        let td = document.createElement('td')
            td.appendChild(textNode)
            tr.appendChild(td)
            td.style = 'border: 1px solid black'
        }
        tbl.appendChild(tr)
        table.appendChild(tbl)    
    })
    
    const headerTable = (viewTable,viewData) =>{
        let thead = viewTable.createTHead()
        let row = thead.insertRow()

        for(let key of viewData){
            let th = document.createElement('th')
            let txtNode = document.createTextNode(key)
            th.appendChild(txtNode)
            row.appendChild(th)
        }
    }

    const newTbl = (viewTable,viewData) =>{
        for(let element of viewData){
            let row = viewTable.insertRow()
            for(let key in element){
                let cell = row.insertCell()
                let txtNode = document.createTextNode(element[key])
                cell.appendChild(txtNode)
            }
        }
    }

    let viewTable = document.querySelector('#headTbl')
    let viewData = Object.keys(getUser[0])
    headerTable(viewTable,viewData)
    newTbl(viewTable,getUser)

    
    const ax = () =>{
      const result = axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'get'

        })
      return result
    }

ax().then((success) => {
console.log(success.data);
}).catch((errData) => {
    console.log(errData);
});

}) // end addEventListener



