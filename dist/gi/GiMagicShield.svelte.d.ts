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
export type GiMagicShieldProps = typeof __propDef.props;
export type GiMagicShieldEvents = typeof __propDef.events;
export type GiMagicShieldSlots = typeof __propDef.slots;
export default class GiMagicShield extends SvelteComponentTyped<GiMagicShieldProps, GiMagicShieldEvents, GiMagicShieldSlots> {
}
export {};
