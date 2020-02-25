// App.tsx
export interface AppState {
  id: number,
  name: string,
  loggeIn: boolean,
}

// WebSocketClient.ts
export type OnWsMessageCallback = (message: any) => void;