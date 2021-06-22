export interface ColumnType<T> {
  name: string
  label?: string
  hidden?: boolean
  sort?: ((a: RowType<T>, b: RowType<T>) => number) | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: ({ value, row }: { value: any, row: T }) => React.ReactNode
  headerRender?: HeaderRenderType
}

export interface ColumnStateType<T> {
  name: string
  label: string
  hidden: boolean
  sort?: ((a: RowType<T>, b: RowType<T>) => number) | undefined
  sorted: {
    on: boolean
    asc?: boolean
  }
  headerRender?: HeaderRenderType
}

export type HeaderRenderType = ({ label }: { label: React.ReactNode }) => React.ReactNode

// this is the type saved as state and returned
export interface HeaderType<T> {
  id: number
  name: string
  label?: string
  hidden?: boolean
  sorted: {
    on: boolean
    asc?: boolean
  }
  sort?: ((a: RowType<T>, b: RowType<T>) => number) | undefined
  render: () => React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DataType {
  [key: string]: any
}

export interface ColumnByNamesType<T> {
  [key: string]: ColumnType<T>
}

export type RenderFunctionType<T> = ({ value, row }: RenderFunctionArgsType<T>) => React.ReactNode | undefined

interface RenderFunctionArgsType<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  row: T
}

export type ColumnByNameType<T> = Omit<Required<ColumnType<T>>, 'name' | 'sort'>

export interface RowType<T extends DataType> {
  id: number
  cells: CellType[]
  hidden?: boolean
  selected?: boolean
  original: T
}

export interface CellType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  render: () => React.ReactNode
}

export interface UseTableTypeParams<T extends DataType> {
  columns: Array<ColumnType<T>>
  data: T[]
  options?: {
    sortable?: boolean
    selectable?: boolean
    filter?: (row: Array<RowType<T>>) => Array<RowType<T>>
    filterOn?: boolean
  }
}

export interface UseTablePropsType<T> {
  columns: Array<ColumnType<T>>
  data: T[]
  options?: {
    sortable?: boolean
    selectable?: boolean
    filter?: (row: Array<RowType<T>>) => Array<RowType<T>>
  }
}

export interface UseTableOptionsType<T> {
  sortable?: boolean
  selectable?: boolean
  pagination?: boolean
  sortColumn?: string
  filter?: (row: Array<RowType<T>>) => Array<RowType<T>>
}

export interface UseTableReturnType<T> {
  headers: Array<HeaderType<T>>
  originalRows: Array<RowType<T>>
  rows: Array<RowType<T>>
  selectedRows: Array<RowType<T>>
  dispatch: React.Dispatch<TableAction<T>>
  toggleSort: (columnName: string, isAscOverride?: boolean) => void
  selectRow: (id: number) => void
  toggleAll: () => void
  setSearchString: (searchString: string) => void
  toggleAllState: boolean
  pagination: PaginatorType
}

interface PaginatorType {
  nextPage: () => void
  prevPage: () => void
  page: number
  perPage: number
  canNext: boolean
  canPrev: boolean
}

export interface TableState<T extends DataType> {
  columnsByName: ColumnByNamesType<T>
  columns: Array<ColumnStateType<T>>
  rows: Array<RowType<T>>
  originalRows: Array<RowType<T>>
  selectedRows: Array<RowType<T>>
  filterOn: boolean
  sortColumn: string | null | undefined
  toggleAllState: boolean
  pagination: PaginatorType
  paginationEnabled: boolean
}

export type TableAction<T extends DataType> =
  | { type: 'TOGGLE_SORT', columnName: string, isAscOverride?: boolean }
  | { type: 'SELECT_ROW', rowId: number }
  | { type: 'GLOBAL_FILTER', filter: (row: Array<RowType<T>>) => Array<RowType<T>> }
  | { type: 'SEARCH_STRING', searchString: string }
  | { type: 'GLOBAL_FILTER_OFF' }
  | { type: 'SET_ROWS', data: Array<RowType<T>> }
  | { type: 'NEXT_PAGE' }
  | { type: 'PREV_PAGE' }
  | { type: 'TOGGLE_ALL' }
