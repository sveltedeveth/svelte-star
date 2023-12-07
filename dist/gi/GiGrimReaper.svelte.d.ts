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
export type GiGrimReaperProps = typeof __propDef.props;
export type GiGrimReaperEvents = typeof __propDef.events;
export type GiGrimReaperSlots = typeof __propDef.slots;
export default class GiGrimReaper extends SvelteComponentTyped<GiGrimReaperProps, GiGrimReaperEvents, GiGrimReaperSlots> {
}
export {};
