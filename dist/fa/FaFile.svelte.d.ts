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
export type FaFileProps = typeof __propDef.props;
export type FaFileEvents = typeof __propDef.events;
export type FaFileSlots = typeof __propDef.slots;
export default class FaFile extends SvelteComponentTyped<FaFileProps, FaFileEvents, FaFileSlots> {
}
export {};
