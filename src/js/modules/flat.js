export const badroom = {
    chairs: 4,
    wals: 4,
    windows: 1
}

export function goToBad(time) {
    let now = new Date();
    let hours = now.getHours()

    if (hours > 20) {
        console.log(`I is time to sleap`);
    } else {
        console.log(`You don't need to slead. It is to early.`);
    }
}

