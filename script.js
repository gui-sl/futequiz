function result() {

    var score=0
    if ( document.getElementById('correct1').checked) 
    {
        score++;
    }
    if ( document.getElementById('correct2').checked) 
    {
        score++;
    }
    if ( document.getElementById('correct3').checked) 
    {
        score++;
    }
    if ( document.getElementById('correct4').checked) 
    {
        score++;
    }
    if ( document.getElementById('correct5').checked) 
    {
        score++;
    }
    window.document.body.innerHTML = `
    <div class="result"> 
        <h1 class="resp">SUA PONTUAÇÃO É: ${score}</h1>
        <a class="retry" href="index.html">jogar novamente</a>
    </div>
    `;
}
