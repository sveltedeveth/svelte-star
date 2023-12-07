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
export type GiCapeProps = typeof __propDef.props;
export type GiCapeEvents = typeof __propDef.events;
export type GiCapeSlots = typeof __propDef.slots;
export default class GiCape extends SvelteComponentTyped<GiCapeProps, GiCapeEvents, GiCapeSlots> {
}
export {};
