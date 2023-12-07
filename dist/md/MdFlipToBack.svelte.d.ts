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
export type MdFlipToBackProps = typeof __propDef.props;
export type MdFlipToBackEvents = typeof __propDef.events;
export type MdFlipToBackSlots = typeof __propDef.slots;
export default class MdFlipToBack extends SvelteComponentTyped<MdFlipToBackProps, MdFlipToBackEvents, MdFlipToBackSlots> {
}
export {};
