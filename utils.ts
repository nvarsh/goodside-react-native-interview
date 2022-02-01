const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const fetchCall = async () => {
    await sleep(3000)
    const json = await require('./MOCK_DATA.json');
    return json;
}

export { sleep, fetchCall }
