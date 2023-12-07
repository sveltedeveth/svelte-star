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
export type FaFastForwardProps = typeof __propDef.props;
export type FaFastForwardEvents = typeof __propDef.events;
export type FaFastForwardSlots = typeof __propDef.slots;
export default class FaFastForward extends SvelteComponentTyped<FaFastForwardProps, FaFastForwardEvents, FaFastForwardSlots> {
}
export {};
