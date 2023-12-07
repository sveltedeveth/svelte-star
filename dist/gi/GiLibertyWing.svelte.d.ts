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
export type GiLibertyWingProps = typeof __propDef.props;
export type GiLibertyWingEvents = typeof __propDef.events;
export type GiLibertyWingSlots = typeof __propDef.slots;
export default class GiLibertyWing extends SvelteComponentTyped<GiLibertyWingProps, GiLibertyWingEvents, GiLibertyWingSlots> {
}
export {};
