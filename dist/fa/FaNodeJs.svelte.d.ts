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
export type FaNodeJsProps = typeof __propDef.props;
export type FaNodeJsEvents = typeof __propDef.events;
export type FaNodeJsSlots = typeof __propDef.slots;
export default class FaNodeJs extends SvelteComponentTyped<FaNodeJsProps, FaNodeJsEvents, FaNodeJsSlots> {
}
export {};
