interface JsonOrmConfig {
    // JSON File Path
    filePath: string; 
    // 변경 사항 자동 저장 여부
    autoSave?: boolean; 
    // 데이터 암호화 키 (선택 사항)
    encryptionKey?: string; 
}

class JsonOrm {
    constructor(config: JsonOrmConfig);
    getRepository:void;
}
