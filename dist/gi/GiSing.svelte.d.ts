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
export type GiSingProps = typeof __propDef.props;
export type GiSingEvents = typeof __propDef.events;
export type GiSingSlots = typeof __propDef.slots;
export default class GiSing extends SvelteComponentTyped<GiSingProps, GiSingEvents, GiSingSlots> {
}
export {};
