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
export type FaTabletsProps = typeof __propDef.props;
export type FaTabletsEvents = typeof __propDef.events;
export type FaTabletsSlots = typeof __propDef.slots;
export default class FaTablets extends SvelteComponentTyped<FaTabletsProps, FaTabletsEvents, FaTabletsSlots> {
}
export {};
