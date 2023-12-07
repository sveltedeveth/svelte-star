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
export type WiMoonsetProps = typeof __propDef.props;
export type WiMoonsetEvents = typeof __propDef.events;
export type WiMoonsetSlots = typeof __propDef.slots;
export default class WiMoonset extends SvelteComponentTyped<WiMoonsetProps, WiMoonsetEvents, WiMoonsetSlots> {
}
export {};
