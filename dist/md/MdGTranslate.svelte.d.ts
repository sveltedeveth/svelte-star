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
export type MdGTranslateProps = typeof __propDef.props;
export type MdGTranslateEvents = typeof __propDef.events;
export type MdGTranslateSlots = typeof __propDef.slots;
export default class MdGTranslate extends SvelteComponentTyped<MdGTranslateProps, MdGTranslateEvents, MdGTranslateSlots> {
}
export {};
