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
export type MdUnfoldLessProps = typeof __propDef.props;
export type MdUnfoldLessEvents = typeof __propDef.events;
export type MdUnfoldLessSlots = typeof __propDef.slots;
export default class MdUnfoldLess extends SvelteComponentTyped<MdUnfoldLessProps, MdUnfoldLessEvents, MdUnfoldLessSlots> {
}
export {};
