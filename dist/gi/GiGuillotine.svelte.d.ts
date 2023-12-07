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
export type GiGuillotineProps = typeof __propDef.props;
export type GiGuillotineEvents = typeof __propDef.events;
export type GiGuillotineSlots = typeof __propDef.slots;
export default class GiGuillotine extends SvelteComponentTyped<GiGuillotineProps, GiGuillotineEvents, GiGuillotineSlots> {
}
export {};
