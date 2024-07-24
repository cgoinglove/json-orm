
type StorageType = 'file' | 'memory';
interface JsonOrmConfig {
    storage?:StorageType
    filePath?: string; 
}

interface JsonOrm {
    constructor(config: JsonOrmConfig);
    getRepository:void;
}
