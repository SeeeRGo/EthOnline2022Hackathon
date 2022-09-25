import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const shell = require('shelljs');

import createDb from "./db";
dotenv.config();

const app: Express = express();
app.use(express.json()) // To parse the incoming requests with JSON payloads
const port = process.env['PORT'] || 9000;

createDb().then(async db => {
  await db.put({ _id: "delegationGraph", data: {} });
  return db;
}).then((db) => {
  //@ts-ignore
  // app.get("/", (req: Request, res: Response) => {
  //   const data = db.get("delegationGraph")[0]?.data || {}
  //   res.send(data);
  // });

  app.post("/", async <P, T>(req: Request<P, T, DelegateUpdate>, res: Response) => {    
  });

  app.post("/initiative", async (req, res) => {
    const { options, description } = req.body;
    shell.cd("scripts");
    shell
      .ShellString(
        `async function main() {
  console.log(process.argv);

  const HelloWorld = await ethers.getContractFactory("Ballot");

  const hello_world = await HelloWorld.deploy(
    [${options.map((op: string) => `"${op}"`).join()}],
    "${description}"
  );
  console.log("Contract deployed to address:", hello_world.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
`
      )
      .to("deploy.js");
  shell.exec("npx hardhat run deploy.js --network polygon_mumbai");


    return res.status(200).send('OK');
  });

  app.listen(port, () => {
  
    console.log(
      `⚡️[server]: Server is running at https://localhost:${port}`
    );
  });
})
