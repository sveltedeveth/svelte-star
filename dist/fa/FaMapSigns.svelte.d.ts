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
export type FaMapSignsProps = typeof __propDef.props;
export type FaMapSignsEvents = typeof __propDef.events;
export type FaMapSignsSlots = typeof __propDef.slots;
export default class FaMapSigns extends SvelteComponentTyped<FaMapSignsProps, FaMapSignsEvents, FaMapSignsSlots> {
}
export {};
