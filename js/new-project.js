// CARGA DE DATOS 📚

cargarDatosUsuarios();

cargarDatosProyectos();


// FUNCION CONSTRUCTORA DE CLASE DE OBJETO "PROJECT" /PROYECTOS:

function createProject(){

    projectCreationDate = `${dayDate} ${trueMonth} ${year}`

    let showProjectDate = document.querySelector("#projectCreationDate");
        showProjectDate.innerHTML= projectCreationDate;

    showProjectCreator = document.querySelector("#projectCreator");
    showProjectCreator.innerHTML= `${USER_CURRENT.firstName} ${USER_CURRENT.lastName}`;
    console.log(USER_CURRENT)

    function addNewRepo(e){

        e.preventDefault();

        // Se busca input value de Repo:
        let newRepo = document.querySelector("#projectRepos").value;

        // Si el input esta vacio, no ejecutar la función.
        if (newRepo == "") {
            return;
        }

        // Si el input tiene un valor, pushear ese valor a la lista de Roles:
        projectRepos.push(newRepo);

        // Seleccionar y limpiar la lista de Roles Creados:
        let createdReposList = document.getElementById("createdRepos-list");
        createdReposList.innerHTML = ``;

        // Contador para ID del repo:
        let counter = 0;

        // Por cada repo en la lista de Repos, agregar un elemento <li> al HTML.
        projectRepos.forEach(repo => {

            // Suma del Contador:
            counter++;
            
            createdReposList.innerHTML += `<li>Repo ${counter}: <a href="${repo}" target="_blank">${repo}</a></li>`;

        });

        // Limpiar el input de Repo luego de agregar:
        document.getElementById("projectRepos").value = "";


    }

    let addRepo = document.querySelector("#addRepo").addEventListener("click", (e)=> addNewRepo(e));

    function createRole (e){

        e.preventDefault();

        // Se busca value del input de Role:
        let newRole = document.querySelector("#projectRoles").value;

        // Si el input esta vacio, no ejecutar la función.
        if (newRole == "") {
            return;
        }


        // Si el input tiene un valor, pushear ese valor a la lista de Roles:
        projectRoles.push(newRole);

        // Seleccionar y limpiar la lista de Roles Creados:
        let createdRolesList = document.getElementById("createdRoles-list");
        createdRolesList.innerHTML = ``;

        // Por cada rol en la lista de Roles, agregar un elemento <li> al HTML.
        projectRoles.forEach(role => {
            
            createdRolesList.innerHTML += `<li>${role}</li>`;

        });

        // Limpiar el input de Rol luego de agregar:
        document.getElementById("projectRoles").value = "";

    }

    let addRole = document.querySelector("#addRole").addEventListener("click", (e)=>createRole(e))

    let searchList = document.querySelector("#searchList");

    function searchUsers(){

        // Seleccionar lista de busqueda:
        let searchList = document.querySelector("#searchList");

        // Limpiar lista de busqueda:
        searchList.innerHTML = ``;

        // Por cada usuario en lista de usuarios, agregar una fila con datos del usuario:
        userList.forEach(user => {

            searchList.innerHTML += `<div class="row" id= searchUserRow-${user.id}>
                                        <div class="cell">${user.nickname}</div>
                                        <div class="cell">${user.firstName} ${user.lastName}</div>
                                        <div class="cell">${user.email}</div>
                                        <button class="cell add__member--btn" id="addUser${user.id}-btn" type="submit" value="add member">Add</button>
                                    </div>`
                
        console.log(user.id)

        })
    }

    searchUsers();

    function addUsers(){

        // Seleccionar a todos los botones de Add creados con la funcion searchUsers()
        let addButton = document.querySelectorAll(".add__member--btn");

        console.log(addButton);

        // Transformar el conjunto de nodos a un array:
        let buttonsArray = Array.from(addButton);
    
        console.log(buttonsArray);

        /* Por cada boton, establecer un id con el valor del contador, el cual usa el valor posicional de dicho
        boton dentro del array sumado a 1, para que los id´s comiencen en 1 y no en 0*/
        buttonsArray.forEach(button => {

            let contador =  buttonsArray.indexOf(button) + 1;
        
            button.id = `addUser${contador}-btn`;

            // A cada boton agregar un evento cuya funcion sera agregar al usuario como miembro del proyecto.
            button.addEventListener("click", () =>{

                // Seleccionar la lista de current members.
                currentMembersTable = document.querySelector("#currentMembers-table");

                console.log(buttonsArray.indexOf(button));

                console.log("CONTADOR ES IGUAL A:" + contador);
                
                /* Se busca al usuario dentro de la lista de usuarios, comparando el valor del contador con
                el del id del propio usuario*/
                let userFound = userList.find(user => user.id == contador);
                console.log(userFound?.id|| "el usuario no existe");

                // Con los datos del usuario encontrado se establece una nueva row en la tabla de current members.
                currentMembersTable.innerHTML += `
                                        <div class="row">
                                            <div class="cell">${userFound.id}</div>
                                            <div class="cell">${userFound.nickname}</div>
                                            <div class="cell">${userFound.firstName} ${userFound.lastName}</div>
                                            <div class="cell"><select name="" id=""></select></div>
                                            <div class="cell"><button id=eraseCurrentMember-${userFound.id}><img src="./img/addMember_delete.svg" alt=""></button></div>
                                        </div>
                `

                // Se borra al usuario de la lista de search para no confundir al (usuario de la app).
                let eraseRow = document.querySelector(`#searchUserRow-${userFound.id}`);
                eraseRow.remove();



            })

        })

    }

    addUsers();

    // let showProject = document.querySelector("#showProjects");

    let submitProject = document.querySelector("#submitProject").addEventListener("click", (e)=>{

        e.preventDefault();

        projectId = projectList.length + 1;
        console.log(projectId)
    
        projectName = document.querySelector("#projectName").value;
        console.log(projectName)
    
        projectHost = document.querySelector("#projectHost").value;
        console.log(projectHost)

        projectDescr = document.querySelector("#projectDescr").value;
        console.log(projectDescr);

        projectEndDate = document.querySelector("#projectEndDate").value;
        console.log(projectEndDate);
        
        projectRoles = document.querySelector("#projectRoles").value;
        console.log(projectRoles);

        projectCreator = USER_CURRENT.firstName + " " + USER_CURRENT.lastName;
    
        projectNew = new PROJECT(projectId, projectName, projectHost, projectCreator, projectDescr, projectCreationDate, projectEndDate, projectRepos, projectRoles, projectMembers);

        console.log(projectNew);

        projectList.push(projectNew);

        alert("Project Created!");

        console.log(projectList);

        const addProject = JSON.stringify(projectList);
        localStorage.setItem("Lista de Proyectos", addProject);

        location.href= "./index.html";

    
    });

}

createProject();



    // let projectFormReset = document.querySelector("#projectReset");

    // projectFormReset.addEventListener("click", ()=>{
    //     document.querySelector("#projectForm").reset();
    // })





