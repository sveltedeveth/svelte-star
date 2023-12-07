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
export type GiWolfHeadProps = typeof __propDef.props;
export type GiWolfHeadEvents = typeof __propDef.events;
export type GiWolfHeadSlots = typeof __propDef.slots;
export default class GiWolfHead extends SvelteComponentTyped<GiWolfHeadProps, GiWolfHeadEvents, GiWolfHeadSlots> {
}
export {};
