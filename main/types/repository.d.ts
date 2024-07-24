interface FindOptions<T> {
    where?: WhereCondition<T>;
    orderBy?:OrderCondition<T>;
    limit?: number; // 결과 제한
}

interface SaveOptions {
    validate?: boolean; // 데이터 저장 전 유효성 검사 여부
}

type Criteria<T> = Exclude<CoulmnValue|CoulmnValue[]| Partial<T>,Date>

interface Repository<T> {
    constructor(entity: new () => T);
    create(data: Partial<T>): T;
    exists(criteria:WhereCondition<T>):Promise<boolean>;
    count(criteria:WhereCondition<T>):Promise<number>;
    save(entity: T, options?: SaveOptions): Promise<T>;
    find(options?: FindOptions<T>): Promise<T[]>;
    findOne(options?: FindOptions<T>): Promise<T|null>;
    update(criteria:Criteria<T>,data: Partial<T>): Promise<T>;
    delete(criteria:Criteria<T> ): Promise<void>;
}
