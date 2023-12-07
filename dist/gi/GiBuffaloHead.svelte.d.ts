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
export type GiBuffaloHeadProps = typeof __propDef.props;
export type GiBuffaloHeadEvents = typeof __propDef.events;
export type GiBuffaloHeadSlots = typeof __propDef.slots;
export default class GiBuffaloHead extends SvelteComponentTyped<GiBuffaloHeadProps, GiBuffaloHeadEvents, GiBuffaloHeadSlots> {
}
export {};
