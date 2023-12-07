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
export type IoMdCutProps = typeof __propDef.props;
export type IoMdCutEvents = typeof __propDef.events;
export type IoMdCutSlots = typeof __propDef.slots;
export default class IoMdCut extends SvelteComponentTyped<IoMdCutProps, IoMdCutEvents, IoMdCutSlots> {
}
export {};
