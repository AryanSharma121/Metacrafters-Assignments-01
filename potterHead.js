// Create a variable to hold Harry Potter- NFTs
let harryPotterNFTs = [];

// This function will take in some values as parameters, create a
// character NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, house, role, patronus, bloodStatus, spellsMastered) {
    let characterNFT = {
        name: name,
        house: house,
        role: role,
        patronus: patronus,
        bloodStatus: bloodStatus,
        spellsMastered: spellsMastered
    };
    harryPotterNFTs.push(characterNFT);
}

// Create a "loop" that will go through an "array" of character NFTs
// and print their metadata with console.log()
// console.table(harryPotterNFTs); to show the NFTs in a tabular form
function listNFTs() {
    for (let i = 0; i < harryPotterNFTs.length; i++) {
        console.log("\n\n_____________________ HARRY POTTER NFT _________________________\n\n");
        console.log("Name: " + harryPotterNFTs[i].name);
        console.log("House: " + harryPotterNFTs[i].house);
        console.log("Role: " + harryPotterNFTs[i].role);
        console.log("Patronus: " + harryPotterNFTs[i].patronus);
        console.log("Blood Status: " + harryPotterNFTs[i].bloodStatus);
        console.log("Spells Mastered: " + harryPotterNFTs[i].spellsMastered);
        console.log("\n\n_____________________ * * * * * _________________________\n");
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Harry Potter NFTs Minted: " + harryPotterNFTs.length);
}

// Call your functions below this line
mintNFT("Harry Potter", "Gryffindor", "Student", "Stag", "Half-blood", 20);
mintNFT("Hermione Granger", "Gryffindor", "Student", "Otter", "Muggle-born", 25);
mintNFT("Ron Weasley", "Gryffindor", "Student", "Jack Russell Terrier", "Pure-blood", 15);
mintNFT("Albus Dumbledore", "Gryffindor", "Headmaster", "Phoenix", "Half-blood", 50);
listNFTs();
getTotalSupply();
