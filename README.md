# Webtorrent-live-stream-and-etherum-blockchain
Alpha test of using blockchain Technology and webtorrent for live streaming


Need to install metamask and use the test network Rinkeby


Warning use test network Rinkeby, every minute it will ask for a transaction using ether, you need to have ether and active metamask in the broadcaster and viewer.

Install the broadcaster and the viewer in a local http server (xampp recommended),
enter to the broadcaster.html pres start to start streaming,  every minute the app will send a transaction to metamask and in this transaction have the magnet of the 1 minute segment.

Enter the viewer.html and press start. Metamask will check Ethereum blockchain for the last transaction of the broadcaster and fetch the magnet for the 1 minute segment and start streaming it.

#BUG
need to fix the pause between the segments.

Ethereum blockchain its an amazing proyect but for this kind of application its not viable at the moment on the mainnet  for that reason this proyect can only run in the test net.

In the future vtos foundation will develop our own blockchain to be able to use this and more systems using blockchain technology
