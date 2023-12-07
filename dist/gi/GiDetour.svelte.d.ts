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
export type GiDetourProps = typeof __propDef.props;
export type GiDetourEvents = typeof __propDef.events;
export type GiDetourSlots = typeof __propDef.slots;
export default class GiDetour extends SvelteComponentTyped<GiDetourProps, GiDetourEvents, GiDetourSlots> {
}
export {};
