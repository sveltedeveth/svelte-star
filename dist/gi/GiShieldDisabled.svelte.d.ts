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
export type GiShieldDisabledProps = typeof __propDef.props;
export type GiShieldDisabledEvents = typeof __propDef.events;
export type GiShieldDisabledSlots = typeof __propDef.slots;
export default class GiShieldDisabled extends SvelteComponentTyped<GiShieldDisabledProps, GiShieldDisabledEvents, GiShieldDisabledSlots> {
}
export {};
