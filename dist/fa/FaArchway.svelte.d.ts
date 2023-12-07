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
export type FaArchwayProps = typeof __propDef.props;
export type FaArchwayEvents = typeof __propDef.events;
export type FaArchwaySlots = typeof __propDef.slots;
export default class FaArchway extends SvelteComponentTyped<FaArchwayProps, FaArchwayEvents, FaArchwaySlots> {
}
export {};
