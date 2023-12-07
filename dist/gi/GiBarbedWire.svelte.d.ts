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
export type GiBarbedWireProps = typeof __propDef.props;
export type GiBarbedWireEvents = typeof __propDef.events;
export type GiBarbedWireSlots = typeof __propDef.slots;
export default class GiBarbedWire extends SvelteComponentTyped<GiBarbedWireProps, GiBarbedWireEvents, GiBarbedWireSlots> {
}
export {};
