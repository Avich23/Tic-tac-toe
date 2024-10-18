export function calculateWinner (sguares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (sguares[a] && sguares[a] === sguares[b] && sguares[a] === sguares[c]) {
            return sguares[a]
        }
    }
    return null
}