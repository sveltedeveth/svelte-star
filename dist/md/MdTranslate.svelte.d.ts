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
export type MdTranslateProps = typeof __propDef.props;
export type MdTranslateEvents = typeof __propDef.events;
export type MdTranslateSlots = typeof __propDef.slots;
export default class MdTranslate extends SvelteComponentTyped<MdTranslateProps, MdTranslateEvents, MdTranslateSlots> {
}
export {};
