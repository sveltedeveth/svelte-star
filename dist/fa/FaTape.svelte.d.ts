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
export type FaTapeProps = typeof __propDef.props;
export type FaTapeEvents = typeof __propDef.events;
export type FaTapeSlots = typeof __propDef.slots;
export default class FaTape extends SvelteComponentTyped<FaTapeProps, FaTapeEvents, FaTapeSlots> {
}
export {};
