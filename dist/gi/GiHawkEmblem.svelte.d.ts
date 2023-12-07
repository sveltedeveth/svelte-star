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
export type GiHawkEmblemProps = typeof __propDef.props;
export type GiHawkEmblemEvents = typeof __propDef.events;
export type GiHawkEmblemSlots = typeof __propDef.slots;
export default class GiHawkEmblem extends SvelteComponentTyped<GiHawkEmblemProps, GiHawkEmblemEvents, GiHawkEmblemSlots> {
}
export {};
