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
export type GiDrumProps = typeof __propDef.props;
export type GiDrumEvents = typeof __propDef.events;
export type GiDrumSlots = typeof __propDef.slots;
export default class GiDrum extends SvelteComponentTyped<GiDrumProps, GiDrumEvents, GiDrumSlots> {
}
export {};
