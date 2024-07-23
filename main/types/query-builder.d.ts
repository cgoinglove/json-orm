class QueryBuilder<T> {
    constructor(entity: new () => T);

    // 조건 추가
    where(condition: object): this;

    // 정렬 추가
    orderBy(field: string, order: 'ASC' | 'DESC'): this;

    // 결과 제한 추가
    limit(value: number): this;

    // 결과 오프셋 추가
    offset(value: number): this;

    // 쿼리 실행
    getMany(): Promise<T[]>;

    // 단일 결과 조회
    getOne(): Promise<T | null>;
}
