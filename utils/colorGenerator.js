const COLOR_RANGE = [0, 1];

function calculatePoint(index, step, start) {
    return start + step * index;
}

function generateColor(rgbString) {
    if (rgbString.startsWith("rgb")) {
        const rbgIndices = rgbString.slice(4, rgbString.length - 2);
        const addAlpha = alpha => `rgba(${rbgIndices}, ${alpha})`;
        return [addAlpha(0.4), addAlpha(1)];
    } else if (rgbString.startsWith("#")) {
        const addAlpha = alpha => rgbString + alpha;
        return [addAlpha("66"), addAlpha("FF")];
    } else {
        throw new Error("color scheme not implemented");
    }
}

export function generateColors(dataSize, interpolator) {
    const range = COLOR_RANGE[1] - COLOR_RANGE[0];
    const step = range / dataSize;
    const colors = [], borderColors = [];
    [...Array(dataSize)].map((_, index) => {
        const point = calculatePoint(index, step, COLOR_RANGE[0]);
        const [color, borderColor] = generateColor(interpolator(point));
        colors.push(color);
        borderColors.push(borderColor);
    });
    return { colors, borderColors };
}