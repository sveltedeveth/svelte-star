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
export type FaShareProps = typeof __propDef.props;
export type FaShareEvents = typeof __propDef.events;
export type FaShareSlots = typeof __propDef.slots;
export default class FaShare extends SvelteComponentTyped<FaShareProps, FaShareEvents, FaShareSlots> {
}
export {};
