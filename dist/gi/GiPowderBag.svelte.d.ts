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
export type GiPowderBagProps = typeof __propDef.props;
export type GiPowderBagEvents = typeof __propDef.events;
export type GiPowderBagSlots = typeof __propDef.slots;
export default class GiPowderBag extends SvelteComponentTyped<GiPowderBagProps, GiPowderBagEvents, GiPowderBagSlots> {
}
export {};
