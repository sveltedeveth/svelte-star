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
export type FaProceduresProps = typeof __propDef.props;
export type FaProceduresEvents = typeof __propDef.events;
export type FaProceduresSlots = typeof __propDef.slots;
export default class FaProcedures extends SvelteComponentTyped<FaProceduresProps, FaProceduresEvents, FaProceduresSlots> {
}
export {};
