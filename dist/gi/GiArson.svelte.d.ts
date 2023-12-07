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
export type GiArsonProps = typeof __propDef.props;
export type GiArsonEvents = typeof __propDef.events;
export type GiArsonSlots = typeof __propDef.slots;
export default class GiArson extends SvelteComponentTyped<GiArsonProps, GiArsonEvents, GiArsonSlots> {
}
export {};
