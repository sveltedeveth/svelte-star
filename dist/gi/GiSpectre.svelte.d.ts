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
export type GiSpectreProps = typeof __propDef.props;
export type GiSpectreEvents = typeof __propDef.events;
export type GiSpectreSlots = typeof __propDef.slots;
export default class GiSpectre extends SvelteComponentTyped<GiSpectreProps, GiSpectreEvents, GiSpectreSlots> {
}
export {};
