import * as squareNames from '../../data/squareNames';
import squareValueMap from '../../data/squareValueMap';
import { TicTacToe } from "../../data/TicTacToe/TicTacToe";

export const updateSpace = (key: string, spaces: TicTacToe): TicTacToe => {
    switch (key) {
        case squareNames.TOP_LEFT:
            spaces.top.left = squareValueMap.get(spaces.top.left) as string;
            break;
        case squareNames.TOP_MIDDLE:
            spaces.top.middle = squareValueMap.get(spaces.top.middle) as string;
            break;
        case squareNames.TOP_RIGHT:
            spaces.top.right = squareValueMap.get(spaces.top.right) as string;
            break;
        case squareNames.MIDDLE_LEFT:
            spaces.middle.left = squareValueMap.get(spaces.middle.left) as string;
            break;
        case squareNames.MIDDLE_MIDDLE:
            spaces.middle.middle = squareValueMap.get(spaces.middle.middle) as string;
            break;
        case squareNames.MIDDLE_RIGHT:
            spaces.middle.right = squareValueMap.get(spaces.middle.right) as string;
            break;
        case squareNames.BOTTOM_LEFT:
            spaces.bottom.left = squareValueMap.get(spaces.bottom.left) as string;
            break;
        case squareNames.BOTTOM_MIDDLE:
            spaces.bottom.middle = squareValueMap.get(spaces.bottom.middle) as string;
            break;
        case squareNames.BOTTOM_RIGHT:
            spaces.bottom.right = squareValueMap.get(spaces.bottom.right) as string;
            break;
        default:
            throw new Error(`Invalid square name: ${key}`);
    }

    return spaces;
};

// TODO still need to finish this