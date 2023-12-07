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
export type MdErrorProps = typeof __propDef.props;
export type MdErrorEvents = typeof __propDef.events;
export type MdErrorSlots = typeof __propDef.slots;
export default class MdError extends SvelteComponentTyped<MdErrorProps, MdErrorEvents, MdErrorSlots> {
}
export {};
