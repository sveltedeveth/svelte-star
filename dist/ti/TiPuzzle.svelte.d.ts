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
export type TiPuzzleProps = typeof __propDef.props;
export type TiPuzzleEvents = typeof __propDef.events;
export type TiPuzzleSlots = typeof __propDef.slots;
export default class TiPuzzle extends SvelteComponentTyped<TiPuzzleProps, TiPuzzleEvents, TiPuzzleSlots> {
}
export {};
