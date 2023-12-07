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
export type FaMarsDoubleProps = typeof __propDef.props;
export type FaMarsDoubleEvents = typeof __propDef.events;
export type FaMarsDoubleSlots = typeof __propDef.slots;
export default class FaMarsDouble extends SvelteComponentTyped<FaMarsDoubleProps, FaMarsDoubleEvents, FaMarsDoubleSlots> {
}
export {};
