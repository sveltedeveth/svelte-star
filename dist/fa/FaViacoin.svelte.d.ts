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
export type FaViacoinProps = typeof __propDef.props;
export type FaViacoinEvents = typeof __propDef.events;
export type FaViacoinSlots = typeof __propDef.slots;
export default class FaViacoin extends SvelteComponentTyped<FaViacoinProps, FaViacoinEvents, FaViacoinSlots> {
}
export {};
