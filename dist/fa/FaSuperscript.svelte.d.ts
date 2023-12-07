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
export type FaSuperscriptProps = typeof __propDef.props;
export type FaSuperscriptEvents = typeof __propDef.events;
export type FaSuperscriptSlots = typeof __propDef.slots;
export default class FaSuperscript extends SvelteComponentTyped<FaSuperscriptProps, FaSuperscriptEvents, FaSuperscriptSlots> {
}
export {};
