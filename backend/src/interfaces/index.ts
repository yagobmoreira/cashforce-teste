export type ID = number

export type NewEntity<T> = Omit<T, 'id'>

export interface Identifiable {
  id: ID
}
