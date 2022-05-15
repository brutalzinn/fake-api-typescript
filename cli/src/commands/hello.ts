import type { Arguments, CommandBuilder } from 'yargs';

type Options = {
  name: string;
  del: boolean | undefined;
  create: boolean | undefined;
};

export const command: string = 'database <name> [value]';
export const desc: string = 'database description';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      create: { type: 'boolean' },
    })
    .options({
      del: { type: 'boolean' },
    })
    .positional('name', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { name, create, del } = argv;
  
  let isCreate = create != undefined && del == undefined
  let frase = isCreate ? "Criada" : "Deletada";
  const greeting = `Database ${name} ${frase}`;
  process.stdout.write(greeting);
  process.exit(0);
};