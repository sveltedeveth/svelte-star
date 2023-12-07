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
export type FaAdnProps = typeof __propDef.props;
export type FaAdnEvents = typeof __propDef.events;
export type FaAdnSlots = typeof __propDef.slots;
export default class FaAdn extends SvelteComponentTyped<FaAdnProps, FaAdnEvents, FaAdnSlots> {
}
export {};
