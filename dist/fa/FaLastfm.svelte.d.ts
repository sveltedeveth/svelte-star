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
export type FaLastfmProps = typeof __propDef.props;
export type FaLastfmEvents = typeof __propDef.events;
export type FaLastfmSlots = typeof __propDef.slots;
export default class FaLastfm extends SvelteComponentTyped<FaLastfmProps, FaLastfmEvents, FaLastfmSlots> {
}
export {};
