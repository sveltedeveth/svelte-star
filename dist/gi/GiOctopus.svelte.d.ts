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
export type GiOctopusProps = typeof __propDef.props;
export type GiOctopusEvents = typeof __propDef.events;
export type GiOctopusSlots = typeof __propDef.slots;
export default class GiOctopus extends SvelteComponentTyped<GiOctopusProps, GiOctopusEvents, GiOctopusSlots> {
}
export {};
