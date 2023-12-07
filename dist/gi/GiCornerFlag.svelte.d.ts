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
export type GiCornerFlagProps = typeof __propDef.props;
export type GiCornerFlagEvents = typeof __propDef.events;
export type GiCornerFlagSlots = typeof __propDef.slots;
export default class GiCornerFlag extends SvelteComponentTyped<GiCornerFlagProps, GiCornerFlagEvents, GiCornerFlagSlots> {
}
export {};
