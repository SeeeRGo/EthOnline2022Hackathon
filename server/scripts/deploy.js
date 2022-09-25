async function main() {
  console.log(process.argv);

  const HelloWorld = await ethers.getContractFactory("Ballot");

  const hello_world = await HelloWorld.deploy(
    ["Air","Water","Mind","Land"],
    "What should we cleanup the most urgent"
  );
  console.log("Contract deployed to address:", hello_world.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
