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
export type FaDashcubeProps = typeof __propDef.props;
export type FaDashcubeEvents = typeof __propDef.events;
export type FaDashcubeSlots = typeof __propDef.slots;
export default class FaDashcube extends SvelteComponentTyped<FaDashcubeProps, FaDashcubeEvents, FaDashcubeSlots> {
}
export {};
