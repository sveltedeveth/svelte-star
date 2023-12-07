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
export type FaGlassMartiniProps = typeof __propDef.props;
export type FaGlassMartiniEvents = typeof __propDef.events;
export type FaGlassMartiniSlots = typeof __propDef.slots;
export default class FaGlassMartini extends SvelteComponentTyped<FaGlassMartiniProps, FaGlassMartiniEvents, FaGlassMartiniSlots> {
}
export {};
