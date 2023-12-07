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
export type FaInternetExplorerProps = typeof __propDef.props;
export type FaInternetExplorerEvents = typeof __propDef.events;
export type FaInternetExplorerSlots = typeof __propDef.slots;
export default class FaInternetExplorer extends SvelteComponentTyped<FaInternetExplorerProps, FaInternetExplorerEvents, FaInternetExplorerSlots> {
}
export {};
