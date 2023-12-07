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
export type GiShiningSwordProps = typeof __propDef.props;
export type GiShiningSwordEvents = typeof __propDef.events;
export type GiShiningSwordSlots = typeof __propDef.slots;
export default class GiShiningSword extends SvelteComponentTyped<GiShiningSwordProps, GiShiningSwordEvents, GiShiningSwordSlots> {
}
export {};
