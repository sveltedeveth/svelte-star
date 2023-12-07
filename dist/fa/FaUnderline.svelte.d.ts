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
export type FaUnderlineProps = typeof __propDef.props;
export type FaUnderlineEvents = typeof __propDef.events;
export type FaUnderlineSlots = typeof __propDef.slots;
export default class FaUnderline extends SvelteComponentTyped<FaUnderlineProps, FaUnderlineEvents, FaUnderlineSlots> {
}
export {};
