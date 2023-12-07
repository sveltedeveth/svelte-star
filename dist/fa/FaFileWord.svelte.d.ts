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
export type FaFileWordProps = typeof __propDef.props;
export type FaFileWordEvents = typeof __propDef.events;
export type FaFileWordSlots = typeof __propDef.slots;
export default class FaFileWord extends SvelteComponentTyped<FaFileWordProps, FaFileWordEvents, FaFileWordSlots> {
}
export {};
