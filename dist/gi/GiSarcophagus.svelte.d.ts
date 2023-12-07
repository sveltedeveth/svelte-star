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
export type GiSarcophagusProps = typeof __propDef.props;
export type GiSarcophagusEvents = typeof __propDef.events;
export type GiSarcophagusSlots = typeof __propDef.slots;
export default class GiSarcophagus extends SvelteComponentTyped<GiSarcophagusProps, GiSarcophagusEvents, GiSarcophagusSlots> {
}
export {};
