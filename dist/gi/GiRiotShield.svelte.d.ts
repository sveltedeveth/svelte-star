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
export type GiRiotShieldProps = typeof __propDef.props;
export type GiRiotShieldEvents = typeof __propDef.events;
export type GiRiotShieldSlots = typeof __propDef.slots;
export default class GiRiotShield extends SvelteComponentTyped<GiRiotShieldProps, GiRiotShieldEvents, GiRiotShieldSlots> {
}
export {};
