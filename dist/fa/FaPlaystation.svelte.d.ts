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
export type FaPlaystationProps = typeof __propDef.props;
export type FaPlaystationEvents = typeof __propDef.events;
export type FaPlaystationSlots = typeof __propDef.slots;
export default class FaPlaystation extends SvelteComponentTyped<FaPlaystationProps, FaPlaystationEvents, FaPlaystationSlots> {
}
export {};
