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
export type FaFileContractProps = typeof __propDef.props;
export type FaFileContractEvents = typeof __propDef.events;
export type FaFileContractSlots = typeof __propDef.slots;
export default class FaFileContract extends SvelteComponentTyped<FaFileContractProps, FaFileContractEvents, FaFileContractSlots> {
}
export {};
