// https://github.com/vuejs/vetur/issues/1027#issuecomment-468005404
declare module '*.json' {
  const value: { [key: string]: any }
  export default value
}
