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
export type FaWindowMaximizeProps = typeof __propDef.props;
export type FaWindowMaximizeEvents = typeof __propDef.events;
export type FaWindowMaximizeSlots = typeof __propDef.slots;
export default class FaWindowMaximize extends SvelteComponentTyped<FaWindowMaximizeProps, FaWindowMaximizeEvents, FaWindowMaximizeSlots> {
}
export {};
