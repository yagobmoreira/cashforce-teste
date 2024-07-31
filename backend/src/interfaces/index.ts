export type NewEntity<T> = Omit<T, 'id'>

export type ID = number

export interface Identifiable {
  id: ID
}
