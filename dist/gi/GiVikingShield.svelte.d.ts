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
export type GiVikingShieldProps = typeof __propDef.props;
export type GiVikingShieldEvents = typeof __propDef.events;
export type GiVikingShieldSlots = typeof __propDef.slots;
export default class GiVikingShield extends SvelteComponentTyped<GiVikingShieldProps, GiVikingShieldEvents, GiVikingShieldSlots> {
}
export {};
