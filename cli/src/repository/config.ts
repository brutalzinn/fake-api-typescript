
import { TableInterface, RelationInterface } from '@/interfaces/config.interface';
import { writeFileSync } from 'fs';

class ConfigRepository {

  public async createDatabase(): Promise<Boolean> {

    let teste : TableInterface[] = [
        {
             name: "table_10",
             route:"teste",
             relations: 
            [
                {
                    key:"sub_teste",child:"table_9"
                }
            ]
        }
    ]

    await writeFileSync("abacate.json",JSON.stringify(teste), {encoding:'utf8', flag:'w'});
    return true;
  }

}

export default ConfigRepository;
