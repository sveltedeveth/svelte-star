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
export type GiNefertitiProps = typeof __propDef.props;
export type GiNefertitiEvents = typeof __propDef.events;
export type GiNefertitiSlots = typeof __propDef.slots;
export default class GiNefertiti extends SvelteComponentTyped<GiNefertitiProps, GiNefertitiEvents, GiNefertitiSlots> {
}
export {};
