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
export type FaWpexplorerProps = typeof __propDef.props;
export type FaWpexplorerEvents = typeof __propDef.events;
export type FaWpexplorerSlots = typeof __propDef.slots;
export default class FaWpexplorer extends SvelteComponentTyped<FaWpexplorerProps, FaWpexplorerEvents, FaWpexplorerSlots> {
}
export {};
