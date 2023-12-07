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
export type GoDiffRemovedProps = typeof __propDef.props;
export type GoDiffRemovedEvents = typeof __propDef.events;
export type GoDiffRemovedSlots = typeof __propDef.slots;
export default class GoDiffRemoved extends SvelteComponentTyped<GoDiffRemovedProps, GoDiffRemovedEvents, GoDiffRemovedSlots> {
}
export {};
