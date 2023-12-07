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
export type GiTripleGateProps = typeof __propDef.props;
export type GiTripleGateEvents = typeof __propDef.events;
export type GiTripleGateSlots = typeof __propDef.slots;
export default class GiTripleGate extends SvelteComponentTyped<GiTripleGateProps, GiTripleGateEvents, GiTripleGateSlots> {
}
export {};
