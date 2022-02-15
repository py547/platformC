import Web3 from 'web3'

//@ts-ignore

//@ts-ignore
const web3 = new Web3(window.ethereum);

function addListener(fn) {
    //@ts-ignore
    window.ethereum.on('accountsChanged', fn)
}

async function authenticate() {
    //@ts-ignore
    await window.ethereum.enable();
}

async function getAccount() {
    return (await web3.eth.getAccounts())[0];
}

export {
    getAccount,
    authenticate,
    addListener,
}