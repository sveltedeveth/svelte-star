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
export type GiHangGliderProps = typeof __propDef.props;
export type GiHangGliderEvents = typeof __propDef.events;
export type GiHangGliderSlots = typeof __propDef.slots;
export default class GiHangGlider extends SvelteComponentTyped<GiHangGliderProps, GiHangGliderEvents, GiHangGliderSlots> {
}
export {};
