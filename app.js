const allBtns = document.getElementsByClassName('add-btn');
for (const btn of allBtns) {
    btn.addEventListener('click', function(e) {
        const name = e.target.parentNode.childNodes[1].innerTex;
        const rate = e.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = e.target.parentNode.childNodes[5].childNodes[1].innerText;

        const playerContainer = document.getElementById('player-list');
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.innerText = name;
        const td2 = document.createElement('td');
        td2.innerText = rate;
        const td3 = document.createElement('td');
        td3.innerText = category;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        playerContainer.appendChild(tr);

        // console.log(e.target.parentNode.childNodes[1].innerTex)
    });
}