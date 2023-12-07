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
export type GiMazeSawProps = typeof __propDef.props;
export type GiMazeSawEvents = typeof __propDef.events;
export type GiMazeSawSlots = typeof __propDef.slots;
export default class GiMazeSaw extends SvelteComponentTyped<GiMazeSawProps, GiMazeSawEvents, GiMazeSawSlots> {
}
export {};
