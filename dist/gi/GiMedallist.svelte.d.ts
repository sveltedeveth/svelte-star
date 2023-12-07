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
export type GiMedallistProps = typeof __propDef.props;
export type GiMedallistEvents = typeof __propDef.events;
export type GiMedallistSlots = typeof __propDef.slots;
export default class GiMedallist extends SvelteComponentTyped<GiMedallistProps, GiMedallistEvents, GiMedallistSlots> {
}
export {};
