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
export type FaGetPocketProps = typeof __propDef.props;
export type FaGetPocketEvents = typeof __propDef.events;
export type FaGetPocketSlots = typeof __propDef.slots;
export default class FaGetPocket extends SvelteComponentTyped<FaGetPocketProps, FaGetPocketEvents, FaGetPocketSlots> {
}
export {};
