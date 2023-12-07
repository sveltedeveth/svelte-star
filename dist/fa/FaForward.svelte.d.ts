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
export type FaForwardProps = typeof __propDef.props;
export type FaForwardEvents = typeof __propDef.events;
export type FaForwardSlots = typeof __propDef.slots;
export default class FaForward extends SvelteComponentTyped<FaForwardProps, FaForwardEvents, FaForwardSlots> {
}
export {};
