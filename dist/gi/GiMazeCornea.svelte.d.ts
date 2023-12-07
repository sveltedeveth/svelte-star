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
export type GiMazeCorneaProps = typeof __propDef.props;
export type GiMazeCorneaEvents = typeof __propDef.events;
export type GiMazeCorneaSlots = typeof __propDef.slots;
export default class GiMazeCornea extends SvelteComponentTyped<GiMazeCorneaProps, GiMazeCorneaEvents, GiMazeCorneaSlots> {
}
export {};
