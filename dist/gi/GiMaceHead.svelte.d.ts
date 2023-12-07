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
export type GiMaceHeadProps = typeof __propDef.props;
export type GiMaceHeadEvents = typeof __propDef.events;
export type GiMaceHeadSlots = typeof __propDef.slots;
export default class GiMaceHead extends SvelteComponentTyped<GiMaceHeadProps, GiMaceHeadEvents, GiMaceHeadSlots> {
}
export {};
