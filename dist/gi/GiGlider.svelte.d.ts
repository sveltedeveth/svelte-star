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
export type GiGliderProps = typeof __propDef.props;
export type GiGliderEvents = typeof __propDef.events;
export type GiGliderSlots = typeof __propDef.slots;
export default class GiGlider extends SvelteComponentTyped<GiGliderProps, GiGliderEvents, GiGliderSlots> {
}
export {};
