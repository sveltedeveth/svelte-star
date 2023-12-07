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
export type GiMedusaHeadProps = typeof __propDef.props;
export type GiMedusaHeadEvents = typeof __propDef.events;
export type GiMedusaHeadSlots = typeof __propDef.slots;
export default class GiMedusaHead extends SvelteComponentTyped<GiMedusaHeadProps, GiMedusaHeadEvents, GiMedusaHeadSlots> {
}
export {};
