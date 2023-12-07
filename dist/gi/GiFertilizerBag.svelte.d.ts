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
export type GiFertilizerBagProps = typeof __propDef.props;
export type GiFertilizerBagEvents = typeof __propDef.events;
export type GiFertilizerBagSlots = typeof __propDef.slots;
export default class GiFertilizerBag extends SvelteComponentTyped<GiFertilizerBagProps, GiFertilizerBagEvents, GiFertilizerBagSlots> {
}
export {};
