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
export type FaAdProps = typeof __propDef.props;
export type FaAdEvents = typeof __propDef.events;
export type FaAdSlots = typeof __propDef.slots;
export default class FaAd extends SvelteComponentTyped<FaAdProps, FaAdEvents, FaAdSlots> {
}
export {};
