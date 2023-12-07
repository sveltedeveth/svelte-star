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
export type GiPriceTagProps = typeof __propDef.props;
export type GiPriceTagEvents = typeof __propDef.events;
export type GiPriceTagSlots = typeof __propDef.slots;
export default class GiPriceTag extends SvelteComponentTyped<GiPriceTagProps, GiPriceTagEvents, GiPriceTagSlots> {
}
export {};
