import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiMedievalGateProps = typeof __propDef.props;
export type GiMedievalGateEvents = typeof __propDef.events;
export type GiMedievalGateSlots = typeof __propDef.slots;
export default class GiMedievalGate extends SvelteComponentTyped<GiMedievalGateProps, GiMedievalGateEvents, GiMedievalGateSlots> {
}
export {};
