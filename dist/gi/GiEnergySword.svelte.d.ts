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
export type GiEnergySwordProps = typeof __propDef.props;
export type GiEnergySwordEvents = typeof __propDef.events;
export type GiEnergySwordSlots = typeof __propDef.slots;
export default class GiEnergySword extends SvelteComponentTyped<GiEnergySwordProps, GiEnergySwordEvents, GiEnergySwordSlots> {
}
export {};
