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
export type FaIglooProps = typeof __propDef.props;
export type FaIglooEvents = typeof __propDef.events;
export type FaIglooSlots = typeof __propDef.slots;
export default class FaIgloo extends SvelteComponentTyped<FaIglooProps, FaIglooEvents, FaIglooSlots> {
}
export {};
