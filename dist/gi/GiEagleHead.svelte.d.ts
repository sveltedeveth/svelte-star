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
export type GiEagleHeadProps = typeof __propDef.props;
export type GiEagleHeadEvents = typeof __propDef.events;
export type GiEagleHeadSlots = typeof __propDef.slots;
export default class GiEagleHead extends SvelteComponentTyped<GiEagleHeadProps, GiEagleHeadEvents, GiEagleHeadSlots> {
}
export {};
