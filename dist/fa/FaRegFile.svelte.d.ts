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
export type FaRegFileProps = typeof __propDef.props;
export type FaRegFileEvents = typeof __propDef.events;
export type FaRegFileSlots = typeof __propDef.slots;
export default class FaRegFile extends SvelteComponentTyped<FaRegFileProps, FaRegFileEvents, FaRegFileSlots> {
}
export {};
