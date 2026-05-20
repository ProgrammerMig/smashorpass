// Declarando os elementos HTML
let input_pass = document.getElementById("passes");
let input_char = document.getElementById("char_left");
let char_photo = document.getElementById("char");
let char_txt = document.getElementById("char_name");
let final_veredict = document.getElementById("veredito-final");

// Contagem
let total_passes = 0
let total_smashes = 0

// Passes utilizáveis
let passes = 5;

// Personagens restantes
let tot_chars = 15;
// indices utilizados para carregar as imagens e outras informações.
let chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// auto explicativo
let char_names = [
    "Peter Grifin (Family Guy)", // 0, 1
    "ENA (ENA: Dream BBQ)", // 1, 2
    "Monika (Doki Doki Literature Club)", // 2, 3
    "John Marston (Red Dead Redemption)", // 3, 4
    "Finn (Hora de Aventura)", // 4, 5
    "Homer Simpson (Os Simpsons)", // 5, 6
    "Froggy (ENA: Dream BBQ)", // 6, 7
    "Dove (Rift of the NecroDancer)", // 7, 8
    "Cosmo (Os Padrinhos Mágicos)", // 8, 9
    "Capitão Cueca (As Épicas Aventuras do Capitão Cueca)", // 9, 10
    "Princesa Jujuba (Hora de Aventura)",
    "Shrek (Shrek)",
    "Granny (Granny)",
    "Vaporeon (Pokémon)",
    "Vovózona (Vovózona)"
]

let max = 15
let min = 1

game("")

function game(action){
    // Verifica se o jogo acabou.
    if(tot_chars <= 0){
        // Finaliza o jogo.
        char_photo.src = `assets/done.png`
        input_pass.innerHTML = `<span class="title-3">Congratulações!</span>`
        input_char.innerHTML = `<span id='smash-txt'>SMASH</span> or <span id='pass-txt'>PASS</span> finalizado!`

        char_txt.innerHTML = `<span class="mini-title">Foram <span id="smash-txt">${total_smashes} SMASHES</span> e <span id="pass-txt">${total_passes} PASSES</span> no total..</span>`
        if(total_passes <= 2){
            final_veredict.innerHTML= `<span id="color1">Talvez você goste da maioria dos personagens da lista...</span>`
        } else if(total_passes <= 4){
            final_veredict.innerHTML= `<span id="color2">Você tem bom gosto, apenas isso, parabéns.</span>`
        } else if(total_passes === 5){
            final_veredict.innerHTML= `<span id="color3">Você pensa sabiamente antes de agir. Parabéns.</span>`
        } else {
            final_veredict.innerHTML= `<span id="color4">Precoce final boss:</span>`
        }
        
    } else {
        // Pega o personagem aleatório
        let index = Math.floor(Math.random() * (max - min) + min);

        // Atualiza as informações de Passes e de Personagens restantes.
        input_pass.innerHTML = `Passes disponíveis: ${passes}`
        input_char.innerHTML = `Personagens restantes: ${tot_chars}`

        // Verifica se o usuário está sem passes através do parâmetro "action"
        // Também faz que o jogo sempre começe com um personagem randomizado.
        if (action === "pass" || action === "smash" || action === ""){
            // Mostra visualmente para o usuário qual personagem é.
            
            char_photo.src = `assets/${chars[index-1]}.png`
            char_txt.innerText = char_names[index-1]
            
            // Deleta o personagem de ambas as listas para eliminar repetições.
            char_names.splice(index-1, 1)
            chars.splice(index-1,1)

            max -= 1
        } else {

        }
    }
}

function smash(){
    if(tot_chars <= 0){

    } else {
    total_smashes++
    tot_chars -= 1;
    return game("smash")
    }

}

function pass(){
    if(tot_chars <= 0){

    }
    else if(passes > 0){
        total_passes++
        passes -= 1;
        tot_chars -= 1;
        return game("pass")
    } else if (passes == 0){
        alert("Sem passes disponíveis!")
        return game("error: no passes available")
    }
}