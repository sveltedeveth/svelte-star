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
export type FaEmberProps = typeof __propDef.props;
export type FaEmberEvents = typeof __propDef.events;
export type FaEmberSlots = typeof __propDef.slots;
export default class FaEmber extends SvelteComponentTyped<FaEmberProps, FaEmberEvents, FaEmberSlots> {
}
export {};
