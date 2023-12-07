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
export type GiSlashedShieldProps = typeof __propDef.props;
export type GiSlashedShieldEvents = typeof __propDef.events;
export type GiSlashedShieldSlots = typeof __propDef.slots;
export default class GiSlashedShield extends SvelteComponentTyped<GiSlashedShieldProps, GiSlashedShieldEvents, GiSlashedShieldSlots> {
}
export {};
