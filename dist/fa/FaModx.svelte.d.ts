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
export type FaModxProps = typeof __propDef.props;
export type FaModxEvents = typeof __propDef.events;
export type FaModxSlots = typeof __propDef.slots;
export default class FaModx extends SvelteComponentTyped<FaModxProps, FaModxEvents, FaModxSlots> {
}
export {};
