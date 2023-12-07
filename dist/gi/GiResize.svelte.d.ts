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
export type GiResizeProps = typeof __propDef.props;
export type GiResizeEvents = typeof __propDef.events;
export type GiResizeSlots = typeof __propDef.slots;
export default class GiResize extends SvelteComponentTyped<GiResizeProps, GiResizeEvents, GiResizeSlots> {
}
export {};
