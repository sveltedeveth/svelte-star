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
export type GiBorderedShieldProps = typeof __propDef.props;
export type GiBorderedShieldEvents = typeof __propDef.events;
export type GiBorderedShieldSlots = typeof __propDef.slots;
export default class GiBorderedShield extends SvelteComponentTyped<GiBorderedShieldProps, GiBorderedShieldEvents, GiBorderedShieldSlots> {
}
export {};
