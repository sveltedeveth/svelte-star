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
export type GiSprayProps = typeof __propDef.props;
export type GiSprayEvents = typeof __propDef.events;
export type GiSpraySlots = typeof __propDef.slots;
export default class GiSpray extends SvelteComponentTyped<GiSprayProps, GiSprayEvents, GiSpraySlots> {
}
export {};
