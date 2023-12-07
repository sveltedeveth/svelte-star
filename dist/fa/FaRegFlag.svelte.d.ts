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
export type FaRegFlagProps = typeof __propDef.props;
export type FaRegFlagEvents = typeof __propDef.events;
export type FaRegFlagSlots = typeof __propDef.slots;
export default class FaRegFlag extends SvelteComponentTyped<FaRegFlagProps, FaRegFlagEvents, FaRegFlagSlots> {
}
export {};
