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
export type FaSynagogueProps = typeof __propDef.props;
export type FaSynagogueEvents = typeof __propDef.events;
export type FaSynagogueSlots = typeof __propDef.slots;
export default class FaSynagogue extends SvelteComponentTyped<FaSynagogueProps, FaSynagogueEvents, FaSynagogueSlots> {
}
export {};
