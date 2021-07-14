function makeDroids() {
    const DROIDS = [];
    for (let i = 0; i < 10; i++) {
        const DROID = () => {
            console.log("D" + i);
        };
        DROIDS.push(DROID);
    }
    return DROIDS;
}
for (let d of makeDroids()) {
    d();
}