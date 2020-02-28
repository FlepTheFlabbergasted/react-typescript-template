// App.tsx
export interface AppState {
  id: number,
  name: string,
  loggedIn: boolean,
}

// WebSocketClient.ts
export type OnWsMessageCallback = (message: any) => void;