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
export type GiRogueProps = typeof __propDef.props;
export type GiRogueEvents = typeof __propDef.events;
export type GiRogueSlots = typeof __propDef.slots;
export default class GiRogue extends SvelteComponentTyped<GiRogueProps, GiRogueEvents, GiRogueSlots> {
}
export {};
