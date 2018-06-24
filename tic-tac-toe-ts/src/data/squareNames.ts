export const TOP_LEFT = 'TOP_LEFT';
export const TOP_MIDDLE = 'TOP_MIDDLE';
export const TOP_RIGHT = 'TOP_RIGHT';

export const MIDDLE_LEFT = 'MIDDLE_LEFT';
export const MIDDLE_MIDDLE = 'MIDDLE_MIDDLE';
export const MIDDLE_RIGHT = 'MIDDLE_RIGHT';

export const BOTTOM_LEFT = 'BOTTOM_LEFT';
export const BOTTOM_MIDDLE = 'BOTTOM_MIDDLE';
export const BOTTOM_RIGHT = 'BOTTOM_RIGHT';

export const getSquareName = (top: boolean, bottom: boolean, left: boolean, right: boolean): string => {
    if (top && left) {
        return TOP_LEFT;
    }
    else if (top && right) {
        return TOP_RIGHT;
    }
    else if (top) {
        return TOP_MIDDLE;
    }
    else if (bottom && left) {
        return BOTTOM_LEFT;
    }
    else if (bottom && right) {
        return BOTTOM_RIGHT;
    }
    else if (bottom) {
        return BOTTOM_MIDDLE;
    }
    else if (left) {
        return MIDDLE_LEFT;
    }
    else if (right) {
        return MIDDLE_RIGHT;
    }
    else {
        return MIDDLE_MIDDLE;
    }
};