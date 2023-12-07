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
export type GiRibbonShieldProps = typeof __propDef.props;
export type GiRibbonShieldEvents = typeof __propDef.events;
export type GiRibbonShieldSlots = typeof __propDef.slots;
export default class GiRibbonShield extends SvelteComponentTyped<GiRibbonShieldProps, GiRibbonShieldEvents, GiRibbonShieldSlots> {
}
export {};
