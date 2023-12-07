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
export type FaEmpireProps = typeof __propDef.props;
export type FaEmpireEvents = typeof __propDef.events;
export type FaEmpireSlots = typeof __propDef.slots;
export default class FaEmpire extends SvelteComponentTyped<FaEmpireProps, FaEmpireEvents, FaEmpireSlots> {
}
export {};
