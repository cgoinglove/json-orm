interface FindOptions {
    where?: object; // 조건
    orderBy?: { [key: string]: 'ASC' | 'DESC' }; // 정렬 조건
    limit?: number; // 결과 제한
    offset?: number; // 결과 오프셋
}

interface SaveOptions {
    validate?: boolean; // 데이터 저장 전 유효성 검사 여부
}

class Repository<T> {
    constructor(entity: new () => T);

    // 데이터 생성
    create(data: Partial<T>): T;

    // 데이터 저장
    save(entity: T, options?: SaveOptions): Promise<T>;

    // 단일 데이터 조회
    findOne(id: any): Promise<T | null>;

    // 조건에 따른 데이터 조회
    find(options?: FindOptions): Promise<T[]>;

    // 데이터 수정
    update(id: any, data: Partial<T>): Promise<T>;

    // 데이터 삭제
    delete(id: any): Promise<void>;
}
