interface EntityOptions {
    tableName: string; 
}

type ColumnType = 'string' | 'number' | 'boolean' | 'date';

type CoulmnValue<T extends ColumnType = 'string'> = 
        T extends 'string' ? string : 
        T extends 'number' ? number : 
        T extends 'boolean' ? boolean : 
        T extends 'date' ? Date : 
            never

interface ColumnOptions<T extends ColumnType = 'string'> {
    type: T ;
    primary?: boolean; 
    unique?: boolean; 
    nullAble?: boolean;
    default?: CoulmnValue<T>;
    validate?: (value: CoulmnValue<T>) => boolean; // 유효성 검사 함수
}

function Entity(options: EntityOptions): ClassDecorator;
function Column(options: ColumnOptions): PropertyDecorator;