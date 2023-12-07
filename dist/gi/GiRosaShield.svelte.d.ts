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
export type GiRosaShieldProps = typeof __propDef.props;
export type GiRosaShieldEvents = typeof __propDef.events;
export type GiRosaShieldSlots = typeof __propDef.slots;
export default class GiRosaShield extends SvelteComponentTyped<GiRosaShieldProps, GiRosaShieldEvents, GiRosaShieldSlots> {
}
export {};
