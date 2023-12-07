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
export type FaTeethProps = typeof __propDef.props;
export type FaTeethEvents = typeof __propDef.events;
export type FaTeethSlots = typeof __propDef.slots;
export default class FaTeeth extends SvelteComponentTyped<FaTeethProps, FaTeethEvents, FaTeethSlots> {
}
export {};
