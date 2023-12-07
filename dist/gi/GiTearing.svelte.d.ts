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
export type GiTearingProps = typeof __propDef.props;
export type GiTearingEvents = typeof __propDef.events;
export type GiTearingSlots = typeof __propDef.slots;
export default class GiTearing extends SvelteComponentTyped<GiTearingProps, GiTearingEvents, GiTearingSlots> {
}
export {};
