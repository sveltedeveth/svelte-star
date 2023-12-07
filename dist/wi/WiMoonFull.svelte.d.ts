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
export type WiMoonFullProps = typeof __propDef.props;
export type WiMoonFullEvents = typeof __propDef.events;
export type WiMoonFullSlots = typeof __propDef.slots;
export default class WiMoonFull extends SvelteComponentTyped<WiMoonFullProps, WiMoonFullEvents, WiMoonFullSlots> {
}
export {};
