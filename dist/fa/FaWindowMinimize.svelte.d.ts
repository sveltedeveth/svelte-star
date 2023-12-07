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
export type FaWindowMinimizeProps = typeof __propDef.props;
export type FaWindowMinimizeEvents = typeof __propDef.events;
export type FaWindowMinimizeSlots = typeof __propDef.slots;
export default class FaWindowMinimize extends SvelteComponentTyped<FaWindowMinimizeProps, FaWindowMinimizeEvents, FaWindowMinimizeSlots> {
}
export {};
