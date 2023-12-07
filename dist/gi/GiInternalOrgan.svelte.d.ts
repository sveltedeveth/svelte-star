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
export type GiInternalOrganProps = typeof __propDef.props;
export type GiInternalOrganEvents = typeof __propDef.events;
export type GiInternalOrganSlots = typeof __propDef.slots;
export default class GiInternalOrgan extends SvelteComponentTyped<GiInternalOrganProps, GiInternalOrganEvents, GiInternalOrganSlots> {
}
export {};
