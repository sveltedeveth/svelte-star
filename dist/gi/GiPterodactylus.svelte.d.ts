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
export type GiPterodactylusProps = typeof __propDef.props;
export type GiPterodactylusEvents = typeof __propDef.events;
export type GiPterodactylusSlots = typeof __propDef.slots;
export default class GiPterodactylus extends SvelteComponentTyped<GiPterodactylusProps, GiPterodactylusEvents, GiPterodactylusSlots> {
}
export {};
