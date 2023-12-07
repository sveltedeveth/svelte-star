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
export type MdUnfoldMoreProps = typeof __propDef.props;
export type MdUnfoldMoreEvents = typeof __propDef.events;
export type MdUnfoldMoreSlots = typeof __propDef.slots;
export default class MdUnfoldMore extends SvelteComponentTyped<MdUnfoldMoreProps, MdUnfoldMoreEvents, MdUnfoldMoreSlots> {
}
export {};
