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
export type FaBitcoinProps = typeof __propDef.props;
export type FaBitcoinEvents = typeof __propDef.events;
export type FaBitcoinSlots = typeof __propDef.slots;
export default class FaBitcoin extends SvelteComponentTyped<FaBitcoinProps, FaBitcoinEvents, FaBitcoinSlots> {
}
export {};
