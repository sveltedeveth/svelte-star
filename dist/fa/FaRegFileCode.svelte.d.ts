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
export type FaRegFileCodeProps = typeof __propDef.props;
export type FaRegFileCodeEvents = typeof __propDef.events;
export type FaRegFileCodeSlots = typeof __propDef.slots;
export default class FaRegFileCode extends SvelteComponentTyped<FaRegFileCodeProps, FaRegFileCodeEvents, FaRegFileCodeSlots> {
}
export {};
