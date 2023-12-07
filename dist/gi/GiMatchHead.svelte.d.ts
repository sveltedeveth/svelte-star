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
export type GiMatchHeadProps = typeof __propDef.props;
export type GiMatchHeadEvents = typeof __propDef.events;
export type GiMatchHeadSlots = typeof __propDef.slots;
export default class GiMatchHead extends SvelteComponentTyped<GiMatchHeadProps, GiMatchHeadEvents, GiMatchHeadSlots> {
}
export {};
