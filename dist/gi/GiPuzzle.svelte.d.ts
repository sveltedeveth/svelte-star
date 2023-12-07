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
export type GiPuzzleProps = typeof __propDef.props;
export type GiPuzzleEvents = typeof __propDef.events;
export type GiPuzzleSlots = typeof __propDef.slots;
export default class GiPuzzle extends SvelteComponentTyped<GiPuzzleProps, GiPuzzleEvents, GiPuzzleSlots> {
}
export {};
