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
export type GiMilkCartonProps = typeof __propDef.props;
export type GiMilkCartonEvents = typeof __propDef.events;
export type GiMilkCartonSlots = typeof __propDef.slots;
export default class GiMilkCarton extends SvelteComponentTyped<GiMilkCartonProps, GiMilkCartonEvents, GiMilkCartonSlots> {
}
export {};
