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
export type GiGreaseTrapProps = typeof __propDef.props;
export type GiGreaseTrapEvents = typeof __propDef.events;
export type GiGreaseTrapSlots = typeof __propDef.slots;
export default class GiGreaseTrap extends SvelteComponentTyped<GiGreaseTrapProps, GiGreaseTrapEvents, GiGreaseTrapSlots> {
}
export {};
