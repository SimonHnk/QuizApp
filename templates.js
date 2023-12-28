function setHighscoreEntry(playername, score, medal) {
    return `
    <tr>
        <td>${playername}</td>
        <td>${score}/6</td>
        <td><img class="place-icon" src="${medal}" alt=""></td>
    </tr>
`
}