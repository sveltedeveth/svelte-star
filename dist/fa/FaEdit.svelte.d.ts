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
export type FaEditProps = typeof __propDef.props;
export type FaEditEvents = typeof __propDef.events;
export type FaEditSlots = typeof __propDef.slots;
export default class FaEdit extends SvelteComponentTyped<FaEditProps, FaEditEvents, FaEditSlots> {
}
export {};
