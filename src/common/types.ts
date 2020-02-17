// TheFileThatUsesThis.ts
export type Agent = {
  id: number,
  coordinate: {lat: number, lng: number}
}

// TheFileThatUsesThis1.ts, TheFileThatUsesThis2.ts
export type MessageCallback = (message: any) => void;