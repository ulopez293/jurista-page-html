
const TEXTOS = [
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
    {
        texto: `
        El Derecho Mercantil es el Derecho Privado especial que tiene por objeto al empresario, al estatuto jurídico de ese empresario y a la peculiar actividad que éste desarrolla en el mercado. Regula los actos de comercio con independencia de que se realicen o no por comerciantes y de que los sujetos sean o no comerciales en sentido económico.
        `,
    },
]

function desplegarModal(e) {
    if (e.target.nodeName != 'H6') return
    let idPosition = parseInt(e.target.getAttribute('id')) - 1
    let myModal = new bootstrap.Modal(document.getElementById("myModal"), {})
    document.getElementById('myModalTitle').textContent = e.target.textContent
    document.getElementById('myModalBody').textContent = TEXTOS[idPosition].texto
    myModal.show()
}

document.getElementById('contenidoPracticas').addEventListener('click', desplegarModal)