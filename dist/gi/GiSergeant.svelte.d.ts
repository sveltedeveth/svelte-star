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
export type GiSergeantProps = typeof __propDef.props;
export type GiSergeantEvents = typeof __propDef.events;
export type GiSergeantSlots = typeof __propDef.slots;
export default class GiSergeant extends SvelteComponentTyped<GiSergeantProps, GiSergeantEvents, GiSergeantSlots> {
}
export {};
