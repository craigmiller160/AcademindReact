import squareValueMap from '../../data/squareValueMap';
import * as squareNames from '../../data/squareNames';

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