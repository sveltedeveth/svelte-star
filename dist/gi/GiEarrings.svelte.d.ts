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
export type GiEarringsProps = typeof __propDef.props;
export type GiEarringsEvents = typeof __propDef.events;
export type GiEarringsSlots = typeof __propDef.slots;
export default class GiEarrings extends SvelteComponentTyped<GiEarringsProps, GiEarringsEvents, GiEarringsSlots> {
}
export {};
