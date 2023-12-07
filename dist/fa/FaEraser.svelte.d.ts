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
export type FaEraserProps = typeof __propDef.props;
export type FaEraserEvents = typeof __propDef.events;
export type FaEraserSlots = typeof __propDef.slots;
export default class FaEraser extends SvelteComponentTyped<FaEraserProps, FaEraserEvents, FaEraserSlots> {
}
export {};
