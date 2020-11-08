var contatos = localStorage.getItem("contatos")
contatos = JSON.parse(contatos)
if(contatos == null){
    contatos = []
}

var contatinho = {}

function preencherTabela(){
    for(var i in contatos) {
        var contato = JSON.parse(contatos[i])
        addContatoATabela(contato)
    }
}

function addContatoALista(){
    let nome = document.getElementById("nome").value
    let tel = document.getElementById("tel").value
    let email = document.getElementById("email").value

    contatinho = {
        nome: nome,
        tel: tel,
        email: email
    }

    contatos.push(JSON.stringify(contatinho))
    localStorage.setItem("contatos", JSON.stringify(contatos))
    addContatoATabela(contatinho)
}

function addContatoATabela(contatinho){
    let tr = document.createElement("tr")
    let tdNome = document.createElement("td")
    let tdTel = document.createElement("td")
    let tdEmail = document.createElement("td")

    tdNome.append(contatinho.nome)
    tdTel.append(contatinho.tel)
    tdEmail.append(contatinho.email)

    tr.appendChild(tdNome)
    tr.appendChild(tdTel)
    tr.appendChild(tdEmail)

    document.getElementById("contatos").append(tr)
}
