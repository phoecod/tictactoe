export const createArray = () => {
    return [
        ['','',''],
        ['','',''],
        ['','','']
    ]
}


export const checkBoardForWin = (board) => {
    return checkDiagonals(board) || checkRows(board) || checkColumns(board);
}

const checkDiagonals = (board) => {
    const coords = {
        LtR: [ "00","11", "22"],
        RtL: ["02", "11", "20"]
    }
    const leftToRight =checkValuesEqual(board[0][0], board[1][1], board[2][2]);
    const rightToLeft =checkValuesEqual(board[0][2], board[1][1], board[2][0]);
    if (leftToRight) return coords.LtR; 
    if(rightToLeft) return coords.RtL;
    return false;
}

const checkColumns = (board) => {
    const coords = {
        leftCol: ["00","10", "20"],
        midCol: ["01", "11", "21"],
        rightCol: ["02", "12", "22"]
    }
    const leftColumn  = checkValuesEqual(board[0][0], board[1][0], board[2][0]);
    const middleColumn = checkValuesEqual(board[0][1], board[1][1], board[2][1]);
    const rightColumn = checkValuesEqual(board[0][2], board[1][2], board[2][2]);
    if (leftColumn) return coords.leftCol;
    if (middleColumn) return coords.midCol;
    if (rightColumn) return coords.rightCol;
    
    return false;
}

const checkRows = (board) => {

    const coords = {
        topRow: ["00", "01", "02"],
        midRow: ["10", "11", "12"],
        botRow: ["20", "21", "22"]
    }
    const topRow = checkValuesEqual(board[0][0], board[0][1], board[0][2]);
    const middleRow = checkValuesEqual(board[1][0], board[1][1], board[1][2]);
    const bottomRow = checkValuesEqual(board[2][0], board[2][1], board[2][2]);
    if (topRow) return coords.topRow;
    if(middleRow) return coords.midRow;
    if(bottomRow) return coords.botRow;
    return false;
}

const checkValuesEqual = (one, two, three) => {
    if (one === '' || two === '' || three === '') return false;
    return (one === two) && (two === three);
}