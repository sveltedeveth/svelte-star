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
export type GiSilencedProps = typeof __propDef.props;
export type GiSilencedEvents = typeof __propDef.events;
export type GiSilencedSlots = typeof __propDef.slots;
export default class GiSilenced extends SvelteComponentTyped<GiSilencedProps, GiSilencedEvents, GiSilencedSlots> {
}
export {};
