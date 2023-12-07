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
export type GiMazeProps = typeof __propDef.props;
export type GiMazeEvents = typeof __propDef.events;
export type GiMazeSlots = typeof __propDef.slots;
export default class GiMaze extends SvelteComponentTyped<GiMazeProps, GiMazeEvents, GiMazeSlots> {
}
export {};
