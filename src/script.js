function contador(){
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var resultado = document.getElementById('resultado');
    var progress = document.getElementById('progresso');
    resultado.style.display = 'block';
    resultado.style.textAlign = 'center';
    resultado.style.marginTop = '10px';

    if (inicio.value.length == 0){
        resultado.innerHTML = `Não é possível iniciar o contador sem o número de início`;
    } else if (fim.value.length == 0) {
        resultado.innerHTML = `Não é possível iniciar o contador sem o número final`;
    } else if (passo.value.length == 0) {
        resultado.innerHTML = `Não é possível iniciar o contado sem o número de passo`;
    } else {
        resultado.innerHTML = ` `;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        
        if (p == 0) {
            alert("Passo não pode ser 0, então será calculado com valor 1!");
            p = 1;
        }
        progress.style.display = 'block';
        intervalo = setTimeout(function(){
            if (i < f) {
                progress.style.display = 'none';
                for (var cont = i; cont <= f; cont += p) {
                    resultado.innerHTML += ` ${cont} 👉🏽`;
                }
            } else {
                progress.style.display = 'none';
                for (var cont = i; cont >= f; cont -= p){
                    resultado.innerHTML += ` ${cont} 👉🏽`;
                }
            }    
            resultado.innerHTML += ` 🏁`;
        }, 5000);
    }
}

function iniciar() {
    var progress = document.getElementById('progresso');
    var resultado = document.getElementById('resultado');
    
    progress.style.display = 'none';
    resultado.style.display = 'none';
}

iniciar();