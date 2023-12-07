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
export type WiTime10Props = typeof __propDef.props;
export type WiTime10Events = typeof __propDef.events;
export type WiTime10Slots = typeof __propDef.slots;
export default class WiTime10 extends SvelteComponentTyped<WiTime10Props, WiTime10Events, WiTime10Slots> {
}
export {};
