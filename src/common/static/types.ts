import { ConfigState } from "../store/config/state";

// WebSocketClient.ts
export type OnWsMessageCallback = (message: any) => void;

// TODO: Import Protobuf TS types and change from any to specific msg
export interface OnMessageCallback {
  onMsgCallback: (message: any) => void,
}

// Map state updates to props needed, used bu MapConfig.tsx and MapHandler.tsx
export const mapStateToProps = (state: ConfigState) => {
  return {
    showCitizens: state.citizens.show,
    showBasestations: state.baseStations.show,
    showBsRadius: state.baseStations.showRadius,
  }
}