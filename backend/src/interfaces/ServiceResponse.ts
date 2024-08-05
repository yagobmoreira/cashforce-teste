// src/interfaces/ServiceResponse.ts

export interface ServiceMessage { message: string }

type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'CONFLICT'

export interface ServiceResponseError {
  status: ServiceResponseErrorType
  data: ServiceMessage
}

export interface ServiceResponseSuccess<T> {
  status: 'SUCCESSFUL'
  data: T
}

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>
