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
export type GiShieldcombProps = typeof __propDef.props;
export type GiShieldcombEvents = typeof __propDef.events;
export type GiShieldcombSlots = typeof __propDef.slots;
export default class GiShieldcomb extends SvelteComponentTyped<GiShieldcombProps, GiShieldcombEvents, GiShieldcombSlots> {
}
export {};
