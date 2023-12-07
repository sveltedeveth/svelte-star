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
export type GiLeadPipeProps = typeof __propDef.props;
export type GiLeadPipeEvents = typeof __propDef.events;
export type GiLeadPipeSlots = typeof __propDef.slots;
export default class GiLeadPipe extends SvelteComponentTyped<GiLeadPipeProps, GiLeadPipeEvents, GiLeadPipeSlots> {
}
export {};
