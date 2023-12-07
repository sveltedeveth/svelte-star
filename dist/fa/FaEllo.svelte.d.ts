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
export type FaElloProps = typeof __propDef.props;
export type FaElloEvents = typeof __propDef.events;
export type FaElloSlots = typeof __propDef.slots;
export default class FaEllo extends SvelteComponentTyped<FaElloProps, FaElloEvents, FaElloSlots> {
}
export {};
