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
export type MdContentCutProps = typeof __propDef.props;
export type MdContentCutEvents = typeof __propDef.events;
export type MdContentCutSlots = typeof __propDef.slots;
export default class MdContentCut extends SvelteComponentTyped<MdContentCutProps, MdContentCutEvents, MdContentCutSlots> {
}
export {};
