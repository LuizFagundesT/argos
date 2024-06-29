function comentar() {
    const enviar = document.getElementById("btn");
    const listaComentarios = document.getElementById("comentarioS");

    function salvarComentarios() {
        const comentarios = [];
        document.querySelectorAll('.comentarioContainer').forEach(container => {
            const texto = container.querySelector('.comentario').innerHTML;
            const dataHora = container.querySelector('.dataHora').innerHTML;
            comentarios.push({ texto, dataHora });
        });
        localStorage.setItem('comentarios', JSON.stringify(comentarios));
    }

    function carregarComentarios() {
        const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
        comentarios.forEach(comentario => adicionarComentario(comentario.texto, comentario.dataHora));
    }

    function adicionarComentario(texto, dataHora = null) {
        if (texto.trim() !== "") {
            const container = document.createElement('div');
            container.classList.add("comentarioContainer");

            const novoComentario = document.createElement('li');
            novoComentario.innerHTML = texto;
            novoComentario.classList.add("comentario");

            const dataHoraElemento = document.createElement('span');
            dataHoraElemento.classList.add('dataHora');
            dataHoraElemento.style.display = 'block';
            
            if (!dataHora) {
                const dataAtual = new Date();
                const dataFormatada = dataAtual.toLocaleDateString();
                const horaFormatada = dataAtual.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                dataHora = `Comentado em: ${dataFormatada} às ${horaFormatada}`;
            }
            dataHoraElemento.innerHTML = dataHora;

            const btnER = document.createElement('button');
            btnER.innerHTML = "...";
            btnER.classList.add("btnER");

            container.appendChild(novoComentario);
            container.appendChild(dataHoraElemento);
            container.appendChild(btnER);

            listaComentarios.appendChild(container);

            document.querySelector(".texto").value = "";

            btnER.addEventListener('click', function () {
                let btnEdit = container.querySelector('.edit');
                let btnRemove = container.querySelector('.delete');

                if (!btnEdit && !btnRemove) {
                    btnEdit = document.createElement('button');
                    btnEdit.innerHTML = "Editar";
                    btnEdit.classList.add('edit');

                    btnEdit.addEventListener('click', function () {
                        const inputEdit = document.createElement('input');
                        inputEdit.style.margin = '10px';
                        inputEdit.type = 'text';
                        inputEdit.value = novoComentario.innerHTML;
                        inputEdit.classList.add('editInput');

                        const btnSave = document.createElement('button');
                        btnSave.innerHTML = "Salvar";
                        btnSave.classList.add('saveBtn');

                        container.replaceChild(inputEdit, novoComentario);
                        container.appendChild(btnSave);

                        btnSave.addEventListener('click', function () {
                            novoComentario.innerHTML = inputEdit.value;
                            container.replaceChild(novoComentario, inputEdit);
                            container.removeChild(btnSave);
                            salvarComentarios();
                        });
                    });

                    btnRemove = document.createElement('button');
                    btnRemove.innerHTML = "Remover";
                    btnRemove.classList.add('delete');

                    btnRemove.addEventListener('click', function () {
                        container.remove();
                        salvarComentarios();
                    });

                    container.appendChild(btnEdit);
                    container.appendChild(btnRemove);
                } else {
                    container.removeChild(btnEdit);
                    container.removeChild(btnRemove);
                }
            });
        }
    }

    enviar.addEventListener('click', function () {
        const texto = document.querySelector(".texto").value;
        adicionarComentario(texto);
        salvarComentarios();
    });

    carregarComentarios();
}

window.addEventListener("load", function () {
    comentar();
});
