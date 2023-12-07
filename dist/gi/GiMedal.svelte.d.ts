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
export type GiMedalProps = typeof __propDef.props;
export type GiMedalEvents = typeof __propDef.events;
export type GiMedalSlots = typeof __propDef.slots;
export default class GiMedal extends SvelteComponentTyped<GiMedalProps, GiMedalEvents, GiMedalSlots> {
}
export {};
