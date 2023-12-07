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
export type GiHutProps = typeof __propDef.props;
export type GiHutEvents = typeof __propDef.events;
export type GiHutSlots = typeof __propDef.slots;
export default class GiHut extends SvelteComponentTyped<GiHutProps, GiHutEvents, GiHutSlots> {
}
export {};
