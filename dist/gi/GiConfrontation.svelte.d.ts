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
export type GiConfrontationProps = typeof __propDef.props;
export type GiConfrontationEvents = typeof __propDef.events;
export type GiConfrontationSlots = typeof __propDef.slots;
export default class GiConfrontation extends SvelteComponentTyped<GiConfrontationProps, GiConfrontationEvents, GiConfrontationSlots> {
}
export {};
