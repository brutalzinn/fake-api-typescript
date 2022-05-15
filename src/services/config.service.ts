
import { ConfigInterface, RelationInterface } from '@/interfaces/config.interface';
import { writeFileSync } from 'fs';
import { isEmpty } from '@utils/util';

class ConfigService {

  public async createDatabase(): Promise<Boolean> {

    let teste : ConfigInterface[] = [
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

export default ConfigService;
