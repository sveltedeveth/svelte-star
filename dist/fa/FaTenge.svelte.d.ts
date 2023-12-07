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
export type FaTengeProps = typeof __propDef.props;
export type FaTengeEvents = typeof __propDef.events;
export type FaTengeSlots = typeof __propDef.slots;
export default class FaTenge extends SvelteComponentTyped<FaTengeProps, FaTengeEvents, FaTengeSlots> {
}
export {};
