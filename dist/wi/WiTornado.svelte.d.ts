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
export type WiTornadoProps = typeof __propDef.props;
export type WiTornadoEvents = typeof __propDef.events;
export type WiTornadoSlots = typeof __propDef.slots;
export default class WiTornado extends SvelteComponentTyped<WiTornadoProps, WiTornadoEvents, WiTornadoSlots> {
}
export {};
