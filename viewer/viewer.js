
var prevMagnet='abc';
var client = new WebTorrent()
var player = document.getElementById('player1');
client.on('error', function (err) {
    console.error('ERROR: ' + err.message)
})

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault() // Prevent page refresh
    readMagnet();
})
// Checking if Web3 has been injected by the browser (Mist/MetaMask)
if (typeof web3 !== 'undefined') {

    // Use the browser's ethereum provider
    window.web3 = new Web3(web3.currentProvider);
    alert("Metamask detected!")

} else {
    alert('No web3? You should consider trying MetaMask!')
}
abi = JSON.parse('[{"constant": false,"inputs": [{"name": "hash","type": "string"}],"name": "setHash","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "getHash","outputs": [{"name": "latestHash","type": "string"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"inputs": [],"payable": false,"stateMutability": "nonpayable","type": "constructor"}]')
VotingContract = window.web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0x26Ff05358e263972E7A8dcc9A351E1f64b5000C8');

function readMagnet() {
    contractInstance.getHash.call(function (error,value) {
        if (!error) {
            console.log(value);
            if (value!==prevMagnet && value!=='Live Streaming Off') {
                prevMagnet = value;
                client.add(value, onTorrent)
                document.getElementById('error').innerHTML='Magnet Found'
            }else if (value ==='Live Streaming Off'){
                document.getElementById('error').innerHTML='Live Streaming is not Available'
            }
            else{
                document.getElementById('error').innerHTML='New Magnet Not Found'
                setTimeout(readMagnet,3000)
            }

            //  setInterval(readMagnet,10*1000)
        }else {
            console.log("Couldn't read the MagnetUri from Blockchain\n"+error)
        }


    })
}

function onTorrent (torrent) {
    var file = torrent.files.find(function (file) {
        return file.name.endsWith('.webm')
    })
    window.setTimeout(file.renderTo('video#player1', { autoplay: true }), 0);
  //  setTimeout(readMagnet,(player.duration*1000)-300)
    player.onended = function () {
        readMagnet();
    }

}
