


type OrderCondition<T> = {
    field:keyof T,
    order?:'ASC'|'DESC'
}

type WhereCondition<T> = {
    [K in keyof T]?:T[K]| ((value:T[K])=>boolean)
}


interface QueryBuilder<T = object> {
    select(fields:Array<keyof T>):this
    where(condition: WhereCondition<T>): this;
    orderBy(condition:OrderCondition<T>|OrderCondition<T>[]): this;
    limit(value: number): this;
    getMany(): Promise<T[]>;
    getOne(): Promise<T | null>;
    groupBy(fields: keyof T| Array<keyof T> ): this;
    // join<U>():QueryBuilder<T & U>
}
