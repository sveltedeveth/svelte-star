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
export type FaChessPawnProps = typeof __propDef.props;
export type FaChessPawnEvents = typeof __propDef.events;
export type FaChessPawnSlots = typeof __propDef.slots;
export default class FaChessPawn extends SvelteComponentTyped<FaChessPawnProps, FaChessPawnEvents, FaChessPawnSlots> {
}
export {};
