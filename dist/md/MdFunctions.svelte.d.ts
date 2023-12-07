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
export type MdFunctionsProps = typeof __propDef.props;
export type MdFunctionsEvents = typeof __propDef.events;
export type MdFunctionsSlots = typeof __propDef.slots;
export default class MdFunctions extends SvelteComponentTyped<MdFunctionsProps, MdFunctionsEvents, MdFunctionsSlots> {
}
export {};
