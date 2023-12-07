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
export type WiTime5Props = typeof __propDef.props;
export type WiTime5Events = typeof __propDef.events;
export type WiTime5Slots = typeof __propDef.slots;
export default class WiTime5 extends SvelteComponentTyped<WiTime5Props, WiTime5Events, WiTime5Slots> {
}
export {};
