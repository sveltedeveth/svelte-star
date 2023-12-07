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
export type FaFileCsvProps = typeof __propDef.props;
export type FaFileCsvEvents = typeof __propDef.events;
export type FaFileCsvSlots = typeof __propDef.slots;
export default class FaFileCsv extends SvelteComponentTyped<FaFileCsvProps, FaFileCsvEvents, FaFileCsvSlots> {
}
export {};
