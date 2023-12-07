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
export type GiJoinProps = typeof __propDef.props;
export type GiJoinEvents = typeof __propDef.events;
export type GiJoinSlots = typeof __propDef.slots;
export default class GiJoin extends SvelteComponentTyped<GiJoinProps, GiJoinEvents, GiJoinSlots> {
}
export {};
