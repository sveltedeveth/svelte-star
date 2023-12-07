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
export type GiOreProps = typeof __propDef.props;
export type GiOreEvents = typeof __propDef.events;
export type GiOreSlots = typeof __propDef.slots;
export default class GiOre extends SvelteComponentTyped<GiOreProps, GiOreEvents, GiOreSlots> {
}
export {};
