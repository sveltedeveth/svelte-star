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
export type FaBanProps = typeof __propDef.props;
export type FaBanEvents = typeof __propDef.events;
export type FaBanSlots = typeof __propDef.slots;
export default class FaBan extends SvelteComponentTyped<FaBanProps, FaBanEvents, FaBanSlots> {
}
export {};
