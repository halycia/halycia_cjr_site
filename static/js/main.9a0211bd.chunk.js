(this.webpackJsonphalycia_cjr=this.webpackJsonphalycia_cjr||[]).push([[0],{17:function(e,a,t){e.exports=t(27)},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),r=t(10),o=t.n(r),c=(t(25),t(26),t(7)),l=t(15),m=t(14),s=t(3),d=t.n(s),u=t(6),g=t.n(u);const _=t(11).a.button`

    background-color: var(--realRed);
    appearance: none;
    border: 2px solid #ff6464e2;
    border-radius: 2px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: var(--fontFamilyButton);
    font-size: 1rem;
    font-weight: 600;
    line-height: normal;
    margin: 1rem;
    min-height: 3.75rem;
    min-width: 20%;
    max-width: 50%;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
    will-change: transform;

    &:disabled {
        pointer-events: none;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
        transform: translateY(-2px);
        background-color: red;
    }

    &:active {
        box-shadow: none;
        transform: translateY(0);
    }
`;function p(e){let{label:a,onClick:t}=e;return i.a.createElement(_,{onClick:t},a)}function E(e){let{onPerguntar:a}=e;const[t,r]=Object(n.useState)(""),[o,c]=Object(n.useState)("");return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{className:g.a.minigame},"Minigame"),i.a.createElement("img",{className:g.a.imgFoca,src:"./assets/foca/sorridente-personagem-foca-da-groenl\xe2ndia.png",alt:"foca-sorridente"}),i.a.createElement("p",null,"Pergunte \xe0 foca o que ela prefere"),i.a.createElement("input",{className:g.a.input,type:"text",placeholder:"Primeira op\xe7\xe3o",value:t,onChange:e=>r(e.target.value)}),i.a.createElement("p",null,"ou"),i.a.createElement("input",{className:g.a.input,type:"text",placeholder:"Segunda op\xe7\xe3o",value:o,onChange:e=>c(e.target.value)}),i.a.createElement(p,{label:"Perguntar",onClick:function(){if(t&&o){const e=Math.floor(11*Math.random())%2===0?t:o;console.log(t,o,e),a(e)}else alert("A foca diz: Por favor, preencha ambas as op\xe7\xf5es!"),console.log(t,o)}}))}var f=t(5),h=t.n(f);function v(e){let{escolha:a,onPerguntarNovamente:t}=e;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{className:h.a.minigame},"Minigame"),i.a.createElement("div",{className:h.a.card},i.a.createElement("p",{className:h.a.cardText},"A foca escolheu"),i.a.createElement("h2",{className:h.a.cardValue},a||"Nenhuma escolha processada. Pergunte novamente."),i.a.createElement("img",{className:h.a.imgFoca,src:"./assets/foca/sorridente-personagem-foca-da-groenl\xe2ndia.png",alt:"foca-sorridente"})),i.a.createElement(p,{label:"Perguntar Novamente",onClick:t}))}var b=()=>{const[e,a]=Object(n.useState)("inicio"),[t,r]=Object(n.useState)("");return i.a.createElement("div",{className:d.a.gridContainer},i.a.createElement("div",{id:"item1",className:d.a.item1},i.a.createElement("h2",{className:d.a.nameText},"Halycia de Oliveira Fonseca")),i.a.createElement("div",{id:"item2",className:d.a.item2},i.a.createElement("div",{className:d.a.divImgFlowerVector},i.a.createElement("img",{className:d.a.imgFlowerVector,src:"./assets/FlowerVector.png",alt:""})),i.a.createElement("div",{className:d.a.divProfession},i.a.createElement("p",{className:d.a.profession},"Estudante de Ci\xeancias da Computa\xe7\xe3o"))),i.a.createElement("div",{id:"item3",className:d.a.item3},i.a.createElement("img",{className:d.a.imgHaly,src:"./assets/img_haly.jpg",alt:"Foto de Perfil Haly"})),i.a.createElement("div",{id:"item4",className:d.a.item4},"inicio"===e?i.a.createElement(E,{onPerguntar:e=>{r(e),a("final")}}):i.a.createElement(v,{escolha:t,onPerguntarNovamente:()=>{r(""),a("inicio")}})),i.a.createElement("div",{id:"item5",className:d.a.item5},i.a.createElement("img",{className:d.a.imgCircleVector,src:"./assets/CIRCLE ICON.png",alt:""}),i.a.createElement("p",{className:d.a.textAbout},"Halycia \xe9 uma estudante de ci\xeancias da computa\xe7\xe3o no quarto semestre na universidade de bras\xedlia. \xe9 formada em an\xe1lise e desenvolvimento de sistemas pelo uniceub e gosta de cachorrinhos.")),i.a.createElement("div",{id:"item6",className:d.a.item6},i.a.createElement("div",{className:d.a.pergunta},i.a.createElement("p",null,"Tem alguma pergunta?"),i.a.createElement("a",{href:"https://wa.me/5561984728431",target:"_blank"},i.a.createElement(m.a,{size:"2.5em",className:d.a.icon}))),i.a.createElement("h2",null,"Entre em contato"),i.a.createElement("div",{className:d.a.icons},i.a.createElement("a",{href:"https://www.instagram.com/halyciaoliveira/profilecard/?igsh=Z21la3BqMjJzeGls",target:"_blank"},i.a.createElement(c.a,{size:"3em",className:d.a.icon})),i.a.createElement("a",{href:"https://github.com/halycia",target:"_blank"},i.a.createElement(l.a,{size:"3em",className:d.a.icon})),i.a.createElement("a",{href:"https://www.linkedin.com/in/halycia-de-oliveira-fonseca-111513278",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(c.b,{size:"3em",className:d.a.icon})))))};var N=function(){return i.a.createElement(b,null)};o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)))},3:function(e,a,t){e.exports={gridContainer:"Introduction_gridContainer__2ObPW",item1:"Introduction_item1__18org",nameText:"Introduction_nameText__2lpmG",item2:"Introduction_item2__2zZXa",divImgFlowerVector:"Introduction_divImgFlowerVector__2IPQi",imgFlowerVector:"Introduction_imgFlowerVector__3UNu_",rotate:"Introduction_rotate__3EVVt",divProfession:"Introduction_divProfession__2a12i",profession:"Introduction_profession__3rYuI",item3:"Introduction_item3__38Jg5",imgHaly:"Introduction_imgHaly__J2TJu",item4:"Introduction_item4__3tLg_",item5:"Introduction_item5__11Yke",imgCircleVector:"Introduction_imgCircleVector__ReiGX",textAbout:"Introduction_textAbout__1BrqP",item6:"Introduction_item6__3LcdZ",pergunta:"Introduction_pergunta__oiddp",icons:"Introduction_icons__9omIj",icon:"Introduction_icon__3K6Bi"}},5:function(e,a,t){e.exports={minigame:"MinigameFinal_minigame__3cshS",card:"MinigameFinal_card__3E8c3",cardText:"MinigameFinal_cardText__3Sqb5",cardValue:"MinigameFinal_cardValue__2aCO-",imgFoca:"MinigameFinal_imgFoca__3e6ds"}},6:function(e,a,t){e.exports={minigame:"MinigameInicio_minigame__2km3E",imgFoca:"MinigameInicio_imgFoca__Nqk4A",input:"MinigameInicio_input__2mnYn",button:"MinigameInicio_button__2fTUE"}}},[[17,1,2]]]);
//# sourceMappingURL=main.9a0211bd.chunk.js.map