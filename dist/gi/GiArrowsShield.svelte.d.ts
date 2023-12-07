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
export type GiArrowsShieldProps = typeof __propDef.props;
export type GiArrowsShieldEvents = typeof __propDef.events;
export type GiArrowsShieldSlots = typeof __propDef.slots;
export default class GiArrowsShield extends SvelteComponentTyped<GiArrowsShieldProps, GiArrowsShieldEvents, GiArrowsShieldSlots> {
}
export {};
