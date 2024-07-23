interface EntityOptions {
    tableName: string; 
}

type ColumnType = 'string' | 'number' | 'boolean' | 'date';

type CoulmnValue<T extends ColumnType = ColumnType > = 
        T extends 'string' ? string : 
        T extends 'number' ? number : 
        T extends 'boolean' ? boolean : 
        T extends 'date' ? Date : 
            never

interface ColumnOptions<T extends ColumnType = ColumnType > {
    type?: T ;
    primary?: boolean; 
    unique?: boolean; 
    nullAble?: boolean;
    default?: CoulmnValue<T>;
    validate?: (value: CoulmnValue<T>) => boolean;
}


declare function EntityDecorator(options: EntityOptions): ClassDecorator;
declare function ColumnDecorator(options: ColumnOptions): PropertyDecorator;