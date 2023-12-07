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
export type FaTeethOpenProps = typeof __propDef.props;
export type FaTeethOpenEvents = typeof __propDef.events;
export type FaTeethOpenSlots = typeof __propDef.slots;
export default class FaTeethOpen extends SvelteComponentTyped<FaTeethOpenProps, FaTeethOpenEvents, FaTeethOpenSlots> {
}
export {};
