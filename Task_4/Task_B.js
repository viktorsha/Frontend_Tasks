function makeDroids() {
    const droids = [];
    for (let i = 0; i < 10; i++) {
        const DROID = () => {
            console.log("D" + i);
        };
        droids.push(DROID);
    }
    return droids;
}
for (let d of makeDroids()) {
    d();
}