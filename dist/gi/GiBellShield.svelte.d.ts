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
export type GiBellShieldProps = typeof __propDef.props;
export type GiBellShieldEvents = typeof __propDef.events;
export type GiBellShieldSlots = typeof __propDef.slots;
export default class GiBellShield extends SvelteComponentTyped<GiBellShieldProps, GiBellShieldEvents, GiBellShieldSlots> {
}
export {};
