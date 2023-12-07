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
export type GiGateProps = typeof __propDef.props;
export type GiGateEvents = typeof __propDef.events;
export type GiGateSlots = typeof __propDef.slots;
export default class GiGate extends SvelteComponentTyped<GiGateProps, GiGateEvents, GiGateSlots> {
}
export {};
