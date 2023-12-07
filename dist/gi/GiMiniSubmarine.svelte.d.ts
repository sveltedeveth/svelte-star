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
export type GiMiniSubmarineProps = typeof __propDef.props;
export type GiMiniSubmarineEvents = typeof __propDef.events;
export type GiMiniSubmarineSlots = typeof __propDef.slots;
export default class GiMiniSubmarine extends SvelteComponentTyped<GiMiniSubmarineProps, GiMiniSubmarineEvents, GiMiniSubmarineSlots> {
}
export {};
