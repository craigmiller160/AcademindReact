import squareValueMap from '../data/squareValueMap';
import * as squareNames from '../data/squareNames';

export const updateSpace = (key, spaces) => {
    switch (key) {
        case squareNames.TOP_LEFT:
            spaces.top.left = squareValueMap.get(spaces.top.left);
            break;
        case squareNames.TOP_MIDDLE:
            spaces.top.middle = squareValueMap.get(spaces.top.middle);
            break;
        case squareNames.TOP_RIGHT:
            spaces.top.right = squareValueMap.get(spaces.top.right);
            break;
        case squareNames.MIDDLE_LEFT:
            spaces.middle.left = squareValueMap.get(spaces.middle.left);
            break;
        case squareNames.MIDDLE_MIDDLE:
            spaces.middle.middle = squareValueMap.get(spaces.middle.middle);
            break;
        case squareNames.MIDDLE_RIGHT:
            spaces.middle.right = squareValueMap.get(spaces.middle.right);
            break;
        case squareNames.BOTTOM_LEFT:
            spaces.bottom.left = squareValueMap.get(spaces.bottom.left);
            break;
        case squareNames.BOTTOM_MIDDLE:
            spaces.bottom.middle = squareValueMap.get(spaces.bottom.middle);
            break;
        case squareNames.BOTTOM_RIGHT:
            spaces.bottom.right = squareValueMap.get(spaces.bottom.right);
            break;
        default:
            throw new Error(`Invalid square name: ${key}`);
    }
    return spaces;
};

//TODO can be made more efficient, but probably dosn't matter for now
export const getWinner = spaces => {
    //Top Row
    let winner = someoneHasWon([spaces.top.left, spaces.top.middle, spaces.top.right]);

    //Middle Row
    if (!winner) {
        winner = someoneHasWon([spaces.middle.left, spaces.middle.middle, spaces.middle.right]);
    }

    //Bottom Row
    if (!winner) {
        winner = someoneHasWon([spaces.bottom.left, spaces.bottom.middle, spaces.bottom.right]);
    }

    //Left Col
    if (!winner) {
        winner = someoneHasWon([spaces.top.left, spaces.middle.left, spaces.bottom.left]);
    }

    //Middle Col
    if (!winner) {
        winner = someoneHasWon([spaces.top.middle, spaces.middle.middle, spaces.bottom.middle]);
    }

    //Right Col
    if (!winner) {
        winner = someoneHasWon([spaces.top.right, spaces.middle.right, spaces.bottom.right]);
    }

    //Top Left Corner -> Bottom Right Corner
    if (!winner) {
        winner = someoneHasWon([spaces.top.left, spaces.middle.middle, spaces.bottom.right]);
    }

    //Bottom Left Corner -> Top Right Corner
    if (!winner) {
        winner = someoneHasWon([spaces.bottom.left, spaces.middle.middle, spaces.top.right]);
    }


    return winner;
};

const someoneHasWon = valueArray => {
    if (valueArray[0] === valueArray[1] && valueArray[1] === valueArray[2]) {
        return valueArray[0];
    }
    return '';
};