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
export type GiRoundShieldProps = typeof __propDef.props;
export type GiRoundShieldEvents = typeof __propDef.events;
export type GiRoundShieldSlots = typeof __propDef.slots;
export default class GiRoundShield extends SvelteComponentTyped<GiRoundShieldProps, GiRoundShieldEvents, GiRoundShieldSlots> {
}
export {};
