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
export type FaRenrenProps = typeof __propDef.props;
export type FaRenrenEvents = typeof __propDef.events;
export type FaRenrenSlots = typeof __propDef.slots;
export default class FaRenren extends SvelteComponentTyped<FaRenrenProps, FaRenrenEvents, FaRenrenSlots> {
}
export {};
