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
export type GiCrossShieldProps = typeof __propDef.props;
export type GiCrossShieldEvents = typeof __propDef.events;
export type GiCrossShieldSlots = typeof __propDef.slots;
export default class GiCrossShield extends SvelteComponentTyped<GiCrossShieldProps, GiCrossShieldEvents, GiCrossShieldSlots> {
}
export {};
