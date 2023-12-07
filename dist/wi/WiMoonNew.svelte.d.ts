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
export type WiMoonNewProps = typeof __propDef.props;
export type WiMoonNewEvents = typeof __propDef.events;
export type WiMoonNewSlots = typeof __propDef.slots;
export default class WiMoonNew extends SvelteComponentTyped<WiMoonNewProps, WiMoonNewEvents, WiMoonNewSlots> {
}
export {};
