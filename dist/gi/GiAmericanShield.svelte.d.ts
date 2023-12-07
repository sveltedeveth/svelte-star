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
export type GiAmericanShieldProps = typeof __propDef.props;
export type GiAmericanShieldEvents = typeof __propDef.events;
export type GiAmericanShieldSlots = typeof __propDef.slots;
export default class GiAmericanShield extends SvelteComponentTyped<GiAmericanShieldProps, GiAmericanShieldEvents, GiAmericanShieldSlots> {
}
export {};
