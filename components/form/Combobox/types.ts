export type Suggestion = {
  label: string
  value: any,
  [key: string]: any
}

export type EmptyMessage = string

export type AutoCompleteProps = {
  suggestions: Suggestion[]
  emptyMessage?: EmptyMessage
  suggestionSelected?: Suggestion
  onSelectedSuggestion: (value: Suggestion) => void, // eslint-disable-line
  onInputChange: (value: string) => void // eslint-disable-line
  showContent: boolean
  isLoading?: boolean
  disabled?: boolean
  placeholder?: string
}