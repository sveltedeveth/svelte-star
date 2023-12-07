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
export type FaFlagProps = typeof __propDef.props;
export type FaFlagEvents = typeof __propDef.events;
export type FaFlagSlots = typeof __propDef.slots;
export default class FaFlag extends SvelteComponentTyped<FaFlagProps, FaFlagEvents, FaFlagSlots> {
}
export {};
