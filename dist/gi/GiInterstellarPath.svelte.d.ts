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
export type GiInterstellarPathProps = typeof __propDef.props;
export type GiInterstellarPathEvents = typeof __propDef.events;
export type GiInterstellarPathSlots = typeof __propDef.slots;
export default class GiInterstellarPath extends SvelteComponentTyped<GiInterstellarPathProps, GiInterstellarPathEvents, GiInterstellarPathSlots> {
}
export {};
