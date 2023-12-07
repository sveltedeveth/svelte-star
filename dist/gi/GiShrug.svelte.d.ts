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
export type GiShrugProps = typeof __propDef.props;
export type GiShrugEvents = typeof __propDef.events;
export type GiShrugSlots = typeof __propDef.slots;
export default class GiShrug extends SvelteComponentTyped<GiShrugProps, GiShrugEvents, GiShrugSlots> {
}
export {};
