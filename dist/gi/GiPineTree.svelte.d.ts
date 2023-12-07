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
export type GiPineTreeProps = typeof __propDef.props;
export type GiPineTreeEvents = typeof __propDef.events;
export type GiPineTreeSlots = typeof __propDef.slots;
export default class GiPineTree extends SvelteComponentTyped<GiPineTreeProps, GiPineTreeEvents, GiPineTreeSlots> {
}
export {};
